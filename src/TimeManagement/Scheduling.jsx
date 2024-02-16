import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Scheduling = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const addEvent = () => {
    const newEvent = {
      name: eventName,
      dateTime: eventDateTime,
      description: eventDescription,
    };
    setEvents([...events, newEvent]);
    // Reset form fields
    setEventName("");
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
        <h2 className="text-2xl font-bold mb-4">Scheduling</h2>

        {/* Form to add new events */}
        <form className="lg:flex flex-wrap">
          <div className="mb-4 w-full pr-2 lg:w-1/2">
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
              Write a short note describing event
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
                {formatDateTime(event.dateTime)}
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
        {/* Calendar display */}
        <h2 className="text-2xl font-bold mb-4">Calendar</h2>
        {/* Add your calendar component or integrate a calendar library here */}
        <Calendar
          className="w-1/2 max-w-xs mx-auto rounded-lg p-2 border"
          tileClassName={({ date }) => {
            return "text-center border  p-2";
          }}
        />
      </div>
    </div>
  );
};

export default Scheduling;
