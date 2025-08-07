import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropwn from "../StudentDashboard/ProfileDropwn";
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Internships", path: "/internships" },
    { label: "Challenges", path: "/challenges" },
    { label: "Careers", path: "/career" },
    { label: "Contact Us", path: "/contact" },

  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <header className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dhqfjwhhe/image/upload/v1752854930/b_wbwdgn.jpg"
            alt="logo"
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 lg:gap-12">
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

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <ProfileDropwn />
          <button onClick={toggleMenu} className="text-2xl text-gray-800 ml-4">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center bg-amber-50 gap-3 shadow-inner">
          {links.map((link, index) => (
            <li key={index} className="w-full text-center">
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