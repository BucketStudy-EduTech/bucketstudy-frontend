import React, { useState, useEffect } from 'react';
import './CourseDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById } from '../../../api/courseApi'; // Import the API function

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const courseData = await getCourseById(id);
        setCourse(courseData);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="course-details-container flex justify-center items-center h-[calc(100vh-100px)]">
        <p className="text-xl font-semibold text-gray-700 animate-pulse">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-details-container flex justify-center items-center h-[calc(100vh-100px)]">
        <p className="text-xl font-semibold text-gray-700">Course not found!</p>
        <button className="text-blue-500 hover:underline ml-4" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="course-details-container bg-white rounded-xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto my-10 border-t-4 border-purple-600 animate-fade-in">
      <button className="text-gray-500 hover:text-purple-600 transition-colors duration-200 mb-6 flex items-center gap-2" onClick={() => navigate(-1)}>
        <span className="text-xl">←</span> Back
      </button>

      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{course.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Instructor ID</p>
          <p className="text-lg font-semibold text-gray-800">{course.instructor}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Duration</p>
          <p className="text-lg font-semibold text-gray-800">{course.duration} hours</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Price</p>
          <p className="text-lg font-semibold text-gray-800">{course.price === 0 ? "Free" : `₹${course.price}`}</p>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{course.description}</p>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Skills Covered</h3>
        <ul className="list-disc list-inside text-gray-700">
          {course.skills && course.skills.length > 0 ? (
            course.skills.map((skill, index) => <li key={index}>{skill}</li>)
          ) : (
            <li>No skills listed.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;