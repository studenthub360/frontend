import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "./arrow.png";

const FeedbackPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitFeedback = async () => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("accessToken"); // Assuming you store the token in localStorage
      // Send feedback to the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/feedback/social",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      // Clear the form on successful submission
      setTitle("");
      setDescription("");

      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link
        to="/dashboard"
        className=" lg:flex items-start  text-[#3B4FFE]  font-semibold"
      >
        <img src={arrow} className="w-5 lg:w-full" />
      </Link>
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-3xl text-[#3D50FF] font-semibold mb-4 text-center">
          Feedback
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 w-full border border-black rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Description:
            </label>
            <textarea
              id="description"
              className="mt-1 p-2 w-full border border-black rounded-md resize-none"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-[#3A4FFE] text-white p-2 rounded-md w-full hover:bg-gray-800 font-extrabold"
            onClick={handleSubmitFeedback}
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
