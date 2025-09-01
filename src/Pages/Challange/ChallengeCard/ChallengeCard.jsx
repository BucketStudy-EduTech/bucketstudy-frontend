import React from "react";
import "./ChallengeCard.css";

const ChallengeCard = () => {
  return (
    <div className="challenge-container">
      <div className="challenge-header">
        <h1>🚀 Challenges</h1>
        <p>Test your skills with coding challenges and compete with developers across the globe.</p>
      </div>

      <div className="challenge-section">
        <h2>🔥 Current Challenge</h2>

        <div className="challenge-card">
          <div className="status-tags">
            <span className="completed-tag">COMPLETED</span>
            <span className="team-event-tag">Team Event</span>
          </div>

          <h3 className="challenge-title">BucketStudy Hackathon 2025</h3>
          <p className="level-info">Level 1 • 20–25 Days Duration</p>

          <div className="prize-box">
            <p className="prize-amount">₹1,499</p>
            <span className="prize-note">+ T-shirts & Certificates</span>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <p className="info-label">Registration Fee</p>
              <p className="info-value blue">₹150</p>
              <p className="info-subtext">per team</p>
            </div>
            <div className="info-item">
              <p className="info-label">Team Size</p>
              <p className="info-value purple">1-3</p>
              <p className="info-subtext">members</p>
            </div>
            <div className="info-item">
              <p className="info-label">Open For</p>
              <p className="info-value orange">All</p>
              <p className="info-subtext">college students</p>
            </div>
          </div>

          <button className="learn-more-btn">Learn More</button>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noreferrer"
            className="register-btn"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
