// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
    closeDropdown();
  };
  const scrollToBenefits = () => {
    const aboutUsSection = document.getElementById("benefits");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
    closeDropdown();
  };

  return (
    <nav
      className={`bg-white shadow-md ${isSticky ? "sticky top-0 z-50" : ""}`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div className="py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl text-[#3B4FFE] flex  ml-5 font-semibold"
            >
              <h1 className="font-serif">Studenthub</h1>{" "}
              <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-10">
            <Link
              to="/"
              onClick={closeDropdown}
              className="hover:border-b-2 border-[#3A4FFE] font-semibold hover:transition duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              onClick={scrollToAboutUs}
              className="hover:border-b-2 border-[#3A4FFE] font-semibold hover:transition duration-200 ease-in-out"
            >
              About
            </Link>
            <Link
              onClick={scrollToBenefits}
              className="hover:border-b-2 border-[#3A4FFE] font-semibold hover:transition duration-200 ease-in-out"
            >
              Benefits
            </Link>
            <Link
              onClick={closeDropdown}
              className="hover:border-b-2 border-[#3A4FFE] font-semibold hover:transition duration-200 ease-in-out"
            >
              Contacts
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link to="/signup">
              <button className={`font-semibold mx-5`}>Sign Up</button>
            </Link>
            <Link to="/login">
              <button
                className={`bg-[#3A4FFE] font-semibold text-${
                  isSticky ? "white" : "white"
                } px-4 py-1 rounded-lg `}
              >
                Log in
              </button>
            </Link>
          </div>
          <div className="lg:hidden mt-4">
            <button
              onClick={toggleDropdown}
              className="text-[#3B4FFE] focus:outline-none"
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
          </div>
          {isDropdownOpen && (
            <div className="lg:hidden fixed top-0 left-0 h-full w-4/5 bg-white shadow-md p-4">
              <div className="flex flex-col space-y-6">
                <Link
                  to="/"
                  onClick={closeDropdown}
                  className="block text-[#3B4FFE] font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  Home
                </Link>
                <Link
                  onClick={scrollToAboutUs}
                  className="block text-[#3B4FFE] font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  About
                </Link>
                <Link
                  onClick={scrollToBenefits}
                  className="block text-[#3B4FFE] font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  Benefits
                </Link>
                <Link
                  onClick={closeDropdown}
                  className="block text-[#3B4FFE] font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  Contacts
                </Link>
                <Link to="/signup">
                  <button className="block font-semibold text-left py-2">
                    Sign Up
                  </button>
                </Link>
                <Link
                  to="/login"
                  onClick={closeDropdown}
                  className="block bg-[#3A4FFE] text-white font-semibold py-1 rounded-lg text-center w-20"
                >
                  <button>Log in</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
