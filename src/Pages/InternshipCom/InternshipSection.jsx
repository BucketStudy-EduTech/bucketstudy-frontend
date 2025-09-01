import React, { useState } from "react";
import InternshipCard from "./InternShipCard";
import InternshipOverview from "./InternshipOverview";

function InternshipSection({ internships, isAdmin, onAddInternshipClick, onDelete }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const visibleInternships = showAll ? internships : internships.slice(0, 3);

  // Handle register (toggle overview)
  const handleRegister = (internship) => {
    if (selectedInternship && selectedInternship.id === internship.id) {
      setSelectedInternship(null); // toggle off if same internship
    } else {
      setSelectedInternship(internship);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">🎯 Our Internship Programs</h2>
      <h5 className="text-center text-gray-600 mb-6">
        "Explore Career-Boosting Internship Opportunities"
      </h5>

      {isAdmin && (
        <button
          onClick={onAddInternshipClick}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 mb-6"
        >
          Add New Internship
        </button>
      )}

      {/* Internship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleInternships.map((item, index) => (
          <InternshipCard
            key={item.id || index}
            internship={item}
            isAdmin={isAdmin}
            onRegister={handleRegister}   // ✅ controlled by handleRegister
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Toggle button */}
      <div className="text-center mt-6">
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Overview appears only after Register */}
      {selectedInternship && (
        <div className="mt-10">
          <InternshipOverview internship={selectedInternship} />
        </div>
      )}
    </section>
  );
}

export default InternshipSection;
