import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const swiperRef = useRef(null);

  const addEvent = () => {
    const newEvent = {
      id: Date.now(),
      name: eventName,
      location: eventLocation,
      dateTime: eventDateTime,
      description: eventDescription,
      image: eventImage,
    };

    setEvents([...events, newEvent]);
    // Reset form fields
    setEventName("");
    setEventLocation("");
    setEventDateTime("");
    setEventDescription("");
    setEventImage(null);

    // Update Swiper after adding a new event
    swiperRef.current.update();
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  };

  const showEventDetails = (id) => {
    const selected = events.find((event) => event.id === id);
    setSelectedEvent(selected);
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const dummyEvents = [
    {
      id: 1,
      name: "Event 1",
      location: "Location 1",
      dateTime: "2024-02-14T12:00",
      description: "Description 1",
      image: null,
    },
    // {
    //   id: 2,
    //   name: "Event 2",
    //   location: "Location 2",
    //   dateTime: "2024-02-15T14:30",
    //   description: "Description 2",
    //   image: null,
    // },
    // {
    //   id: 3,
    //   name: "Event 3",
    //   location: "Location 3",
    //   dateTime: "2024-02-16T18:45",
    //   description: "Description 3",
    //   image: null,
    // },
    // {
    //   id: 4,
    //   name: "Event 4",
    //   location: "Location 4",
    //   dateTime: "2024-02-17T09:15",
    //   description: "Description 4",
    //   image: null,
    // },
  ];

  // Initialize with dummy events
  useState(() => {
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="block lg:flex-row space-x-0 lg:space-x-8">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Events</h2>

        {/* Form to add new events */}
        <form className="lg:flex flex-grow lg:flex-wrap">
          <div className="mb-4 pr-2 w-full lg:w-1/2">
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
          <div className="mb-4 w-full">
            <label className="font-bold" htmlFor="eventImage">
              Event Image:
            </label>
            <input
              type="file"
              id="eventImage"
              onChange={handleImageChange}
              className="p-1 w-full border border-black rounded-lg"
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
      </div>

      {/* <div className="w-full lg:w-min p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Events</h2>
       
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="w-full p-2">
                <div className="border p-4 rounded-md">
                  {event.image && (
                    <img
                      src={
                        typeof event.image === "string"
                          ? event.image
                          : URL.createObjectURL(event.image)
                      }
                      alt={event.name}
                      className="mt-2 w-full h-32 object-cover rounded-md"
                    />
                  )}
                  <h3 className="font-semibold text-center">{event.name}</h3>
                  {selectedEvent && (
                    <div className="w-full p-4">
                      <div className="">
                        <p>{selectedEvent.location}</p>
                        <p>{formatDateTime(selectedEvent.dateTime)}</p>
                        <p>{selectedEvent.description}</p>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => showEventDetails(event.id)}
                    className="text-[#3B50FE] mt-2"
                  >
                    Show Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="bg-[#3B50FE] rounded-lg text-white py-2 px-6"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#3B50FE] rounded-lg text-white py-2 px-6"
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Events;
