// NetworkingGroups.js

import React from "react";
import { Link } from "react-router-dom";
import sleep from "./images/sleep.png";
import skill from "./images/skill.png";
import breath from "./images/breath.png";
import yoga from "./images/yoga.png";
import music from "./images/music.png";
import pray from "./images/pray.png";
import loved from "./images/loved.png";
import reflect from "./images/reflect.png";

const NetworkingGroups = () => {
  // Replace the following data with your actual networking groups data
  const networkingGroups = [
    {
      id: 1,
      name: "SLEEP",
      description:
        "Get proper sleep so you can tackle the day properly while feeling your best",
      image: sleep,
    },
    {
      id: 2,
      name: "SKILL ACQUISITION",
      description:
        "Acquire training is the things you love as a form of distraction",
      image: skill,
    },
    {
      id: 3,
      name: "BREATHE",
      description:
        "We all need a moment to do this sometimes in order to reset",
      image: breath,
    },
    {
      id: 4,
      name: "YOGA",
      description:
        "We all need a few weird relaxing positions in order to release stress sometimes",
      image: yoga,
    },
    {
      id: 5,
      name: "LISTEN TO MUSIC",
      description:
        "Connecting with out favorite musicians can actually help us forget our worries sometimes",
      image: music,
    },
    {
      id: 6,
      name: "PRAY",
      description:
        "Like they always say, what God cannot do does not exist , so take your stressors to Him",
      image: pray,
    },
    {
      id: 7,
      name: "BEING WITH LOVED ONES",
      description:
        "There is nothing a little convo with our fave person cannot fix, so connect with them  ",
      image: loved,
    },
    {
      id: 8,
      name: "REFLECT",
      description:
        "Sometimes  all we need is to sit down and think about things",
      image: reflect,
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