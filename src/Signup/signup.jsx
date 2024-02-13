// SignUp.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signup from "./images/Group_9.png";
import axios from "axios";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
// import dotenv from 'dotenv'
// dotenv.config()

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  // const signupApiLink = process.env.REACT_APP_Signup_api_link;
  let signupApiLink = "https://student360-api.onrender.com/api/reg";
  const handleSignUp = async () => {
    // Make HTTP POST request to the registration endpoint
    console.log("before");
    // await axios.post(
    //      signupApiLink,
    //       {
    //         fullName,
    //         password,
    //         level,
    //         email,
    //         department,
    //         university,
    //       })
    //     .then((response) => {
    //       console.log('after')
    //       // Handle successful login
    //       console.log("Signup successful", response.data);
    //       navigate("/login");
    //     })
    //     .catch((error) => {
    //       console.log("An Error Occured : "+ error)
    //       if (error.response.data) {
    //         // Toast(error.response.data.error);
    //         const Toast = Swal.mixin({
    //           toast: true,
    //           position: "top-end",
    //           showConfirmButton: false,
    //           timer: 3000,
    //           timerProgressBar: true,
    //           didOpen: (toast) => {
    //             toast.onmouseenter = Swal.stopTimer;
    //             toast.onmouseleave = Swal.resumeTimer;
    //           },
    //         });
    //         Toast.fire({
    //           icon: "error",
    //           title:`${error.response.data.error}`
    //         });
    //       }
    //     });

    // BETA
    fetch(signupApiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Other headers as needed
      },
      body: JSON.stringify({
        fullName,
        password,
        level,
        email,
        department,
        university,
      }),
    })
      .then(async (response) => {
        console.log(response.status);
        if (response.status != 201) {
          let data = await response.json();
          if (data.message) {
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
              title: `${data.message}`,
            });
          }
          throw new Error("An Error Occured!");
          return;
        }

        if (response.status == 201) response.json();
      })
      .then((data) => {
        //TODO here
        console.log(data);
        navigate("/login");
      })
      .catch((error) => {
        console.log("An Error Occured : " + error);
        // if (error.response.data) {
        //   // Toast(error.response.data.error);
        //   const Toast = Swal.mixin({
        //     toast: true,
        //     position: "top-end",
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.onmouseenter = Swal.stopTimer;
        //       toast.onmouseleave = Swal.resumeTimer;
        //     },
        //   });
        //   Toast.fire({
        //     icon: "error",
        //     title:`${error.response.data.error}`
        //   });
        // }
      });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center  bg-white">
      {/* Image on the left (hidden in mobile view) */}
      <img
        src={signup}
        alt="Sigup Pic"
        className="w-full lg:w-1/2 lg:min-h-screen lg:block hidden object-cover"
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
        <div className="min-w-screen lg:w-full min-h-screen items-center p-16 lg:px-52">
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
              <label htmlFor="level" className="block text-sm font-medium">
                Level:
              </label>
              {/* Replace the options with your desired university options */}
              <select
                id="Level"
                className="mt-1 p-2 w-full border border-black rounded-md"
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">Select Level</option>
                <option value="level1">100</option>
                <option value="level2">200</option>
                <option value="level3">300</option>
                <option value="level4">400</option>
                <option value="level5">500</option>
                <option value="level6">600</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium">
                Department:
              </label>
              {/* Replace the options with your desired university options */}
              <select
                id="Department"
                className="mt-1 p-2 w-full border border-black rounded-md"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="department1">se</option>
                <option value="department2">cs</option>
                <option value="department3">it</option>
                <option value="department4">cis</option>
                <option value="department5">mb</option>
                <option value="department6">bio</option>
              </select>
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
            <Link>
              <button
                type="button"
                className="bg-[#3A4FFE] text-white p-2 rounded-md w-full hover:bg-gray-800 font-extrabold"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </Link>
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
