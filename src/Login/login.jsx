import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import loginPic from "./images/image.png";
import Swal from "sweetalert2";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginApiLink = 'https://student360-api.onrender.com/api/auth';
  const handleLogin = async () => {
    try {
      const response = await fetch(loginApiLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      console.log(response.data);
      

      const responseData = await response.json();
      console.log("Login successful", responseData);
      const token = responseData.token;

      // Store the token in localStorage
      sessionStorage.setItem("accessToken", token);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "success",
        title: `Login successful`,
      });

      navigate("/dashboard");
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "error",
        title: `${error.message}`,
      });
    }
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
            className="text-2xl flex text-[#3B4FFE] mt-18 lg:mt-16 p-6 font-semibold"
          >
            <h1 className="font-serif">Studenthub</h1>{" "}
            <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
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
            <Link>
              <button
                type="button"
                className="bg-[#3A4FFE] text-white p-2 rounded-md w-full hover:bg-gray-800 font-extrabold"
                onClick={handleLogin}
              >
                Log In
              </button>
            </Link>
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

export function get_user() {}

export default Login;
