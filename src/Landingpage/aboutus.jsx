import React from "react";
import macbook from "./images/macbook.png";

const AboutUs = () => {
  return (
    <div id="aboutus" className="mt-8 bg-[#F0F9FB] w-full p-4 lg:p-8 xl:p-16">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="order-2 lg:order-1">
          <img
            src={macbook}
            alt="Macbook"
            className="w-full max-w-md mx-auto lg:mx-0 mt-3"
          />
        </div>
        <div className="order-1 lg:order-2 lg:ml-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#3D50FF]">
            About Us
          </h2>
          <p className="text-black font-medium leading-relaxed">
            Our mission is to empower students to thrive in their academic
            journey by providing essential tools, guidance, and support in
            managing their time effectively, mastering financial literacy, and
            excelling in their studies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
