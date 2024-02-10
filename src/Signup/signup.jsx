// SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "./images/Group_9.png";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Signing up with:", fullName, email, university, password);
  };

  return (
    <div className="flex flex-col lg:flex-row max-h-screen items-center overflow-hidden bg-white">
      {/* Image on the left (hidden in mobile view) */}
      <img
        src={signup}
        alt="Sigup Pic"
        className="w-full lg:w-1/2 lg:h-screen lg:block hidden object-cover"
      />
      {/* Sign-up form on the right */}
      <div className="w-full min-h-screen items-center">
        {/* <div className="flex text-right justify-end">
          <Link
            to="/"
            className="text-2xl text-[#3B4FFE] mt-18 lg:mt-16 p-6 font-semibold"
          >
            <h1 className="text-right">Welcome to Studenthub360</h1>
          </Link>
        </div> */}
        <div className="min-w-screen lg:w-full min-h-screen items-center p-16 lg:p-52">
          <h2 className="text-2xl text-[#3D50FF] font-semibold mb-4 text-left lg:text-left">
            Welcome to Studenthub360
          </h2>
          <form className="max-w-screen">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 p-2 w-full border border-black rounded-md"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
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
              <label htmlFor="university" className="block text-sm font-medium">
                University:
              </label>
              {/* Replace the options with your desired university options */}
              <select
                id="university"
                className="mt-1 p-2 w-full border border-black rounded-md"
                onChange={(e) => setUniversity(e.target.value)}
              >
                <option value="">Select University</option>
                <option value="university1">University 1</option>
                <option value="university2">University 2</option>
              </select>
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
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 w-full border-black border rounded-md bg-white"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="bg-[#3A4FFE] text-white p-2 rounded-md w-full hover:bg-gray-800 font-extrabold"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center lg:text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#3A4FFE]">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
