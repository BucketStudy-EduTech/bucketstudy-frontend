import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: '',
    message: ''
  });

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', mode: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', mode: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className=" mt-10 w-11/12  border-2 border-pink-300 sm:w-80 bg-white rounded-2xl shadow-xl m-4 transform hover:scale-105 hover:bg-amber-800 transition-transform duration-300 ease-in-out">
      <div className="p-6">
        {/* Course Info */}
        <div className="">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{course.name}</h3>
          <p className="text-sm text-gray-500 font-medium">
            <span className="font-semibold text-gray-700">Tutor:</span> {course.tutor}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            <span className="font-semibold text-gray-700">Duration:</span> {course.duration}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            <span className="font-semibold text-gray-700">Start Date:</span> {course.startDate}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            <span className="font-semibold text-gray-700">Mode:</span> {course.mode}
          </p>
          <p className="text-sm text-gray-600 mt-3 line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center space-x-2 mt-4">
          <Link
            to={`/dashboard/courses/${course.id}`}
            className="flex-1 text-center bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
          >
            Details
          </Link>

          <button
            onClick={toggleForm}
            className="flex-1 text-center bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md"
          >
            {showForm ? 'Close' : 'Register'}
          </button>
        </div>

        {/* Registration Form */}
        {showForm && (
          <div className="mt-6 bg-purple-50 p-5 rounded-xl border border-purple-200 animate-fadeIn">
            <h4 className="text-lg font-bold text-purple-800 mb-4">
              Register for {course.name}
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
                <option>{course.name}</option>
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