import React, { useState, useEffect } from "react";
import spotify from "./images/spotify.png";
import apple from "./images/apple.png";
import { Link } from "react-router-dom";

const SharedPlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [selectedApp, setSelectedApp] = useState("");
  const [playlistLink, setPlaylistLink] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [userName, setUserName] = useState(); // Default value, replace with actual name
  const [isLoading, setIsLoading] = useState(true);
  const [charLimit, setCharLimit] = useState(100);
  const [userResponse, setUserResponse] = useState({});

  useEffect(() => {
    // Fetch tasks from the API when the component mounts
    fetchPlaylist();
    fetchUser();
  }, []);

  const handleDescriptionChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= charLimit) {
      setDescription(inputText);
    }
  };

  const fetchUser = () => {
    const token = sessionStorage.getItem("accessToken");
    fetch("https://student360-api.onrender.com/api/user", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        const result = data.result;
        const fullName = result.full_name;
        const firstName = fullName.split(" ")[0]; // Extract the first name
        setUserName(firstName);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      });
  };

  const fetchPlaylist = () => {
    const token = sessionStorage.getItem("accessToken"); // Assuming you store the token in localStorage

    fetch("https://student360-api.onrender.com/api/playlist", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch playlist");
        }
        return response.json();
      })
      .then((data) => {
        
        setPlaylist(data);
      })
      .catch((error) => {
        console.error("Error fetching playlist:", error);
      });
  };
  const musicApps = [
    { id: 1, name: "Spotify", image: spotify },
    { id: 2, name: "Apple Music", image: apple },
    // Add more music apps as needed
  ];

  const handleAppChange = (selectedApp) => {
    const selectedAppData = musicApps.find((app) => app.name === selectedApp);
    setImageSrc(selectedAppData ? selectedAppData.image : "");
    setSelectedApp(selectedApp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all required fields are filled
    if (!playlistName || !selectedApp || !playlistLink) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Create a new playlist object
      const newPlaylist = {
        playlist: playlistName,
        player: selectedApp,
        link: playlistLink,
        description: description,
        // description: description,
      };

      const token = sessionStorage.getItem("accessToken");

      // Update the playlists state with the new playlist
      const response = await fetch(
        "https://student360-api.onrender.com/api/playlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(newPlaylist),
        }
      );
      console.log(newPlaylist);
      if (!response.ok) {
        const errorMessage = await response.text(); // Get the specific error message from the server
        throw new Error(`Failed to add playlist: ${errorMessage}`);
      }

      // Fetch tasks again after successfully adding a new playlist
      fetchPlaylist();
      setPlaylistName("");
      setSelectedApp("");
      setPlaylistLink("");
      setImageSrc("");
      setDescription("");
    } catch (error) {
      console.error(error.message);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div>
        <form onSubmit={handleSubmit} className="w-1/2  pb-5 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name of Playlist
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select music application
            <select
              value={selectedApp}
              onChange={(e) => handleAppChange(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Music App</option>
              {musicApps.map((app) => (
                <option key={app.id} value={app.name}>
                  {app.name}
                </option>
              ))}
            </select>
          </label>

          {imageSrc && (
            <img
              src={imageSrc}
              alt="Selected Music App"
              className="w-1/2 h-10 object-contain mb-4"
            />
          )}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Playlist Link:
            <input
              type="text"
              value={playlistLink}
              onChange={(e) => setPlaylistLink(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <button
            type="submit"
            className="bg-[#3A4FFE] text-white py-2 px-5 rounded-md w-fit hover:bg-gray-800 font-extrabold"
          >
            ADD
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-2 lg:grid-cols-4 gap-8">
        {playlist.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-white pb-6 text-center rounded-xl shadow-md"
          >
            {musicApps.map((app) => {
              if (app.name === playlist.musicPlayer) {
                return (
                  <img
                    key={app.id}
                    src={app.image}
                    alt={playlist.playlistName}
                    className="h-fit py-2 mx-auto object-cover"
                  />
                );
              }
              return null;
            })}
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {playlist.playlistName}
            </h3>
            <p className="text-gray-600">{playlist.description}</p>
            <Link
              to={playlist.link}
              className="mt-4 text-[#3A4FFE] border border-[#3A4FFE] rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Get Playlist</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedPlaylist;
