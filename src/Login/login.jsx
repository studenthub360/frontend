// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginPic from "./images/image.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex flex-col lg:flex-row  max-h-screen items-center overflow-hidden  bg-white">
      {/* Image on the left (hidden in mobile view) */}
      <img
        src={loginPic}
        alt="Login Pic"
        className=" w-full lg:w-1/2 lg:h-screen  lg:block hidden object-cover"
      />
      {/* Login form on the right */}
      <div className="w-full min-h-screen items-center">
        <div className="flex text-right justify-end">
          <Link
            to="/"
            className="text-2xl text-[#3B4FFE] mt-18 lg:mt-16 p-6 font-semibold"
          >
            <h1 className="text-right">Studenthub360</h1>
          </Link>
        </div>
        <div className="min-w-screen lg:w-full min-h-screen  items-center p-20 lg:p-52 ">
          <h2 className="text-2xl text-[#3D50FF] font-semibold mb-4 text-left lg:text-left">
            Login
          </h2>
          <form className="max-w-screen ">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium ">
                Email address:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-black rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border-black border rounded-md bg-white"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-right text-[#3A4FFE] text-sm mt-1">
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>
            <button
              type="button"
              className="bg-[#3A4FFE] text-white p-2 rounded-md w-full hover:bg-gray-800 font-extrabold"
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-sm text-center lg:text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#3A4FFE]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
