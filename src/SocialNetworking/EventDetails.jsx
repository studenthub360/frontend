import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const EventDetails = ({ networkingGroups }) => {
  const { id } = useParams();
  const group = networkingGroups.find((group) => group.id === parseInt(id, 10));

  if (!group) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="block min-h-screen lg:flex-row lg:w-full min-w-screen">
      <Navbar />
      <div className=" flex  min-h-screen">
        <Sidebar />

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <img
            src={group.image}
            alt="Group"
            className="w-40 mx-auto h-40 object-cover rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-4 text-[#3A4FFE]">
            {group.name} Details
          </h1>
          <p className="text-gray-600">{group.description}</p>
          <div className="mt-6 flex justify-between text-gray-600">
            <div>
              <p>
                <strong>Date:</strong> {group.date}
              </p>
              <p>
                <strong>Time:</strong> {group.time}
              </p>
            </div>
            <p>
              <strong>Contact Email:</strong> {group.contactEmail}
            </p>
          </div>
          <button className="mt-8 bg-[#3A4FFE] text-white py-2 px-6 rounded-md">
            <Link to="/groups/events">Back to Events</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
