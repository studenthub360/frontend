import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

const Events= () => {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [addedEvents, setAddedEvents] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  };

  const addEvent = () => {
    const newEvent = {
      id: Date.now(),
      name: eventName,
      location: eventLocation,
      dateTime: eventDateTime,
      description: eventDescription,
      image: eventImage,
    };
    setAddedEvents([...addedEvents, newEvent]);
    // Reset form fields
    setEventName('');
    setEventLocation('');
    setEventDateTime('');
    setEventDescription('');
    setEventImage(null);
  };

  // Inserting dummy events
  const dummyEvents = [
    {
      id: 1,
      name: 'Dummy Event 1',
      location: 'Dummy Location 1',
      dateTime: '2024-02-14T09:00',
      description: 'Dummy description 1',
      image: null,
    },
    {
      id: 2,
      name: 'Dummy Event 2',
      location: 'Dummy Location 2',
      dateTime: '2024-02-15T10:00',
      description: 'Dummy description 2',
      image: null,
    },
    {
      id: 3,
      name: 'Dummy Event 3',
      location: 'Dummy Location 3',
      dateTime: '2024-02-16T11:00',
      description: 'Dummy description 3',
      image: null,
    },
    {
      id: 4,
      name: 'Dummy Event 4',
      location: 'Dummy Location 4',
      dateTime: '2024-02-17T12:00',
      description: 'Dummy description 4',
      image: null,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>

      {/* Form to add an event */}
      <form className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="eventName" className="block font-semibold mb-1">Event Name:</label>
            <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div>
            <label htmlFor="eventLocation" className="block font-semibold mb-1">Location:</label>
            <input type="text" id="eventLocation" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div>
            <label htmlFor="eventDateTime" className="block font-semibold mb-1">Date and Time:</label>
            <input type="datetime-local" id="eventDateTime" value={eventDateTime} onChange={(e) => setEventDateTime(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div className="col-span-2">
            <label htmlFor="eventDescription" className="block font-semibold mb-1">Event Description:</label>
            <textarea id="eventDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div className="col-span-2">
            <label htmlFor="eventImage" className="block font-semibold mb-1">Event Image:</label>
            <input type="file" id="eventImage" onChange={handleImageChange} className="border border-gray-300 rounded-lg p-2 w-full" />
          </div>
        </div>
        <button type="button" onClick={addEvent} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-36">Add Event</button>
      </form>

      {/* Carousel to display added events */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Added Events</h2>
        <Carousel itemsToShow={3} pagination={false}>
          {[...addedEvents, ...dummyEvents].map((event) => (
            <div key={event.id} className="px-2">
              <div className="border rounded-lg overflow-hidden">
                {event.image && (
                  <img src={URL.createObjectURL(event.image)} alt={event.name} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                  <p className="mb-2"><span className="font-semibold">Location:</span> {event.location}</p>
                  <p className="mb-2"><span className="font-semibold">Date and Time:</span> {event.dateTime}</p>
                  <p className="mb-2"><span className="font-semibold">Description:</span> {event.description}</p>
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
