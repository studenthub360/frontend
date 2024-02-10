// Scheduling.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Scheduling = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const addEvent = () => {
    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      description: eventDescription,
    };
    setEvents([...events, newEvent]);
    // Reset form fields
    setEventName("");
    setEventDate(new Date());
    setEventTime("");
    setEventDescription("");
  };

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Scheduling</h2>

        {/* Form to add new events */}
        <form>
          <div className="mb-4">
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

          <div className="mb-4 flex">
            <div className="block ">
              <label className="font-bold block" htmlFor="eventDate">
                Set Date:
              </label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                dateFormat="MMMM d, yyyy"
                className="p-1 border-black rounded-lg  w-full border"
              />
            </div>
            <div className="block px-2">
              <label className="font-bold " htmlFor="eventTime">
                Set Time:
              </label>
              <input
                type="time"
                id="eventTime"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className="p-1 border-black rounded-lg w-full border"
              />
            </div>
          </div>

          <div className="mb-4">
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
        <ul className="w-1/2 mt-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border-b"
            >
              <div>
                <span>{event.name}</span> - {event.date.toDateString()}{" "}
                {event.time}
                <p>{event.description}</p>
              </div>
              <button
                onClick={() => removeEvent(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="  p-4">
        {/* Calendar display */}
        <h2 className="text-2xl font-bold mb-4">Calendar</h2>
        {/* Add your calendar component or integrate a calendar library here */}
        <Calendar
          className="w-full max-w-xs mx-auto rounded-lg p-2  border"
          tileClassName={({ date }) => {
            return "text-center border  p-2";
          }}
        />
      </div>

      {/* List of scheduled events */}
    </div>
  );
};

export default Scheduling;
