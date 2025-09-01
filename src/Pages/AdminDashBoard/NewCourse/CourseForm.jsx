import React, { useState, useEffect } from "react";
import "./CourseForm.css";

export default function CourseForm({ onClose, onSave, course }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 0,
    instructor: 0, // Note: instructor is an integer in your backend model
    price: 0,
    status: "Draft",
  });

  useEffect(() => {
    if (course) {
      setFormData({
        ...course,
        status: course.status || "Draft", // Set a default if status is null
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle number inputs correctly
    const val = (name === "price" || name === "duration" || name === "instructor")
      ? Number(value)
      : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>{course ? "Edit Course" : "Add New Course"}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Instructor ID</label>
          <input
            type="number"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
          />

          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <label>Duration (hours)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />

          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}