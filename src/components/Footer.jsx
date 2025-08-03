import React from 'react';

import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-gray-800 font-poppins border-gray-300 border">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <img src="https://res.cloudinary.com/dhqfjwhhe/image/upload/v1752854930/b_wbwdgn.jpg" alt="" className='w-52'/>
          <p className="mt-3 text-sm text-gray-600">
            Streamlined internship process with auto evaluation and student dashboard.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500 ">
           <a href="https://www.instagram.com/bucketstudy_"> <FaInstagram className="hover:text-purple-500 cursor-pointer " /></a>
            <a href='https://x.com/Rohann_bhoye' ><FaTwitter className="hover:text-purple-500 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/company/bucketstudy"><FaLinkedin className="hover:text-purple-500 cursor-pointer" /></a>
            <a href="https://github.com/rohann-bhoye"><FaGithub className="hover:text-purple-500 cursor-pointer" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/internships" className="hover:underline">Internships</a></li>
            <li><a href="/challenges" className="hover:underline">Challenges</a></li>
            <li><a href="/career" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">LEGAL</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">CONTACT</h4>
          <p className="text-sm text-gray-600">Nashik, Maharashtra, India</p>
          <p className="text-sm text-gray-600 mt-1">contact@bucketstudy.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border border-gray-400/50 py-4 text-center text-sm text-gray-600">
        <p>© 2025 BucketStudy. All rights reserved.</p>
        <p className="mt-1">
          Made with <span className="text-red-500">❤️</span> by BucketStudy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
