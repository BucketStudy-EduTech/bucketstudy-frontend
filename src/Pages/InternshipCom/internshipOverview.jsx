import React from "react";

const InternshipOverview = ({ internship, onUnregister }) => {
  if (!internship) {
    return (
      <div className="text-center text-gray-600 py-8">
        Loading internship details...
      </div>
    );
  }

  const { title, company, duration, requirements, status, description, applicationDeadline } =
    internship;

  
  const statusColors = {
    open: "bg-green-100 text-green-700",
    closed: "bg-red-100 text-red-700",
    ongoing: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ✅ Your Registered Internship
      </h2>

      {/* Program Details */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Program Details
        </h3>
        <p className="text-gray-700">
          <strong>Internship:</strong> {title}
        </p>
        <p className="text-gray-700">
          <strong>Company:</strong> {company}
        </p>
        <p className="text-gray-700">
          <strong>Duration:</strong> {duration} months
        </p>
        <p className="text-gray-700">
          <strong>Status:</strong>{" "}
          <span
            className={`px-2 py-1 rounded-md text-sm font-medium ${
              statusColors[status?.toLowerCase()] || "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>
        </p>
        {applicationDeadline && (
          <p className="text-gray-700">
            <strong>Deadline:</strong>{" "}
            {new Date(applicationDeadline).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* Description */}
      {description && (
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            About the Program
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      )}

      {/* Learning Path */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Your Learning Path
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {requirements?.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg rounded-2xl p-6 border border-indigo-100 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Next Steps
        </h3>
        <p className="text-gray-700 leading-relaxed">
          A mentor will contact you shortly to guide you through the next steps,
          including resume reviews and project assignments.
        </p>
      </div>

      {/* Unregister Button */}
      {onUnregister && (
        <div className="text-center">
          <button
            onClick={onUnregister}
            className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Unregister
          </button>
        </div>
      )}
    </div>
  );
};

export default InternshipOverview;
