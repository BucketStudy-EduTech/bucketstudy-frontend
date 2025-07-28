import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="pink">Bucket</span><span className="purple">Study</span>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "rotate1" : ""}`}></div>
        <div className={`bar ${menuOpen ? "hide" : ""}`}></div>
        <div className={`bar ${menuOpen ? "rotate2" : ""}`}></div>
      </div>


      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={toggleMenu}>Home</li>
        <li onClick={toggleMenu}>About Us</li>
        <li onClick={toggleMenu}>Internship</li>
        <li onClick={toggleMenu}>Challenge</li>
        <li onClick={toggleMenu}>Career</li>
        <li onClick={toggleMenu}>Contact Us</li>
      </ul>


      <div className={`auth-buttons ${menuOpen ? "active" : ""}`}>
        <button className="login-btn" onClick={toggleMenu}>Login</button>
        <button className="signup-btn" onClick={toggleMenu}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;