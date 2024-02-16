// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import image from "./images/Ellipse 86.png";
import vector from "./images/Vector2.png";

const Navbar = () => {
  return (
    <nav className="bg-white lg:block hidden text-white p-4 border-b">
      <div className="container  flex justify-between items-center">
        <Link
          to="/"
          className="hidden lg:flex text-2xl  text-[#3B4FFE]  font-semibold"
        >
          <h1 className="font-serif">Studenthub</h1>{" "}
          <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16">
          {/* <div className="border flex p-2 lg:p-3 rounded-full">
            <img src={search} className="h-4 lg:h-5" alt="search" />
            <input
              type="text"
              placeholder="Search..."
              className={`p-3 h-2  sm:w-40 md:w-52 lg:w-60 text-black focus:outline-none focus:border-green-500 `}
            />
          </div> */}
        </div>
        <div className="space-x-4 flex text-center justify-center items-center text-black">
          <div className="w-5 lg:w-8">
            <img src={vector} alt="notification" />
          </div>
          <div className={` rounded-full justify-center items-center `}>
            <img
              src={image}
              alt="profile"
              className="rounded-full w-8 lg:h-9 lg:w-9"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
