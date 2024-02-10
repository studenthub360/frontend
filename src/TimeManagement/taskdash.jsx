// TimeManagement.js
import React from "react";
import Sidebar from "./Sidebar";
 import Scheduling from "./Scheduling"
 import Tasks from "./Tasks";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
      
        <Tasks/>
      </div>
    </div>
  );
};

export default TimeManagement;
