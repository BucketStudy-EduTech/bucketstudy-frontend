import React from "react";
import "./Footer.css";
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';


function Footer() {
  return (
    <footer className="footer">
      <p> &copy; 2025 BucketStudy. All rights reserved.</p>
      <a href="https://www.linkedin.com/company/bucketstudy">
      <img src={linkedin}/>
      </a>
      <a href="https://github.com/rohann-bhoye">
      <img src={github}/>
      </a>
      <a href="https://www.instagram.com/bucketstudy_">
      <img src={insta}/>
      </a>
    </footer>
  );
}

export default Footer;