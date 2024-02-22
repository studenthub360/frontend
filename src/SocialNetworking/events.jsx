import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import launch from "./images/launch.png";
import cowrywise from "./images/cowrywise.png";
import kudaxerica from "./images/kudaxerica.png";
import genzhack from "./images/genzHack.png";
const NetworkingGroups = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // Fetch networking events data when the component mounts
    fetchNetworkingEvents();
  }, []);

  const fetchNetworkingEvents = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Fetch networking events data from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/netevents",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch networking events");
      }

      const eventsData = await response.json();
      setEvents(eventsData || []);
    } catch (error) {
      console.error("Error fetching networking events:", error);
      alert("Failed to fetch networking events. Please try again.");
    }
  };

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white text-center rounded-xl ">
            <img
              src={event.imageUrl}
              alt="Group"
              className="w-full h-fit object-cover"
            />
            <Link
              to={`/networking-groups/${event.id}`}
              className=" text-[#3A4FFE]   inline-block"
            >
              <h1 className="p-1 font-bold">View Event</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingGroups;
