import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Scheduling = () => {
  const [eventName, setEventName] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [localSchedules, setLocalSchedules] = useState([]);

  const removeSchedule = (index) => {
    const updatedSchedules = [...schedules];
    updatedSchedules.splice(index, 1);
    setSchedules(updatedSchedules);
    localStorage.setItem("schedules", JSON.stringify(updatedSchedules));
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

  const fetchSchedules = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        "https://student360-api.onrender.com/api/schedule/:id",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch schedules");
      }
      const data = await response.json();
      setSchedules(data);
      localStorage.setItem("schedules", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching schedules:", error);
    }
  };

  const createSchedule = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        "https://student360-api.onrender.com/api/schedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            scheduleName: eventName,
            description: eventDescription,
            time: eventDateTime.split("T")[1],
            date: eventDateTime.split("T")[0],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create schedule");
      }

      const newSchedule = await response.json();
      setSchedules([...schedules, newSchedule]);
      localStorage.setItem(
        "schedules",
        JSON.stringify([...schedules, newSchedule])
      );
      console.log("Schedule created successfully:", newSchedule);
    } catch (error) {
      console.error("Error creating schedule:", error);
    }
  };

  useEffect(() => {
    const storedSchedules = JSON.parse(localStorage.getItem("schedules")) || [];
    setLocalSchedules(storedSchedules);
    fetchSchedules();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Scheduling</h2>

        {/* Form to add new schedules */}
        <form className="lg:flex flex-wrap">
          <div className="mb-4 w-full pr-2 lg:w-1/2">
            <label className="font-bold" htmlFor="eventName">
              Schedule Name:
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
              Write a short note describing schedule
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
            onClick={createSchedule}
            className="bg-[#3B50FE] rounded-lg text-white py-2 px-6"
          >
            ADD
          </button>
        </form>

        <ul className="w-full mt-4">
          {[ ...schedules].map((schedule, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row justify-between items-center p-2 border-b"
            >
              <div className="mb-2 lg:mb-0">
                <span className="font-semibold">{schedule.scheduleName}</span> -{" "}
                {formatDateTime(schedule.date + "T" + schedule.time)}
                <p>{schedule.description}</p>
              </div>
              <button
                onClick={() => removeSchedule(index)}
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
