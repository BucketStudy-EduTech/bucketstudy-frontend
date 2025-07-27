import './index.css';

//--------------------  HOME COMPONENT ----------------------
function Home(){
    return(
    <div className='home-section'>
      <div className='home-heading'>
        <div>
          <h1 className='heading'>KickStart your career with <span>BucketStudy</span></h1>
           <p className='para'>Gain real-world experience through our task baseed internships and challenges.</p>
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

      <h3 className="section-title">Available Course Programs</h3>
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
    <span className="limited-offer">Limited Time Offer – Early Bird Pricing!</span>
    <button className="enroll-btn">View All Courses & Enroll</button>
  </div>
   <div className="journey-section">
  <h2>Ready to Start Your Journey?</h2>
  <p>Join thousands of students who have launched their careers through BucketStudy courses and internships.</p>
  <button className="journey-btn">Join Now</button>
</div>

      </div>
    
    {/*------------ Importing fonts from GoogleFonts ------------  */}
      <style>        
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      </div>   
    )
}
export default Home 