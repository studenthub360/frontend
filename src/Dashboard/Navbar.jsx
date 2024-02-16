// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import image from "./images/Ellipse 86.png";
import vector from "./images/Vector.png";
import search from "./images/search.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-white p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" hidden lg:block lg:text-2xl text-[#1942A6]  font-bold"
        >
          Welcome Williams!
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
