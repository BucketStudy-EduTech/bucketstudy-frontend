import React, { useState } from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "",
    message: "",
  });

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", mode: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", mode: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    // Removed max-h-70 to allow the card to expand
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 
    overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl 
    transition-all duration-300 flex flex-col h-full">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-5 ">
        <h3 className="text-xl font-bold line-clamp-1">{course.title}</h3>
        <p className="text-sm opacity-90">Instructor ID: {course.instructor}</p>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Duration:</span>{" "}
            {course.duration} hours
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Price:</span>{" "}
            {course.price === 0 ? (
              <span className="text-green-600 font-semibold">Free</span>
            ) : (
              `₹${course.price}`
            )}
          </p>
          <p className="text-sm text-gray-500 mt-3 line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-5">
          <Link
            to={`/dashboard/courses/${course.id}`}
            className="flex-1 text-center bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Details
          </Link>
          <button
            onClick={toggleForm}
            className="flex-1 text-center bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md"
          >
            {showForm ? "Close" : "Register"}
          </button>
        </div>

        {/* Registration Form */}
        {showForm && (
          <div className="mt-6 bg-purple-50 p-5 rounded-xl border border-purple-200 animate-fadeIn lg:w-3xl">
            <h4 className="text-lg font-bold text-purple-800 mb-4">
              Register for {course.title}
            </h4>

            <form className="space-y-4" onSubmit={handleSubmit}> 
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 text-sm bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 text-sm bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full p-3 text-sm bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select
                className="w-full p-3 text-sm bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                disabled
              >
                <option>{course.title}</option>
              </select>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                rows="3"
                className="w-full p-3 text-sm bg-white border border-purple-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
              >
                Submit
              </button>
              {submitted && (
                <p className="text-green-600 font-semibold mt-4 text-center animate-fadeIn">
                  ✅ Registration Successful!
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;