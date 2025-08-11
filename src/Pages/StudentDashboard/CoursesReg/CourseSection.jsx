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
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
      </Routes>


      
    </div>
  );
}

export default CourseSection;
