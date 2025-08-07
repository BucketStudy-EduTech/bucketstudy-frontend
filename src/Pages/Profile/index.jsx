import React, { useState, useEffect } from 'react';
import './index.css';
import { FaEdit, FaSave } from 'react-icons/fa';

const Profile = () => {
  const defaultProfile = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    about: '',
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [editMode, setEditMode] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('bucketstudy-profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Save to localStorage
  const toggleEdit = () => {
    if (editMode) {
      localStorage.setItem('bucketstudy-profile', JSON.stringify(profile));
      
    }
    setEditMode(!editMode);
  };

  return (
    <div className="profile-wrapper h-full w-full relative">
      <h2>My Profile</h2>

      {/* Profile Header */}
      <div className="profile-card">
        <div className="avatar">
          {(profile.firstName[0] || 'U') + (profile.lastName[0] || '')}
        </div>
        <div className="info">
          <h3>{profile.firstName || "First Name"} {profile.lastName || "Last Name"}</h3>
          <p>{profile.email || "example@email.com"}</p>
        </div>
        <button className="edit-btn" onClick={toggleEdit}>
          {editMode ? <><FaSave /> Save</> : <><FaEdit /> Edit</>}
        </button>
      </div>

      {/* About Section */}
      <div className="profile-section">
        <div className="section-header">
          <h3>About</h3>
        </div>
        {editMode ? (
          <textarea
            id='profile_textarea'
            name="about"
            placeholder="Write something about yourself"
            value={profile.about}
            onChange={handleChange}
          />
        ) : (
          <p className="about-text">{profile.about || "Write something about yourself"}</p>
        )}
      </div>

      {/* Personal Details */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Personal Details</h3>
        </div>
        <div className="personal-grid">
          {[
            ['First Name', 'firstName'],
            ['Last Name', 'lastName'],
            ['Email', 'email'],
            ['Phone Number', 'phone'],
            ['Gender', 'gender'],
            ['Date of Birth', 'dob'],
          ].map(([label, key]) => (
            <div key={key}>
              <strong>{label}</strong>
              {editMode ? (
                <input
                  type="text"
                  name={key}
                  placeholder={`Enter ${label}`}
                  value={profile[key]}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile[key] || `Add ${label}`}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
