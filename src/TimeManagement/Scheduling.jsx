import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, parseISO } from "date-fns";

const Scheduling = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Fetch tasks from the API when the component mounts
    fetchSchedule();
  }, []);

  const fetchSchedule = () => {
    const token = sessionStorage.getItem("accessToken"); // Assuming you store the token in localStorage

    fetch("https://student360-api.onrender.com/api/schedule/all", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch schedule");
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching Schedule:", error);
      });
  };

  const addEvent = () => {
    const [date, time] = eventDateTime.split("T");
    const token = sessionStorage.getItem("accessToken"); // Assuming you store the token in sessionStorage
    const newEvent = {
      scheduleName: eventName,
      time: time,
      date: date,
      description: eventDescription,
    };

    // Make a POST request to the API to create a new task
    fetch("https://student360-api.onrender.com/api/schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(newEvent),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add Schedule");
        }
        return response.json();
      })
      .then(() => {
        // Fetch tasks again after successfully adding a new task
        fetchSchedule();
        setEventName("");
        setEventDateTime("");
        setEventDescription("");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const formatDateTime = (date, time) => {
    try {
      const formattedDate = new Date(date).toLocaleDateString();
      const formattedTime = new Date(`1970-01-01T${time}Z`).toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      );

      const formattedDateTime = `${formattedDate} ${formattedTime}`;
      return formattedDateTime;
    } catch (error) {
      console.error("Error formatting date and time:", error);
      return "Invalid Date";
    }
  };

  // Filter events based on the selected date
  const filteredEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  // Get unique dates with events
  const eventDates = events.map((event) => new Date(event.date));
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      // Check if the date has events
      const hasEvents = events.some(
        (event) => date.toDateString() === new Date(event.date).toDateString()
      );

      // Return a styled div for dates with events
      return hasEvents ? (
        <div
          style={{
            background: "blue",
            color: "blue",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            padding: "-5px",
          }}
        >
          •
        </div>
      ) : null;
    }

    return null;
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

        <ul className="w-full mt-4 rounded-lg border p-2">
          {events.map((event, index) => (
            <li
              key={event.id}
              className="flex flex-col lg:flex-row justify-between items-center p-2 border-b"
            >
              <div className="mb-2 lg:mb-0">
                <span className="font-semibold">{event.scheduleName}</span> -{" "}
                {formatDateTime(event.date, event.time)}
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
        <Calendar
          className="w-1/2 max-w-xs mx-auto rounded-lg p-2 border"
          tileClassName={({ date }) => {
            // Check if the date has events
            const hasEvents = eventDates.some(
              (eventDate) => date.toDateString() === eventDate.toDateString()
            );

            // Apply custom styling for dates with events
            return hasEvents ? "has-events" : "";
          }}
          tileContent={tileContent}
          onClickDay={(value) => setSelectedDate(value)}
        />

        {/* Display events for the selected date */}
        <div className="w-1/2 max-w-xs mx-auto my-auto rounded-lg p-2 ">
          <h3 className="text-lg font-semibold mb-2">
            Events for {selectedDate.toDateString()}:
          </h3>
          {filteredEvents.map((event, index) => (
            <div key={index} className="mb-2">
              <p>{formatDateTime(event.date, event.time)}</p>
              <p>{event.scheduleName}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
