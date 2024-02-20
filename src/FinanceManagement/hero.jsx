import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Hero = () => {
  return (
    
    <div className="text-white w-screen h-screen flex items-center justify-center bg-[#F0F9FB]">
    
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-black font-bold p-2">Track Your Expenses</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl text-[#3B50FE] font-bold md:py-6">
          Spend w Me.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-[#3B50FE] text-xl font-bold py-4">
            Take control of your
          </p>
          <TypeAnimation
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-black"
            sequence={[" Spending.", 1000, " Finances.", 1000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </div>
        <div>
          <p className="md:text-2xl text-xl font-bold text-black">
            Monitor and manage your expenses with ease.
          </p>
          <Link to="/expense-tracker">
            <button className="bg-[#3B50FE] hover:bg-[#F0F9FB] hover:border hover:border-[#3B50FE] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
