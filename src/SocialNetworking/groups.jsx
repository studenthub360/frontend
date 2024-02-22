// NetworkingGroups.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import genz from "./images/genzT.png";
import gdsc from "./images/gdsc.png";
import kuda from "./images/kuda.png";
import trakka from "./images/trakka.png";
import interswitch from "./images/interswitch.png";
import learnly from "./images/learnly.png";
import fintech from "./images/fintech.png";
import techin from "./images/techin.png";

const NetworkingGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch networking groups data when the component mounts
    fetchNetworkingGroups();
  }, []);

  const fetchNetworkingGroups = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Fetch networking groups data from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/netgrp",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch networking groups");
      }

      const groupsData = await response.json([]);
      setGroups(groupsData || []); // Ensure groups array is defined or use an empty array
    } catch (error) {
      console.error("Error fetching networking groups:", error);
      alert("Failed to fetch networking groups. Please try again.");
    }
  };


  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white pb-6  text-center rounded-xl shadow-md"
          >
            <img
              src={group.imageUrl}
              alt="Group"
              className="w-full h-fit object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {group.groupName}
            </h3>
            <p className="text-gray-600 p-2">{group.groupDescription}</p>
            <button
              to={group.groupLink}
              className="mt-4 text-[#3A4FFE]  border border-[#3A4FFE] rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Join Group</h1>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingGroups;
