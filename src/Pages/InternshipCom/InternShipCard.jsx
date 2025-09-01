import React, { useState } from "react";
import { FaBuilding, FaClock, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

function InternshipCard({ internship, isAdmin, onRegister, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  if (!internship) {
    return <div className="p-4 text-red-500">Internship data is missing</div>;
  }

  const {
    title = "Untitled Internship",
    company = "Unknown Company",
    duration = 0,
    requirements = [],
    applicationDeadline,
    status = "Open",
    img,
    description = "No description available.",
  } = internship;

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header / Banner */}
      <div
        className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center"
      >
        <h3 className="text-xl font-bold text-white text-center">{title}</h3>
      </div>

      {/* Compact View */}
      {!expanded ? (
        <div className="p-5">
          <img
            src={img || "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/10/internship-resume.jpg"}
            alt={title}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onRegister(internship);
            }}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </div>
      ) : (
        // Expanded View
        <div className="p-5 space-y-3">
          <p className="flex items-center gap-2 text-gray-700">
            <FaBuilding className="text-indigo-400" /> <strong>Company:</strong> {company}
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaClock className="text-indigo-500" /> <strong>Duration:</strong> {duration} months
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-indigo-500" /> <strong>Status:</strong> {status}
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt className="text-indigo-500" /> <strong>Deadline:</strong>{" "}
            {applicationDeadline
              ? new Date(applicationDeadline).toLocaleDateString()
              : "N/A"}
          </p>

          <div>
            <p className="font-medium text-gray-800 mb-2">🔥 Requirements:</p>
            <div className="flex flex-wrap gap-2">
              {requirements.length > 0 ? (
                requirements.map((req, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {req}
                  </span>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No requirements listed</p>
              )}
            </div>
          </div>

          <p className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-indigo-500" /> <strong>Description:</strong> {description}
          </p>

          {/* Actions */}
          <div className="flex gap-2 pt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRegister(internship);
              }}
              className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </button>
            {isAdmin && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(internship.id);
                }}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InternshipCard;
