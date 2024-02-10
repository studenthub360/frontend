// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Sidebar = () => {
  return (
    <div className="bg-[#3B50FE] w-1/4 p-4">
      <ul className="space-y-2 text-white font-bold p-4">
        <li className="p-4">
          <Link to="/dashboard/time-management">Scheduling</Link>
        </li>
        <li className="p-4">
          <Link to="/tasksdah">Tasks</Link>
        </li>
        <li className="p-4">
          <Link to="/dashboard/time-management/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
