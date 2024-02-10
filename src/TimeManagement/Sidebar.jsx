import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:bg-[#3B50FE] bg-white min-h-screen w-1 lg:w-1/4 p-4 overflow-hidden">
      <ul
        className={`hidden lg:block  text-black lg:text-white font-bold `}
      >
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
      <button
        onClick={toggleSidebar}
        className="text-[#3B4FFE] lg:hidden focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-4/5 bg-white shadow-md p-4">
          <div className="flex flex-col space-y-2 text-black lg:text-white font-bold overflow-auto">
            <Link
              to="/dashboard/time-management"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Scheduling
            </Link>
            <Link
              to="/tasksdah"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Tasks
            </Link>
            <Link
              to="/dashboard/time-management/events"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Events
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
