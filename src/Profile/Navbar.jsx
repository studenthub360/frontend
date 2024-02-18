// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import image from "./images/Ellipse 86.png";
import arrow from "./images/arrow.png";

const Navbar = () => {
  return (
    <nav className="bg-white lg:block   text-white lg:py-4 py-4 px-4  border-b ">
      <div className="  flex justify-between items-center">
        <Link
          to="/dashboard"
          className=" lg:flex   text-[#3B4FFE]  font-semibold"
        >
          <img src={arrow} className="w-5 lg:w-full" />
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16"></div>
        <div className="space-x-4 flex text-center justify-center items-center text-black">
          {/* <div className="w-5 lg:w-8">
            <img src={vector} alt="notification" />
          </div> */}
          <div className={` rounded-full justify-center items-center `}>
            {/* <img
              src={image}
              alt="profile"
              className="rounded-full lg:block hidden w-8 lg:h-9 lg:w-9"
            /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
