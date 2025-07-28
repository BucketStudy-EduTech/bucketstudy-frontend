import React from 'react';
import './InternshipSection.css';

function InternshipCard({ title, img, description }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="register-btn">Register</button>
    </div>
  );
}

export default InternshipCard;