import React, { useState, useEffect } from "react";
import "./CourseManagement.css";
import CourseForm from "./CourseForm";
import { getAllCourses, createCourse, updateCourse, deleteCourse } from "../../../api/courseApi"; // Import API functions

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchAllCourses = async () => {
    try {
      const data = await getAllCourses();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleAdd = () => {
    setEditingCourse(null);
    setShowForm(true);
  };

  const handleSave = async (courseData) => {
    try {
      if (editingCourse) {
        // The id will now be a String, sent from the form
        await updateCourse(courseData.id, courseData);
      } else {
        await createCourse(courseData);
      }
      setShowForm(false);
      setEditingCourse(null);
      fetchAllCourses(); // Re-fetch all courses to update the list
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id); // The 'id' here will now be a String
      fetchAllCourses(); // Re-fetch all courses after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  return (
    <div className="course-management">
      <header>
        <h1>Course Management</h1>
        <button className="add-btn" onClick={handleAdd}>
          + Add New Course
        </button>
      </header>

      <div className="course-table border-gray-500 border">
        <div className="table-header">
          <span>Title</span>
          <span>Instructor</span>
          <span>Price</span>
          <span>Enrolled</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {courses.map((course) => (
          // The key should be the String ID
          <div className="table-row border-b-2 border-gray-300" key={course.id}>
            <span>{course.title}</span>
            <span>{course.instructor}</span>
            <span>{course.price === 0 ? "Free" : `₹${course.price}`}</span>
            <span>{course.enrolled}</span>
            <span className={`status ${course.status?.toLowerCase()}`}>{course.status}</span>
            <span className="actions">
              <button onClick={() => handleEdit(course)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(course.id)} className="delete-btn">Delete</button>
            </span>
          </div>
        ))}
      </div>

      {showForm && (
        <CourseForm
          onClose={() => setShowForm(false)}
          onSave={handleSave}
          course={editingCourse}
        />
      )}
    </div>
  );
}