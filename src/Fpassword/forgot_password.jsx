import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("accessToken");
      const response = await fetch("https://student360-api.onrender.com/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ email }),
      
      });
console.log(response);
      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      alert("OTP sent to your email address");
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-3xl text-[#3D50FF] font-semibold mb-4 text-center">
          Forgot Password
        </h2>
        <form>
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
          <button
            type="button"
            className="bg-[#3A4FFE] text-white p-2 rounded-md w-full hover:bg-gray-800 font-extrabold"
            onClick={handleForgotPassword}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send OTP"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Remember your password?{" "}
          <Link to="/login" className="text-[#3A4FFE]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
