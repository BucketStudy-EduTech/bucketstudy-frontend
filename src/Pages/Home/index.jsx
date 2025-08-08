import './index.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        'KickStart your career with BucketStudy',
        'Gain experience through internships',
        'Challenge yourself and grow with us',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div className='home-section'>
      <div className='home-heading'>
        <div>
          <h1 className='heading'>
            <span ref={typedElement} className='typed-text'></span>
          </h1>
          <p className='para'>
            Gain real-world experience through our task-based internships and challenges.
          </p>
        </div>
      </div>

      <div className="course-section">
        <div className="course-banner">
          <div className="course-content">
            <span className="badge"> New Launch</span>
            <h2> Course + Internship Program</h2>
            <p>Learn with 1-Month Courses → Get Selected for Real Internships!</p>
            <div className="tags">
              <span className="tag">Recorded Lectures</span>
              <span className="tag"> Certificates</span>
              <span className="tag"> Live Projects</span>
            </div>
            <button className="cta-button">Enroll Now – Limited Seats!</button>
          </div>
          <div className="launch-banner">
            <span className="new-label">NEW!</span>
            <p>Launch Your<br />Tech Career</p>
          </div>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <h4>▶ Step 1: Learn</h4>
            <p>1-Month course with recorded lectures and weekly tasks</p>
          </div>
          <div className="step-card">
            <h4>✅ Step 2: Practice</h4>
            <p>Complete final project and get course certificate</p>
          </div>
          <div className="step-card">
            <h4>🎯 Step 3: Get Selected</h4>
            <p>Top performers get internship opportunities</p>
          </div>
        </div>

        <h3 className="section-titles">Available Course Programs</h3>
        <p className='section-para'>choose your path and start your journey to success</p>
      </div>

      <div className='courses-container'>
        <div className="course-card-grid">
          <div className="course-card">
            <h3>Full Stack Development</h3>
            <p>React, Node.js, MongoDB, Express</p>
            <span className="duration">1 Month Course</span>
          </div>

          <div className="course-card">
            <h3>Frontend Development</h3>
            <p>React, JavaScript, CSS, HTML</p>
            <span className="duration">1 Month Course</span>
          </div>

          <div className="course-card">
            <h3>Backend Development</h3>
            <p>Node.js, Express, Database, APIs</p>
            <span className="duration">1 Month Course</span>
          </div>

          <div className="course-card">
            <h3>UI/UX Design</h3>
            <p>Figma, Design Systems, Prototyping</p>
            <span className="duration">1 Month Course</span>
          </div>
        </div>

        <div className="course-buttons">
          <span className="limited-offer">
            <button className="offer-button">
              ⏰ Limited Time Offer - Early Bird Pricing!
            </button>
          </span>
          <button className="enroll-btn">View All Courses & Enroll</button>
        </div>

        <div className="journey-section">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students who have launched their careers through BucketStudy courses and internships.</p>
          <button className="journey-btn">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
