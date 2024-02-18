// NetworkingGroups.js

import React from "react";
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
  // Replace the following data with your actual networking groups data
  const networkingGroups = [
    {
      id: 1,
      name: "GENZ-TECHIES",
      description:
        "Connect with young-minded tech enthusiasts and explore the latest trends in the tech industry.",
      image: genz,
    },
    {
      id: 2,
      name: "Google Developer Student Club (GDSC)",
      description: "Join if you're passionate about tech.",
      image: gdsc,
    },
    {
      id: 3,
      name: "Kuda Tech Club",
      description:
        "Kuda Tech Club invites tech enthusiasts to a symposium on tech innovation.",
      image: kuda,
    },
    {
      id: 4,
      name: "Trakka Tech Club",
      description:
        "Embark on a coding adventure at the Hackathon 2024 hosted by Trakka Tech Club.",
      image: trakka,
    },
    {
      id: 5,
      name: "Interswitch Tech Club",
      description:
        " Explore the latest trends in financial technology and network with professionals in the fintech industry.",
      image: interswitch,
    },
    {
      id: 6,
      name: "Learnly Tech Club",
      description:
        "Learnly Tech Club presents a Coding Bootcamp where you'll enhance your programming abilities",
      image: learnly,
    },
    {
      id: 7,
      name: "Fintech Club",
      description:
        "Explore the world of blockchain at the Fintech Club's Blockchain Workshop.",
      image: fintech,
    },
    {
      id: 8,
      name: "Techin (Tech Innovators Network)",
      description: "Connect with visionaries shaping the future of technology.",
      image: techin,
    },
    // Add more networking groups as needed
  ];

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {networkingGroups.map((group) => (
          <div
            key={group.id}
            className="bg-white pb-6  text-center rounded-xl shadow-md"
          >
            <img
              src={group.image}
              alt="Group"
              className="w-full h-fit object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {group.name}
            </h3>
            <p className="text-gray-600 p-2">{group.description}</p>
            <button
              to={`/networking-groups/${group.id}`}
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
