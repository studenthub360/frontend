// TimeManagement.js
import React from "react";
import Sidebar from "./Sidebar";
import Tasks from "./Tasks";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const TimeManagement = () => {
  return (
    <div className="block min-h-screen lg:flex-row lg:w-full min-w-screen">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow p-8 ">
          {/* Main Content for Time Management */}
          <div className="flex flex-col lg:flex-row justify-between">
            <h1 className="text-3xl font-bold text-[#3B50FE] hidden lg:block mb-4">
              Time Management
            </h1>
            {/* <Link
              to="/"
              className="text-2xl flex text-[#3D50FF] font-semibold mb-4 text-left lg:text-left"
            >
              <h1 className="font-serif">Studenthub</h1>{" "}
              <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
            </Link> */}
          </div>

          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;
