import React from "react";
import group8 from "./images/group8.png";

const hero = () => {
  return (
    <div className="h-screen w-full flex items-center bg-[#F0F9FB] justify-center">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:mb-36">
        <div className="text-[#3B50FE] text-center md:text-left md:w-1/2 md:mr-8 p-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Students Resources for Overcoming Challenges
          </h1>

          <p className="text-lg font-medium mb-8 p-1">
            Your personal assistant for easy management of your time, finances,
            academics, and social network with no stress
          </p>
          <button className="bg-[#3A4FFE] text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
        <img
          src={group8}
          alt="Group 8"
          className="mx-10 mt-3 w-full md:hide md:w-1/2 md:ml-8 md:mt-0 md:mr-0 md:rounded-lg  md:object-cover md:h-96"
        />
      </div>
    </div>
  );
};

export default hero;
