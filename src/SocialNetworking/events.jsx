// NetworkingGroups.js

import React from "react";
import { Link } from "react-router-dom";
import launch from "./images/launch.png";
import cowrywise from "./images/cowrywise.png";
import kudaxerica from "./images/kudaxerica.png";
import genzhack from "./images/genzHack.png";
const NetworkingGroups = () => {
  // Replace the following data with your actual networking groups data
  const networkingGroups = [
    {
      id: 1,
      name: "GENZ-TECHIES",
      description:
        "Young minded tech generation connect with them and get in...",
      image: launch,
    },
    {
      id: 2,
      name: "Google Developer Student Club (GDSC)",
      description: "Join if you're passionate about data science.",
      image: cowrywise,
    },
    {
      id: 3,
      name: "Kuda Tech Club",
      description: "Join if you're passionate about data science.",
      image: kudaxerica,
    },
    {
      id: 4,
      name: "Trakka Tech Club",
      description: "Join if you're passionate about data science.",
      image: genzhack,
    },
    {
      id: 5,
      name: "Interswitch Tech Club",
      description: "Join if you're passionate about data science.",
      image: launch,
    },
    {
      id: 6,
      name: "Learnly Tech Club",
      description: "Join if you're passionate about data science.",
      image: cowrywise,
    },
    {
      id: 7,
      name: "Fintech Club",
      description: "Join if you're passionate about data science.",
      image: kudaxerica,
    },
    {
      id: 8,
      name: "Techin (Tech Innovators Network)",
      description: "Join if you're passionate about data science.",
      image: genzhack,
    },
    // Add more networking groups as needed
  ];

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {networkingGroups.map((group) => (
          <div key={group.id} className="bg-white text-center rounded-xl ">
            <img
              src={group.image}
              alt="Group"
              className="w-full h-fit object-cover"
            />
            <button
              to={`/networking-groups/${group.id}`}
              className=" text-[#3A4FFE]   inline-block"
            >
              <h1 className="p-1 font-bold">View Event</h1>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingGroups;
