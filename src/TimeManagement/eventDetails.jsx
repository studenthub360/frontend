// TimeManagement.js
import React from "react";
import Sidebar from "./Sidebar";
import image from "../assets/images/logo192.png"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <div className="flex flex-row lg:flex-row min-h-screen w-full overflow-x-hidden ">
      <Sidebar />
      <div className="flex-grow p-8">
        {/* Main Content for Time Management */}
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="text-3xl font-bold text-[#3B50FE] hidden lg:block mb-4">
            Event Details
          </h1>
          <Link
            to="/"
            className="text-2xl flex text-[#3D50FF] font-semibold mb-4 text-left lg:text-left"
          >
            <h1 className="font-serif">Studenthub</h1>{" "}
            <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
          </Link>
        </div>
        <div className=" w-4/5 mx-64">
        <img src={image} alt="event"/>
        <h1>Event Title</h1>
        <h3> omo this is just a randome text to stand in place of whatever details one would want to put for an event detail
        so yeah that's what's up    
        </h3>
        <h3>Location: BBS Auditorium</h3>
        <h3>Date: 29/07/2022</h3>
        <h3>Time: 10:00 AM</h3>
        </div>
        <br/><hr/><br/>
        
        <div class="bg-white rounded-lg shadow-md dark:bg-gray-800"></div>
      </div>
    </div>
  );
};

export default EventDetails;
