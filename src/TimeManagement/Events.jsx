// Events.js
import React, { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const addEvent = () => {
    const newEvent = {
      name: eventName,
      location: eventLocation,
      dateTime: eventDateTime,
      description: eventDescription,
    };
    setEvents([...events, newEvent]);
    // Reset form fields
    setEventName("");
    setEventLocation("");
    setEventDateTime("");
    setEventDescription("");
  };

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };
  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };
  return (
    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Events</h2>

        {/* Form to add new events */}
        <form className="lg:flex flex-grow lg:flex-wrap">
          <div className="mb-4 px-2 w-full lg:w-1/2">
            <label className="font-bold" htmlFor="eventName">
              Event Name:
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="p-1 w-full border border-black rounded-lg"
            />
          </div>
          <div className="mb-4 w-full lg:w-1/2">
            <label className="font-bold" htmlFor="eventLocation">
              Location:
            </label>
            <input
              type="text"
              id="eventLocation"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="p-1 w-full border border-black rounded-lg"
            />
          </div>
          <div className="mb-4 w-full lg:w-1/2">
            <label className="font-bold" htmlFor="eventDateTime">
              Date and Time:
            </label>
            <input
              type="datetime-local"
              id="eventDateTime"
              value={eventDateTime}
              onChange={(e) => setEventDateTime(e.target.value)}
              className="p-1 w-full border border-black rounded-lg"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="font-bold" htmlFor="eventDescription">
              Event Description:
            </label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="p-2 border-black rounded-lg w-full border"
            />
          </div>

          <button
            type="button"
            onClick={addEvent}
            className="bg-[#3B50FE] rounded-lg text-white py-2 px-6"
          >
            ADD
          </button>
        </form>
        <ul className="w-full mt-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row justify-between items-center p-2 border-b"
            >
              <div className="mb-2 lg:mb-0">
                <span className="font-semibold">{event.name}</span> -{" "}
                {event.location}, {event.dateTime}
                <p>{event.description}</p>
              </div>
              <button
                onClick={() => removeEvent(index)}
                className="text-red-500 mt-2 lg:mt-0"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-1/2 p-4">
        {/* Slider display */}
        <h2 className="text-2xl font-bold mb-4">Events Slider</h2>
        {/* Add your slider component or integrate a slider library here */}
        {/* Replace this with your actual slider component */}
        <div className="border p-2">
          {/* Sample slider content */}
          {events.map((event, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold">{event.name}</h3>
              <p>
                {event.location}, {formatDateTime(event.dateTime)}{" "}
              </p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
