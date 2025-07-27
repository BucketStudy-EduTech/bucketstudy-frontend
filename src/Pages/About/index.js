import './index.css';

//--------------------  ABOUT COMPONENT ----------------------
function About(){
    return(
        <div className='about-container'>
           <div className="about-section">
  <div className="about-header">
    <h1>About BucketStudy</h1>
    <p>We're on a mission to bridge the gap between academic learning and industry requirements through practical, hands-on internships.</p>
  </div>

  <div className="mission-section">
    <h2>Our Mission</h2>
    <p>
      At BucketStudy, we believe that practical experience is the key to career success. Our mission is to provide students with real-world projects and challenges that build their skills and confidence.
    </p>
    <p>
      We're committed to creating a platform where learning happens through doing, where feedback is immediate and constructive, and where students can showcase their achievements to potential employers.
    </p>
  </div>
</div>
<div className="founder-section">
  <h2>Meet the Founder</h2>
  <div className="founder-card">
    <img
      src="https://res.cloudinary.com/dhqfjwhhe/image/upload/v1752927243/profile_dwuo5i.jpg"
      alt="Founder"
      className="founder-image"
    />
    <h3>Rohan Bhoye</h3>
    <p className="founder-role">Founder & CEO</p>
    <p className="founder-description">
      Passionate about leveraging technology to empower students and enhance learning experiences. I founded BucketStudy to provide accessible and interactive learning opportunities for students globally.
    </p>
  </div>
</div>

<div className="our-story-section">
  <h2>Our Story</h2>
  <p>
    BucketStudy was born out of a simple observation: too many graduates were struggling to find jobs despite having degrees, while employers were struggling to find candidates with practical skills.
  </p>
  <p>
    Founded in March 2025 in Nashik, Maharashtra, we began with a small batch of interns focused on real-world web development projects. The impact was immediate — interns gained hands-on experience that made them more competitive in the job market.
  </p>
</div>

  
    {/*------------ Importing fonts from GoogleFonts ------------  */}
      <style>        
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
        </div>
        
    )
}
export default About