import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});

  useEffect(() => {
    // Fetch user profile data when the component mounts
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Fetch user profile data from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/user",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const userData = await response.json();
      setUserProfile(userData.result); // Assume the user profile is under the 'result' key
      console.log(userData);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      alert("Failed to fetch user profile. Please try again.");
    }
  };

  const handleEditClick = () => {
    setEditedProfile(userProfile); // Set initial values for the form
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Send PATCH request to update user profile
      const response = await fetch(
        "https://student360-api.onrender.com/api/edit",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(editedProfile),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }

      // Fetch updated user profile after successful update
      await fetchUserProfile();

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user profile:", error);
      alert("Failed to update user profile. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-[#3B50FE]">User Profile</h1>

      {isEditing ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Display Edit Form */}
          <EditProfileForm
            editedProfile={editedProfile}
            handleChange={handleChange}
            handleCancelEdit={handleCancelEdit}
            handleSaveEdit={handleSaveEdit}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Display User Profile */}
          <ProfileDetail
            label="Full Name"
            icon={<FaUser />}
            value={userProfile?.full_name}
          />
          <ProfileDetail
            label="Email Address"
            icon={<FaEnvelope />}
            value={userProfile?.email}
          />
          <ProfileDetail
            label="Department"
            icon={<FaBuilding />}
            value={userProfile?.department}
          />
          <ProfileDetail
            label="Level"
            icon={<FaGraduationCap />}
            value={userProfile?.level}
          />
          <ProfileDetail
            label="University"
            icon={<FaBuilding />}
            value={userProfile?.university}
          />
          {/* Edit Button */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <button
              className="text-[#3B50FE] bg-white border border-[#3B50FE] rounded-md px-4 py-2 hover:bg-[#3B50FE] hover:text-white"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileDetail = ({ label, icon, value }) => (
  <div className="bg-white p-6 rounded-md shadow-md">
    <div className="flex items-center mb-4">
      <div className="mr-4 text-[#3B50FE] text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold">{label}</h3>
    </div>
    <p className="text-gray-600">{value || "Not available"}</p>
  </div>
);

const EditProfileForm = ({
  editedProfile,
  handleChange,
  handleCancelEdit,
  handleSaveEdit,
}) => (
  <div className="bg-white p-6 rounded-md shadow-md col-span-2">
    <h2 className="text-2xl font-bold mb-4 text-[#3B50FE]">Edit Profile</h2>
    <form>
      {/* Add form fields for each profile detail */}
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-bold">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="full_name"
          value={editedProfile.full_name || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-[#3B50FE]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={editedProfile.email || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-[#3B50FE]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700 font-bold">
          Department
        </label>
        <input
          type="text"
          id="department"
          name="department"
          value={editedProfile.department || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-[#3B50FE]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="level" className="block text-gray-700 font-bold">
          Level
        </label>
        <input
          type="text"
          id="level"
          name="level"
          value={editedProfile.level || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-[#3B50FE]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="university" className="block text-gray-700 font-bold">
          University
        </label>
        <input
          type="text"
          id="university"
          name="university"
          value={editedProfile.university || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-[#3B50FE]"
        />
      </div>
      {/* Repeat similar structure for other profile details (email, department, etc.) */}
      {/* ... */}

      <div className="flex justify-between">
        <button
          type="button"
          className="text-[#3B50FE] border border-[#3B50FE] rounded-md px-4 py-2 hover:bg-[#3B50FE] hover:text-white"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
        <button
          type="button"
          className="text-white bg-[#3B50FE] border border-[#3B50FE] rounded-md px-4 py-2 hover:bg-gray-800"
          onClick={handleSaveEdit}
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
);

export default UserProfile;
