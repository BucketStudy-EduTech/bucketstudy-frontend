import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is the duration of the internship program?",
    answer: "Our internship program lasts for one month, including both learning and real-world project experience."
  },
  {
    question: "Will I get a certificate after completion?",
    answer: "Yes! You’ll receive a Course Completion Certificate, Internship Certificate, and Letter of Recommendation."
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience is required. This program is beginner-friendly and teaches you from the basics."
  },
  {
    question: "Is this a paid internship?",
    answer: "This is an unpaid learning + internship opportunity focused on skill-building and career growth."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">📌 Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-card ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;