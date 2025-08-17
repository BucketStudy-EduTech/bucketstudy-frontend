import React, { useState } from "react";
import "./CourseManagement.css";
import CourseForm from "./CourseForm";

const initialCourses = [
  { id: 1, title: "React Basics", instructor: "J. Mehta", price: 499, enrolled: 1245, status: "Published" },
  { id: 2, title: "Node.js Intro", instructor: "P. Rao", price: 699, enrolled: 980, status: "Draft" },
  { id: 3, title: "CSS Mastery", instructor: "K. Singh", price: 0, enrolled: 2430, status: "Published" },
];

export default function CourseManagement() {
  const [courses, setCourses] = useState(initialCourses);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleAdd = () => {
    setEditingCourse(null);
    setShowForm(true);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  const handleSave = (courseData) => {
    if (editingCourse) {
      setCourses(courses.map((c) => (c.id === editingCourse.id ? { ...courseData, id: editingCourse.id } : c)));
    } else {
      setCourses([...courses, { ...courseData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingCourse(null);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
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
          <div className="table-row border-b-2 border-gray-300" key={course.id}>
            <span>{course.title}</span>
            <span>{course.instructor}</span>
            <span>{course.price === 0 ? "Free" : `₹${course.price}`}</span>
            <span>{course.enrolled}</span>
            <span className={`status ${course.status.toLowerCase()}`}>{course.status}</span>
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