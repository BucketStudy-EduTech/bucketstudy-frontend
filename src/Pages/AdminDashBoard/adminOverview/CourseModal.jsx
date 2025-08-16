import React from "react";
import "./CourseModal.css";

const CourseModal = ({ isOpen, onClose, courses }) => {
  if (!isOpen) return null;

  return (
    <div className="course-modal-overlay">
      <div className="course-modal">
        <div className="modal-header">
          <h2>All Courses</h2>
        </div>

        <div className="modal-body">
          <table className="course-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Status</th>
                <th>Enrolled</th>
                <th>Purchased</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.status}</td>
                  <td>{course.enrolled}</td>
                  <td>{course.purchased}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="modal-footer">
          <button className="close-footer-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
