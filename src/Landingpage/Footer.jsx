import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row px-6 py-12 md:py-24">
        <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
          <Link className="text-2xl text-[#3B4FFE] flex pb-5 font-semibold">
            <h1 className="font-serif">Studenthub</h1>{" "}
            <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
          </Link>
          <p className="text-sm">
            Your perfect student companion guide
            <br />
            to your path of academic support, time,
            <br />
            management, and financial freedom.
          </p>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-xl font-semibold mb-4">Navigation</h1>
          <ul className="text-sm">
            <li className="py-1 text-[#33363F]">Home</li>
            <li className="py-1 text-[#33363F]">About</li>
            <li className="py-1 text-[#33363F]">Benefits</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-xl font-semibold mb-4">Contact</h1>
          <ul className="text-sm">
            <li className="py-1 text-[#33363F]">+234 81 3495 9594</li>
            <li className="py-1 text-[#33363F]">thecodecartel@gmail.com</li>
            <li className="py-1 text-[#33363F]">Terms Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
