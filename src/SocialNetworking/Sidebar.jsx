import React, { useState } from "react";
import { Link } from "react-router-dom";
import calen from "./images/calen.png";
import task from "./images/task.png";
import event from "./images/event.png";
import logout from "./images/logout.png";
import logoutblack from "./images/logoutblack.png";
import vector from "./images/Vector.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:bg-[#3B50FE]  bg-white h-2 lg:h-auto w-1/12 p-4 lg:p-0 overflow-hidden flex flex-col justify-between">
      <ul className={`hidden lg:block text-black p-2 lg:text-white font-bold`}>
        <div className="my-2">
          <li className="p-2 ">
            <Link to="/groups" className="flex gap-2">
              <img src={vector} className="w-6 " />
              Networking Groups
            </Link>
          </li>
          <li className="p-2">
            <Link to="/groups/events" className="flex gap-2">
              <img src={event} className="w-6 " />
              Networking Events
            </Link>
          </li>
        </div>
      </ul>
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="text-[#3B4FFE] justify-start lg:hidden focus:outline-none"
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

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="lg:hidden  fixed top-0 left-0 h-full w-4/5 bg-white shadow-md p-5">
          <div className="flex flex-col space-y-2 text-black lg:text-white font-bold overflow-auto">
            <Link
              to="/groups"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Networking Groups
            </Link>
            <Link
              to="/groups/events"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Networking Events
            </Link>
            <Link to="/" className="flex gap-2">
              <img src={logoutblack} className=" w-5 ml-4   " />
              Logout
            </Link>
          </div>
        </div>
      )}
      {/* Logout link */}
      <div className="p-6 items-center font-semibold">
        <Link to="/" className="flex text-white gap-2">
          <img src={logout} className="w-6 " />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
