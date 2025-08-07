import React from "react";
import { Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseListt";
import CourseDetail from "./components/CourseDetails";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      

      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
      </Routes>
     <div className="bottom-buttons">
  <button className="offer-button">
    ⏰ Limited Time Offer - Early Bird Pricing!
  </button>
  <button className="enroll-button">
    View All Courses & Enroll →
  </button>
</div>
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

      {/* ✅ Footer Added Below */}
      <footer className="bottom-navbar">
        <p>© 2025 ShubhangiAhire-FrontendDeveloper. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;