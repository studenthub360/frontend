import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LearningResources = () => {
  const [resources, setResources] = useState([]);
  const [resourceName, setResourceName] = useState("");
  const [resourceLink, setResourceLink] = useState("");
  const [resourceImage, setResourceImage] = useState("");
  const [description, setDescription] = useState("");
  const [charLimit, setCharLimit] = useState(100);

  useEffect(() => {
    // Fetch resources from the API when the component mounts
    fetchResources();
  }, []);

  const handleDescriptionChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= charLimit) {
      setDescription(inputText);
    }
  };

  const fetchResources = () => {
    const token = sessionStorage.getItem("accessToken");

    fetch("https://student360-api.onrender.com/api/resources", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }
        return response.json();
      })
      .then((data) => {
        setResources(data);
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all required fields are filled
    if (!resourceName || !resourceLink || !resourceImage) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Create a new resource object
      const newResource = {
        name: resourceName,
        link: resourceLink,
        image: resourceImage,
        description: description,
      };

      const token = sessionStorage.getItem("accessToken");

      // Update the resources state with the new resource
      const response = await fetch(
        "https://student360-api.onrender.com/api/resources",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(newResource),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text(); // Get the specific error message from the server
        throw new Error(`Failed to add resource: ${errorMessage}`);
      }

      // Fetch resources again after successfully adding a new resource
      fetchResources();
      setResourceName("");
      setResourceLink("");
      setResourceImage("");
      setDescription("");
    } catch (error) {
      console.error(error.message);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div>
        <form onSubmit={handleSubmit} className="w-1/2 pb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name of Resource
            <input
              type="text"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description of Resource:
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resource Link:
            <input
              type="text"
              value={resourceLink}
              onChange={(e) => setResourceLink(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resource Image :
            <input
              type="file"
              value={resourceImage}
              onChange={(e) => setResourceImage(e.target.value)}
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
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white pb-6 text-center rounded-xl shadow-md"
          >
            <img
              src={resource.image}
              alt={resource.name}
              className="h-fit py-2 mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {resource.name}
            </h3>
            <p className="text-gray-600">{resource.description}</p>
            <Link
              to={resource.link}
              className="mt-4 text-[#3A4FFE] border border-[#3A4FFE] rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Learn More</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningResources;
