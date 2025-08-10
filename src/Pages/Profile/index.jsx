import React, { useState } from "react";

import { FaEdit, FaSave, FaSpinner, FaMale, FaFemale, FaUser, FaUpload } from "react-icons/fa";

// Component for displaying profile data
const ProfileDisplay = ({ profile, onEdit }) => (
  <>
    {/* Avatar */}
    <div className="flex justify-center mb-6">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-200 shadow-inner">
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt="User Avatar" className="w-full h-full object-cover" />
        ) : (
          <FaUser className="w-12 h-12 text-gray-400" />
        )}
      </div>
    </div>
    
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
      <button
        onClick={onEdit}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        <FaEdit /> Edit
      </button>
    </div>
    <div className="space-y-5">
      {Object.entries(profile).map(([key, value]) => {
        // Don't display avatarUrl in the list
        if (key === "avatarUrl") return null;

        return (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            <div className="mt-1 w-full bg-gray-50 rounded-lg px-4 py-2 border border-transparent hover:border-blue-300 transition-colors flex items-center gap-2">
              {key === "gender" && value === "Male" && <FaMale className="text-blue-500" />}
              {key === "gender" && value === "Female" && <FaFemale className="text-pink-500" />}
              <span className="text-gray-800">{value}</span>
            </div>
          </div>
        );
      })}
    </div>
  </>
);

// Component for the editable form
const ProfileForm = ({ profile, onChange, onSave, isLoading }) => (
  <>
    {/* Avatar Section */}
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-300 relative group">
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt="User Avatar" className="w-full h-full object-cover" />
        ) : (
          <FaUser className="w-12 h-12 text-gray-400" />
        )}
        <label htmlFor="avatar-upload" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <FaUpload />
        </label>
        <input id="avatar-upload" type="file" className="hidden" />
      </div>
      <p className="mt-2 text-sm text-gray-500">Click to change avatar</p>
    </div>

    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
      <button
        onClick={onSave}
        disabled={isLoading}
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200 disabled:bg-green-300"
      >
        {isLoading ? <FaSpinner className="animate-spin" /> : <FaSave />}
        {isLoading ? "Saving..." : "Save"}
      </button>
    </div>

    <div className="space-y-5">
      {/* Dynamic fields */}
      {Object.entries(profile).map(([key, value]) => {
        // Don't render an input for avatarUrl
        if (key === "avatarUrl") return null;

        return (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            {key === "bio" ? (
              <textarea
                name={key}
                value={value}
                onChange={onChange}
                rows="3"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all text-gray-800"
              />
            ) : key === "gender" ? (
              <div className="mt-2 flex space-x-4">
                {["Male", "Female", "Other"].map((gender) => (
                  <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={profile.gender === gender}
                      onChange={onChange}
                      className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-gray-700">{gender}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input
                type="text"
                name={key}
                value={value}
                onChange={onChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all text-gray-800"
              />
            )}
          </div>
        );
      })}
    </div>
  </>
);

// Main Profile component
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Prathamesh Katre",
    email: "prathamesh@example.com",
    phone: "+91 98765 43210",
    role: "Frontend Developer",
    location: "Pune, India",
    gender: "Male",
    bio: "Passionate web developer with expertise in React, Tailwind, and modern UI design.",
    avatarUrl: null, // Placeholder for an avatar URL
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Profile saved:", profile);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:scale-[1.01] animate-fade-in">
        {isEditing ? (
          <ProfileForm
            profile={profile}
            onChange={handleChange}
            onSave={handleSave}
            isLoading={isLoading}
          />
        ) : (
          <ProfileDisplay
            profile={profile}
            onEdit={() => setIsEditing(true)}
          />
        )}
      </div>
    </div>
  );
}