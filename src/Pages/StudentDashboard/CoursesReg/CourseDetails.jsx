import React from 'react';
import './CourseDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import courses from '../../../data/courses';
import RegistrationForm from './RegistrationForm';


const CourseDetails = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.name.toLowerCase().replace(/\s+/g, '-') === courseName
  );

  if (!course) return <div className="course-not-found">Course not found!</div>;

  return (
    <div className="course-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h2 className="course-title">{course.name}</h2>
      <p><strong>Tutor:</strong> {course.tutor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
      <p><strong>Mode:</strong> {course.mode}</p>
      <p className="description"><strong>Description:</strong> {course.description}</p>
    </div>
  );
};

export default CourseDetails;