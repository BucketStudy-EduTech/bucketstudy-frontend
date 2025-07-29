import React from 'react';
import './WhyChooseUs.css';
import coImg from '../assets/co.jpg'; 

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">
      
        <div className="why-image">
          <img src={coImg} alt="Why Choose Us" />
        </div>

        <div className="why-content">
          <small>YOU ARE LOOKING FOR US</small>
          <h2>Why choosing our company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <ul className="feature-list">
            <li>Completion Certificate Provides</li>
            <li>Letter Of Recommendation</li>
            <li>Help And Support</li>
            <li>Future Freelancing Opportunities</li>
          </ul>

          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;