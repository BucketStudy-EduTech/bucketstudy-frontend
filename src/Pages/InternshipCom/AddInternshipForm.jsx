import React, { useState } from "react";

const AddInternshipForm = ({ onSubmit, onCancel }) => {
  
   const [internship, setInternship] = useState({
  title: "",
  company: "",
  duration: 1,
  description: "",
  requirements: "",
  applicationDeadline: "",
  selectedStudent: [],
  status: "Open",
});



  const handleChange = (e) => {
    const { name, value } = e.target;
    setInternship((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requirementsArray = internship.requirements
      .split(",")
      .map((req) => req.trim());
    const newInternshipData = {
      ...internship,
      requirements: requirementsArray,
      applicationDeadline: new Date(
        internship.applicationDeadline
      ).toISOString(),
      selectedStudent: [], 
    };
    onSubmit(newInternshipData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add New Internship Program
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={internship.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={internship.company}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Duration (months)
          </label>
          <input
            type="number"
            name="duration"
            value={internship.duration}
            onChange={handleChange}
            required
            min="1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Requirements (comma-separated)
          </label>
          <textarea
            name="requirements"
            value={internship.requirements}
            onChange={handleChange}
            required
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none"
          ></textarea>
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            value={internship.applicationDeadline}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            name="status"
            value={internship.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="Open">Open</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div>
        <label className="block text-gray-700 font-medium mb-1">Description</label>
        <textarea
            name="description"
            value={internship.description}
            onChange={handleChange}
            required
            rows="2"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none"
        ></textarea>
        </div>

{/* Image URL */}
   

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            Add Internship
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInternshipForm;
