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
    <div className="flex flex-col lg:flex-row space-x-1 lg:space-x-8 ">
      <div className=" w-auto p-1">
        <h2 className="text-2xl font-bold mb-4">Scheduling</h2>

        {/* Form to add new events */}
        <form className="lg:flex lg:flex-wrap">
          <div className="mb-4 w-full lg:w-1/2">
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
          <div className="flex gap-10">
            <div className="mb-4 w-full lg:w-1/2">
              <label className="font-bold block" htmlFor="eventDate">
                Set Date:
              </label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                dateFormat="MMMM d, yyyy"
                className="p-1 border-black rounded-lg w-full border"
              />
            </div>

            <div className="mb-4 w-full lg:flex">
              <div className="block lg:w-1/2 pr-2">
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
                {event.date.toDateString()} {event.time}
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
