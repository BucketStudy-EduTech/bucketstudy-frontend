// ShubhangiAhire
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseCardd.css';

function CourseCard({ course }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false); 

  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="course-card">
      <div className="course-content">
        <h3>{course.name}</h3>
        <p><strong>Tutor:</strong> {course.tutor}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Start Date:</strong> {course.startDate}</p>
        <p><strong>Mode:</strong> {course.mode}</p>
        <p className="desc">{course.description.slice(0, 100)}...</p>

        <div className="button-group">
          <Link to={`/courses/${course.id}`}></Link>
          <button className="styled-buttonn" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register'}
          </button>
        </div>

        {showForm && (
          <div className="registration-section fade-in">
            <h4>Register for {course.name}</h4>
            <form className="registration-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <select>
                <option value={course.name}>{course.name}</option>
              </select>
              <select required>
                <option value="">Select Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
              <textarea placeholder="Message..." rows="3" />
              <button type="submit" className="submit-btn">Submit</button>

              
              {submitted && (
                <p className="success-message">✅ Registration Successful!</p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;