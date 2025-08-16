import React, { useState } from "react";

export default function App() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", description: "Learn fundamentals of React.js" },
    { id: 2, title: "Java Spring Boot", description: "Backend development using Spring Boot" },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleAddNew = () => {
    setEditingCourse(null);
    setIsFormOpen(true);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsFormOpen(true);
  };

  const handleSaveCourse = (newCourse) => {
    if (editingCourse) {
      setCourses(
        courses.map((c) => (c.id === editingCourse.id ? { ...newCourse, id: c.id } : c))
      );
    } else {
      setCourses([...courses, { ...newCourse, id: Date.now() }]);
    }
    setIsFormOpen(false);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="app-container">
      <CourseManagement
        courses={courses}
        onAddNew={handleAddNew}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isFormOpen && (
        <CourseForm
          initialData={editingCourse}
          onSave={handleSaveCourse}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}