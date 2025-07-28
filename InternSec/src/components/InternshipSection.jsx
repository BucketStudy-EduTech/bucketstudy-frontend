import React, { useState } from 'react';
import './InternshipSection.css';
import InternshipCard from './InternShipCard';

const internships = [
  {
    title: "Web Development",
    img: "src/assets/we.jpg",
    description: "Learn HTML, CSS, JavaScript, and React.",
  },
  {
    title: "Data Science",
    img: "src/assets/ds.jpg",
    description: "Master Python, Pandas, and Machine Learning models.",
  },
  {
    title: "UI/UX Design",
    img: "src/assets/ui.jpg",
    description: "Design interfaces using Figma and Adobe XD.",
  },
  {
    title: "Cloud Computing",
    img: "src/assets/cl.jpg",
    description: "Explore AWS, Azure, and deploy scalable apps.",
  },
  {
    title: "Cybersecurity",
    img: "src/assets/cs.jpg",
    description: "Understand threats, tools, and secure systems.",
  }
];

function InternshipSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleInternships = showAll ? internships : internships.slice(0, 3);

  return (
    
    <section className="internship-section">
      
      <h2 className="section-title"> 🎯Our Internship Programs</h2>
      <h5 className="section-titlee">"Explore Career-Boosting Intership Opportunities"
      </h5>
      <div className="card-container">
        
        {visibleInternships.map((item, index) => (
          <InternshipCard key={index} {...item} />
        ))}
      </div>
      <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default InternshipSection;