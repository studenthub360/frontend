// TimeManagement.js
import React from "react";
import Sidebar from "./Sidebar";
import Scheduling from "./Scheduling";

const TimeManagement = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow p-8">
        {/* Main Content for Time Management */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-[#3B50FE] mb-4">
            Time Management
          </h1>
          <h2 className="text-2xl text-[#3D50FF] font-semibold mb-4 text-left lg:text-left">
            Studenthub360
          </h2>
        </div>
        <div id="scheduling">
        <Scheduling />
        {/* Add your time management components here */}
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;
