import React from 'react';
import './CourseDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import courses from '../../../data/courses';
import './CourseDetails.css'; 

const CourseDetails = () => {
  const { id } = useParams(); // changed from courseName to id
  const navigate = useNavigate();

  const course = courses.find(course => course.id.toString() === id);

  if (!course) return <div className="course-not-found">Course not found!</div>;

  return (
    <div className="course-details-container course-card">
      <button className="w-14 " onClick={() => navigate(-1)}>←  Back</button>
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
