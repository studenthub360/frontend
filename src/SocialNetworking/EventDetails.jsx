import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const EventDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        // Fetch group details from the API using the group ID
        const response = await fetch(
          `https://student360-api.onrender.com/api/netevents/${id}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch group details");
        }

        const groupData = await response.json();
        setGroup(groupData);
      } catch (error) {
        console.error("Error fetching group details:", error);
        setError("Error fetching group details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGroupDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!group) {
    return <p>Group not found.</p>;
  }

  return (
    <div className="block min-h-screen lg:flex-row lg:w-full min-w-screen">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <img
            src={group.imageUrl}
            alt="Group"
            className="w-40 mx-auto h-40 object-cover rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-4 text-[#3A4FFE]">
            {group.groupName} Details
          </h1>
          <h2 className="text-gray-600">{group.details}</h2>
          <div className="mt-6 flex justify-between text-gray-600">
            <div>
              <p>
                <strong>Date:</strong> {new Date(group.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {group.time}
              </p>
            </div>
            <p>
              <strong>Contact Email:</strong> {group.eventContact}
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
