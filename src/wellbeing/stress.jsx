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
import gratitude from "./images/gratitude.png";

const NetworkingGroups = () => {
  // Replace the following data with your actual networking groups data
  const networkingGroups = [
    {
      id: 1,
      name: "EXERCISE",
      description:
        "Embrace exercises to relieve your stress and ease your mind in the best way",
      image: exercise,
      link: "https://www.msn.com/en-us/health/fitness-challenges/in-7-day-weight-loss-challenge-mark-sneddon/in-7-day-weight-loss-challenge-mark-sneddon",
    },
    {
      id: 2,
      name: "THERAPY",
      description:
        "Don’t shy away from seeking professional help when necessary",
      image: therapy,
      link: "https://www.therapyroute.com/therapists/nigeria/lagos/1",
    },
    {
      id: 3,
      name: "MEDITATION",
      description:
        "Connect with your environment by meditating and become your best",
      image: meditation,
      link: "https://www.verywellmind.com/best-meditation-apps-4767322",
    },
    {
      id: 4,
      name: "TIME WITH FAMILY",
      description:
        "Spend time with your loved ones and embrace the great joy which is that brought by love",
      image: twf,
      link: "https://www.marriage.com/advice/family/spending-time-with-family/#:~:text=Spending%20time%20with%20family%20is%20crucial%20as%20it,promotes%20communication%20skills%20and%20helps%20create%20lasting%20memories.",
    },
    {
      id: 5,
      name: "JOURNALLING",
      description:
        "Express yourself in the best way possible to release tension",
      image: journal,
      link: "https://www.betterup.com/blog/how-to-start-journaling",
    },
    {
      id: 6,
      name: "REORGANISE",
      description:
        "There is no better way to manage yourself than to reorganise both physically and mentally ",
      image: reorganise,
      link: "https://todoist.com/inspiration/organize-your-life",
    },
    {
      id: 7,
      name: "VISION BOARDS",
      description:
        "Your life , your rules. Envision your own stress free life at its best  ",
      image: vision,
      link:"https://www.developgoodhabits.com/vision-board-ideas/",
    },
    {
      id: 8,
      name: "GRATITUDE",
      description:
        "The only way to not worry about what you don’t have is being grateful for that you do have",
      image: gratitude,
      link:"https://www.verywellmind.com/what-is-gratitude-5206817",
    },

    // Add more networking groups as needed
  ];

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4 gap-8">
        {networkingGroups.map((group) => (
          <div
            key={group.id}
            className="bg-white p-6  text-center rounded-xl shadow-md"
          >
            <img
              src={group.image}
              alt="Group"
              className="w-fit mx-auto pb-4 h-fit object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {group.name}
            </h3>
            <p className="text-gray-600 ">{group.description}</p>
            <Link
              to={group.link}
              className="mt-4 text-[#3A4FFE]  border border-[#3A4FFE] rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Get Material</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingGroups;
