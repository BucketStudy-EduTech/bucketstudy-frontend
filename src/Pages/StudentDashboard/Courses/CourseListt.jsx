// src/components/StudentDashboard/CoursesReg/CourseListt.jsx

import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCardd';
import './CourseListt.css';
import { getAllCourses } from '../../../api/courseApi'; // Import the API function

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="course-list-container flex justify-center items-center h-[calc(100vh-100px)]">
        <p className="text-xl font-semibold text-gray-700 animate-pulse">Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="course-list-container bg-gray-50 py-10">
      <h2 className="course-list-title text-4xl font-extrabold text-center text-gray-800 mb-2">📚 Explore Our Exciting Courses!</h2>
      <h4 className="course-list-titlee text-lg text-center text-gray-600 mb-8">"Boost Your Skills - Start Learning Today!"</h4>
      <div className="course-list-grid grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-4 sm:px-6 md:px-8">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="h-full flex">
                <CourseCard course={course} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No courses available at the moment. Please check back later.
            </p>
          )}
      </div>

    </div>
  );
}

export default CourseList;