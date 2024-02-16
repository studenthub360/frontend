import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import zoom from "./images/zoom.png"; 
import googleMeet from "./images/googlemeet.png";

const StudySession = () => {
  const [studySessions, setStudySessions] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [focusOfStudy, setFocusOfStudy] = useState("");
  const [studyMentor, setStudyMentor] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlatformImage, setSelectedPlatformImage] = useState("");

  // Assuming you have the meeting platform images
  const meetingPlatforms = [
    { id: 1, name: "Zoom", image: zoom },
    { id: 2, name: "Google Meet", image: googleMeet },
    // Add more meeting platforms as needed
  ];

  useEffect(() => {
    // Fetch study sessions from the API when the component mounts
    fetchStudySessions();
  }, []);

  const fetchStudySessions = () => {
    // Simulated data for initial rendering
    const initialData = [
      {
        id: 1,
        groupName: "Study Group 1",
        focusOfStudy: "React Development",
        studyMentor: "John Doe",
        meetingPlatform: "Zoom",
        meetingLink: "https://zoom.us/meeting-link-1",
      },
      // Add more initial data as needed
    ];

    setStudySessions(initialData);
    setIsLoading(false);
  };

  const handlePlatformChange = (selectedPlatform) => {
    const selectedPlatformData = meetingPlatforms.find(
      (platform) => platform.name === selectedPlatform
    );
  
    setSelectedPlatformImage(selectedPlatformData ? selectedPlatformData.image : "");
    setSelectedPlatform(selectedPlatform);
  };
  

  const handleAddSession = () => {
    if (sessionName) {
      setSessions((prevSessions) => [...prevSessions, sessionName]);
      setSessionName("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all required fields are filled
    if (
      !groupName ||
      !focusOfStudy ||
      !studyMentor ||
      !selectedPlatform ||
      !meetingLink
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Simulated adding a new study session to the local state
    const newStudySession = {
      id: studySessions.length + 1,
      groupName,
      focusOfStudy,
      studyMentor,
      meetingPlatform: selectedPlatform,
      meetingLink,
      sessions,
    };

    setStudySessions((prevSessions) => [...prevSessions, newStudySession]);

    // Clear the form fields
    setGroupName("");
    setFocusOfStudy("");
    setStudyMentor("");
    setSelectedPlatform("");
    setMeetingLink("");
    setSessions([]);
    setSessionName("");
  };

  return (
    <div className="container mx-auto mt-8">
      <div>
        <form onSubmit={handleSubmit} className="w-1/2 pb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name of Study Group
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Focus of Study
            <input
              type="text"
              value={focusOfStudy}
              onChange={(e) => setFocusOfStudy(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Study Mentor
            <input
              type="text"
              value={studyMentor}
              onChange={(e) => setStudyMentor(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Meeting Platform
            <select
              value={selectedPlatform}
              onChange={(e) => handlePlatformChange(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Meeting Platform</option>
              {meetingPlatforms.map((platform) => (
                <option key={platform.id} value={platform.name}>
                  {platform.name}
                </option>
              ))}
            </select>
          </label>

          {selectedPlatformImage && (
            <img
              src={selectedPlatformImage}
              alt={`Selected Meeting Platform: ${selectedPlatform}`}
              className="w-1/2 h-10 object-contain mb-4"
            />
          )}

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Meeting Link
            <input
              type="text"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>

          <button
            type="submit"
            className="bg-[#3A4FFE] text-white py-2 px-5 rounded-md w-fit hover:bg-gray-800 font-extrabold mt-4"
          >
            ADD
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-2 lg:grid-cols-4 gap-8">
        {studySessions.map((session) => (
          <div
            key={session.id}
            className="bg-white pb-6 text-center rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {session.groupName}
            </h3>
            <p className="text-gray-600">{session.focusOfStudy}</p>
            <p className="text-gray-600">{session.studyMentor}</p>
            <p className="text-gray-600">{session.meetingPlatform}</p>

            <Link
              to={session.meetingLink}
              className="mt-4 text-[#3A4FFE] border border-[#3A4FFE] rounded-lg inline-block"
            >
              <h1 className="p-2 font-bold">Join Study Session</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySession;
