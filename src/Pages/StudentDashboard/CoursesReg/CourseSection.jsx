// src/components/StudentDashboard/CoursesReg/CourseSection.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CourseList from "./CourseListt";
import CourseDetail from "./CourseDetails";
import RegistrationForm from "./RegistrationForm";
import "./CourseSection.css"; 

function CourseSection() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
      </Routes>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <button className="offer-button">
          ⏰ Limited Time Offer - Early Bird Pricing!
        </button>
        <button className="enroll-button">
          View All Courses & Enroll →
        </button>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <div className="contact-card">
          <div className="contact-image">
            <h2 className="contact-heading">Contact-Us</h2>
          </div>

          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-navbar">
        <p>© 2025 ShubhangiAhire-FrontendDeveloper. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CourseSection;
