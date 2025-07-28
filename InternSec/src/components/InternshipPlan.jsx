import React from "react";
import "./InternshipPlan.css";

const CourseInternshipPlan = () => {
  return (
    <section className="plan-section">
      <h2 className="plan-heading">🚀 One-Month Course + Internship Plan</h2>

      <div className="plan-card glass">
        <h3>📚 What You’ll Learn</h3>
        <ul>
          <li>Frontend technologies (HTML, CSS, JS, React)</li>
          <li>Live mini projects with team-based tasks</li>
          <li>Daily mentorship & progress tracking</li>
          <li>GitHub, deployment & version control</li>
          <li>Certificate upon completion</li>
        </ul>
      </div>

      <div className="plan-card glass">
        <h3>💼 Internship Opportunities</h3>
        <ul>
          <li>Real-time project involvement</li>
          <li>Industry-style reporting and teamwork</li>
          <li>1:1 mentorship and resume reviews</li>
          <li>Internship Certificate with unique ID</li>
          <li>Guidance for placement & career growth</li>
        </ul>
      </div>
    </section>
  );
};

export default CourseInternshipPlan;