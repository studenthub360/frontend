import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      setIsLoading(true);

      // Send a request to your backend to initiate the forgot password process
      // You can use axios or fetch here
      // Example:
      // const response = await axios.post("/api/auth/forgot-password", { email });
      // Handle the response as needed

      // For demonstration purposes, let's assume the request is successful
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
