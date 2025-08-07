import React from 'react';
import CourseCard from './CourseCardd';
import courses from '../data/courses';
import './CourseListt.css';

function CourseList() {
  return (
    <div className="course-list-container">
      <h2 className="course-list-title">📚Explore Our Exciting Courses!</h2>
      <h4 className="course-list-titlee">"Boost Your Skills-Start Learning Today!"</h4>
      <div className="course-list-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;