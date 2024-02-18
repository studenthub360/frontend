// TimeManagement.js
import React from "react";
import Sidebar from "./Sidebar";
import Scheduling from "./Scheduling";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const TimeManagement = () => {
  return (
    <div className="block min-h-screen lg:flex-row lg:w-full min-w-screen overflow-x-hidden">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow py-8 px-5">
          {/* Main Content for Time Management */}
          <div className="flex flex-col lg:flex-row justify-between">
            <h1 className="text-3xl hidden lg:block font-bold text-[#3B50FE] mb-4">
              Time Management
            </h1>
            {/* <Link
              to="/"
              className="text-2xl flex px-4 text-[#3D50FF] font-semibold mb-4 text-left lg:text-left"
            >
              <h1 className="font-serif ">Studenthub</h1>{" "}
              <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
            </Link> */}
          </div>
          <Scheduling />
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;
