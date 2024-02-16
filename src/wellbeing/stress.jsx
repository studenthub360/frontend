// NetworkingGroups.js

import React from "react";
import { Link } from "react-router-dom";
import exercise from "./images/exercise.png";
import therapy from "./images/therapy.png";
import meditation from "./images/meditation.png";
import twf from "./images/twf.png";
import journal from "./images/journal.png";
import reorganise from "./images/reorganise.png";
import vision from "./images/vision.png";
import gratitude from "./images/gratitude.png"

const NetworkingGroups = () => {
  // Replace the following data with your actual networking groups data
  const networkingGroups = [
    {
      id: 1,
      name: "EXERCISE",
      description:
        "Embrace exercises to relieve your stress and ease your mind in the best way",
      image: exercise,
    },
    {
      id: 2,
      name: "THERAPY",
      description:
        "Don’t shy away from seeking professional help when necessary",
      image:therapy,
    },
    {
      id: 3,
      name: "MEDITATION",
      description:
        "Connect with your environment by meditating and become your best",
      image: meditation,
    },
    {
      id: 4,
      name: "TIME WITH FAMILY",
      description:
        "Spend time with your loved ones and embrace the great joy which is that brought by love",
      image: twf,
    },
    {
      id: 5,
      name: "JOURNALLING",
      description:
        "Express yourself in the best way possible to release tension",
      image: journal,
    },
    {
      id: 6,
      name: "REORGANISE",
      description:
        "There is no better way to manage yourself than to reorganise both physically and mentally ",
      image: reorganise,
    },
    {
      id: 7,
      name: "VISION BOARDS",
      description:
        "Your life , your rules. Envision your own stress free life at its best  ",
      image: vision,
    },
    {
      id: 8,
      name: "GRATITUDE",
      description: "The only way to not worry about what you don’t have is being grateful for that you do have",
      image: gratitude,
    },

    // Add more networking groups as needed
  ];

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4 gap-8">
        {networkingGroups.map((group) => (
          <div
            key={group.id}
            className="bg-white pb-6  text-center rounded-xl shadow-md"
          >
            <img
              src={group.image}
              alt="Group"
              className="w-fit mx-auto pb-4 h-fit object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {group.name}
            </h3>
            <p className="text-gray-600">{group.description}</p>
            <button
              to={`/networking-groups/${group.id}`}
              className="mt-4 text-[#3A4FFE]  border border-[#3A4FFE] rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Get Material</h1>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingGroups;
