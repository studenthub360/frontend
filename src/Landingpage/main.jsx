import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutus from "./aboutus";
import Links from "./Links";
import Hero from "./hero";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#F0F9FB] min-h-screen">
      <Navbar />
      <div className="mt-20 md:mt-0">
        <Hero />
      </div>
      <Links />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default Main;
