import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

const Events = () => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [addedEvents, setAddedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  };

  const addEvent = async () => {
    const token = sessionStorage.getItem("accessToken");
    try {
      // const token = sessionStorage.getItem("accessToken");
      setIsLoading(true);
      const [date, time] = eventDateTime.split("T");

      // Create a FormData object to send the image file
      const newEvent = {
        eventName: eventName,
        time: time,
        date: date,
        description: eventDescription,
        location: eventLocation,
        image: eventImage,
      };

      console.log(newEvent);
      // Make the API call
      const response = await fetch(
        "https://student360-api.onrender.com/api/event",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(newEvent),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add event: ${errorMessage}`);
      }

      // Reset form fields and fetch updated events
      setEventName("");
      setEventLocation("");
      setEventDateTime("");
      setEventDescription("");
      setEventImage(null);
      fetchEvents();
    } catch (error) {
      console.error(error.message);
      alert("Failed to add event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEvents = async () => {
    const token = sessionStorage.getItem("accessToken");
    try {
      setIsLoading(true);

      // Fetch events from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/event/",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const eventData = await response.json();
      setAddedEvents(eventData);
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Failed to fetch events. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDateTime = (date, time) => {
    try {
      const formattedDate = new Date(date).toLocaleDateString();
      const formattedTime = new Date(`1970-01-01T${time}Z`).toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit", hour12: true, second: "2-digit" }
      );

      const formattedDateTime = `${formattedDate} ${formattedTime}`;
      return formattedDateTime;
    } catch (error) {
      console.error("Error formatting date and time:", error);
      return "Invalid Date";
    }
  };

  // Initial fetch of events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 ">Events</h1>

      {/* Form to add an event */}
      <form className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="eventName" className="block font-semibold mb-1">
              Event Name:
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="eventLocation" className="block font-semibold mb-1">
              Location:
            </label>
            <input
              type="text"
              id="eventLocation"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="eventDateTime" className="block font-semibold mb-1">
              Date and Time:
            </label>
            <input
              type="datetime-local"
              id="eventDateTime"
              value={eventDateTime}
              onChange={(e) => setEventDateTime(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="eventDescription"
              className="block font-semibold mb-1"
            >
              Event Description:
            </label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="eventImage" className="block font-semibold mb-1">
              Event Image:
            </label>
            <input
              type="file"
              id="eventImage"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={addEvent}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-36"
        >
          Add Event
        </button>
      </form>

      {/* Carousel to display added events */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Added Events</h2>
        <Carousel
          itemsToShow={3}
          pagination={false}
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 },
          ]}
        >
          {[...addedEvents].map((event) => (
            <div key={event.id} className="px-2">
              <div className="border rounded-lg overflow-hidden">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-fit h-fit object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {event.eventName}
                  </h3>
                  <p className="mb-2">
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Date and Time:</span>{" "}
                    {formatDateTime(event.date, event.time)}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Description:</span>{" "}
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
