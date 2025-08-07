import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropwn from "../StudentDashboard/ProfileDropwn";
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
     { label: "internships", path: "/internships" },
    { label: "Challenges", path: "/challenges" },
    {label: "Careers", path: "/career" },
    { label: "Contact Us", path: "/contact" },
    { label: "Login", path: "/login" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-amber-50 shadow-md font-poppins p-3">
      <header className="flex items-center justify-between p-4 md:px-8 lg:px-12">
        <div className="flex items-center">
          <img
            src='https://res.cloudinary.com/dhqfjwhhe/image/upload/v1752854930/b_wbwdgn.jpg'
            alt='logo'
            className='lg:h-10 w-auto h-6 md:h-8'
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-12 lg:gap-16">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Profile */}
        <div className="hidden md:block">
          <ProfileDropwn />
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center md:hidden">
          <ProfileDropwn />
          <button onClick={toggleMenu} className="text-2xl text-gray-800 focus:outline-none ml-4">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center bg-amber-50 gap-4 py-4 shadow-md">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="nav-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
