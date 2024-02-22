import React, { useState } from "react";
import { Link } from "react-router-dom";
import calen from "./images/calen.png";
import task from "./images/task.png";
import event from "./images/event.png";
import logout from "./images/logout.png";
import logoutblack from "./images/logoutblack.png";
import stress from "./images/stress.png";
import coping from "./images/coping.png";
import playlist from "./images/playlist.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:bg-[#3B50FE] bg-white h-2 lg:h-auto w-1/6 p-4 lg:p-0 overflow-hidden flex flex-col justify-between">
      <ul className={`hidden lg:block text-black p-5 lg:text-white font-bold`}>
        <div>
          <li className="p-4 ">
            <Link to="/stress" className="flex gap-2">
              <img src={stress} className="w-8 h-8 " />
              Stress Management
            </Link>
          </li>
          <li className="p-4">
            <Link to="/coping" className="flex gap-2">
              <img src={coping} className="w-8 h-8 " />
              Coping Strategies
            </Link>
          </li>
          <li className="p-4">
            <Link to="/wellbeing" className="flex gap-2">
              <img src={playlist} className="w-8 h-8" />
              Shared Playlist
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
        <div className="lg:hidden fixed top-0 left-0 h-full w-4/5 bg-white shadow-md p-5">
          <div className="flex flex-col space-y-2 text-black lg:text-white font-bold overflow-auto">
            <Link
              to="/stress"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Stress Management
            </Link>
            <Link
              to="/coping"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Coping Strategies
            </Link>
            <Link
              to="/wellbeing"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Shared Playlist
            </Link>
            <Link
              to="/feedback"
              className="mb-4 mr-auto text-[#3A4FFE] border border-[#3A4FFE] shadow-lg rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Feedback</h1>
            </Link>
            <Link to="/" className="flex gap-2">
              <img src={logoutblack} className=" w-5 ml-4   " />
              Logout
            </Link>
          </div>
        </div>
      )}
      {/* Logout link */}
      <div className="px-6 items-center font-semibold">
        <Link
          to="/feedback"
          className="mb-4 p-2 text-[#fff] border border-[#3A4FFE] shadow-lg rounded-lg inline-block"
        >
          <h1 className="p-2 font-bold">Feedback</h1>
        </Link>
        <Link to="/" className="flex text-white gap-2">
          <img src={logout} className="w-6 " />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
