// Main.js
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto p-8 mt-4">
      <h1 className="text-3xl font-bold mb-4">Select your category</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 justify-center items-center text-black">
        <Link to="/dashboard/time-management" className="text-center">
          <div className="bg-[#3A4FFE] p-10 h-auto w-auto rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Time Management
            </h3>
          </div>
        </Link>
        <Link to="/financial" className="text-center">
          <div className="bg-[#3A4FFE] p-10 h-auto w-auto rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">
              Financial Management
            </h3>
          </div>
        </Link>
        <Link to="/academic-support" className="text-center">
          <div className="bg-[#3A4FFE] p-10 h-auto w-auto rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Academic Support
            </h3>
          </div>
        </Link>
        <Link to="/groups" className="text-center">
          <div className="bg-[#3A4FFE] p-10 h-auto w-auto rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Social Networking
            </h3>
          </div>
        </Link>
        <Link to="/user-authentication" className="text-center">
          <div className="bg-[#3A4FFE] p-10 h-auto w-auto rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Organization chat
            </h3>
          </div>
        </Link>
        <Link to="/user-authentication" className="text-center">
          <div className="bg-[#3A4FFE] p-10 h-auto w-auto rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Well-being
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
