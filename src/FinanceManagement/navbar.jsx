import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 bg-white text-black">
      <Link to="/" className="text-2xl flex text-[#3B4FFE]   p-6 font-semibold">
        <h1 className="font-serif">Studenthub</h1>{" "}
        <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4 hover:scale-105 duration-300 hover:text-[#3B50FE]">
          <Link to="/dashboard">Home</Link>
        </li>
        {/* <li className='p-4 hover:scale-105 duration-300 hover:text-[#3B50FE]'><Link to="/company">Time Management</Link></li>
        <li className='p-4 hover:scale-105 duration-300 hover:text-[#3B50FE]'><Link to="/resources">Resources</Link></li>
        <li className='p-4 hover:scale-105 duration-300 hover:text-[#3B50FE]'><Link to="/about">About</Link></li>
        <li className='p-4 hover:scale-105 duration-300 hover:text-[#3B50FE]'><Link to="/contact">Contact</Link></li> */}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] text-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#3B50FE] m-4">
          Spend w Me.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">
            <Link to="/dashboard">Home</Link>
          </li>
          {/* <li className='p-4 border-b border-gray-600'><Link to="/company">Company</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/resources">Resources</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/about">About</Link></li>
          <li className='p-4'><Link to="/contact">Contact</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
