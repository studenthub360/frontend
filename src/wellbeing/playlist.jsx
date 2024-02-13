import React, { useState } from "react";
import spotify from "./images/spotify.png";
import apple from "./images/apple.png";
import { Link } from "react-router-dom";

const SharedPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [selectedApp, setSelectedApp] = useState("");
  const [playlistLink, setPlaylistLink] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all required fields are filled
    if (!playlistName || !selectedApp || !playlistLink) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new playlist object
    const newPlaylist = {
      id: playlists.length + 1,
      name: playlistName,
      description: description, // Add a description logic as needed
      image: imageSrc,
    };

    // Update the playlists state with the new playlist
    setPlaylists([...playlists, newPlaylist]);

    // Clear the form fields
    setPlaylistName("");
    setSelectedApp("");
    setPlaylistLink("");
    setImageSrc("");
    setDescription("");
  };

  // Mock data for playlists
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "HEART-BREAK",
      description:
        "Taylor swift, Lewis Capaldi, Justin Bieber, Ariana Grande +15 more",
      image: spotify,
      link: "https://open.spotify.com/playlist/37i9dQZF1DXbrUpGvoi3TS",
    },
    {
      id: 2,
      name: "AFRO NIGGAS",
      description:
        "Davido, Wizkid, Burna Boy, Ayra Star, Rema, Fireboy  +10 more",
      image: apple,
      link: "https://music.apple.com/us/playlist/afrobeats-hits/pl.dc349df19c6f410d874c197db63ecfed",
    },
  ]);

  return (
    <div className="container mx-auto mt-8">
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-1/2  pb-5 "
        >
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
              onChange={(e) => setDescription(e.target.value)}
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
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-white pb-6 text-center rounded-xl shadow-md"
          >
            <img
              src={playlist.image}
              alt={playlist.name}
              className=" justify-between items-center h-fit py-2 mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {playlist.name}
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
