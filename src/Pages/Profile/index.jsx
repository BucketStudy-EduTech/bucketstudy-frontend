import React, { useState, useEffect } from "react";
import {
  FaEdit,
  FaSave,
  FaSpinner,
  FaMale,
  FaFemale,
  FaUser,
  FaUpload,
  FaCheckCircle,
} from "react-icons/fa";
import { getUserById, updateUser } from "../../api/userApi";

const CURRENT_USER_ID = "60c72b2f9b1d8e001f8d4e78";

// --- Profile Display Component ---
const ProfileDisplay = ({ profile, onEdit }) => {
  if (!profile) return null;

  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-200 shadow-inner">
          {profile.profileImage ? (
            <img
              src={profile.profileImage}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
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
        {[
          { label: "Full Name", value: profile.name },
          { label: "Email", value: profile.email },
          { label: "Phone", value: profile.phone || "N/A" },
          { label: "Location", value: profile.location || "N/A" },
          {
            label: "Gender",
            value: (
              <div className="flex items-center gap-2">
                {profile.gender === "Male" && (
                  <FaMale className="text-blue-500" />
                )}
                {profile.gender === "Female" && (
                  <FaFemale className="text-pink-500" />
                )}
                <span>{profile.gender || "N/A"}</span>
              </div>
            ),
          },
          { label: "Bio", value: profile.bio || "N/A" },
        ].map((item, idx) => (
          <div key={idx}>
            <label className="block text-sm font-medium text-gray-600">
              {item.label}
            </label>
            <div className="mt-1 w-full bg-gray-50 rounded-lg px-4 py-2 border border-transparent">
              <span className="text-gray-800">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// --- Editable Form Component ---
const ProfileForm = ({ profile, onChange, onFileChange, onSave, isLoading }) => (
  <>
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-300 relative group">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <FaUser className="w-12 h-12 text-gray-400" />
        )}
        <label
          htmlFor="avatar-upload"
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <FaUpload />
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
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
      {[
        { label: "Name", name: "name", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone", name: "phone", type: "tel" },
        { label: "Location", name: "location", type: "text" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-600">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={profile[field.name] || ""}
            onChange={onChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-600">Gender</label>
        <div className="mt-2 flex space-x-4">
          {["Male", "Female", "Other"].map((gender) => (
            <label key={gender} className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={profile.gender === gender}
                onChange={onChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Bio</label>
        <textarea
          name="bio"
          value={profile.bio || ""}
          onChange={onChange}
          rows="3"
          className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>
    </div>
  </>
);

// --- Main Profile Component ---
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserById(CURRENT_USER_ID);
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        setProfile({});
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      setProfile({
        ...profile,
        profileImage: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const dataToSave = {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        gender: profile.gender,
        bio: profile.bio,
        profileImage: profile.profileImage,
      };

      const updatedUser = await updateUser(CURRENT_USER_ID, dataToSave);
      setProfile(updatedUser);
      setIsEditing(false);

      if (avatarFile) {
        console.log(
          "Avatar file selected, but requires a separate backend endpoint for upload."
        );
      }

      // Show success message
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to save profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 relative">
        {success && (
          <div className="absolute top-2 right-2 flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg shadow-md">
            <FaCheckCircle className="mr-2" />
            Profile updated successfully!
          </div>
        )}
        {isEditing ? (
          <ProfileForm
            profile={profile}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSave={handleSave}
            isLoading={isLoading}
          />
        ) : (
          <ProfileDisplay profile={profile} onEdit={() => setIsEditing(true)} />
        )}
      </div>
    </div>
  );
}
