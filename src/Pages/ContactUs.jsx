import React from 'react';
import { GrLocation } from "react-icons/gr";
import { AiTwotoneMail } from "react-icons/ai";
import FAQ from '../components/FAQ'

const ContactUs = () => {
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-400 to-blue-400 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg italic">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Whether you have a question about our internships, need technical support,
            or want to partner with us, our team is ready to help.
          </p>

          {/* Email Info */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-r bg-amber-200 p-3 rounded-full hover:bg-amber-400">
                <AiTwotoneMail className="w-6 h-6 text-zinc-400" />
            </div>
            <div className='text-sm'>
              <h3 className="font-semibold text-sm">Email</h3>
              <p>contact@bucketstudy.com</p>
              <p>support@bucketstudy.com</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-start gap-4 ">
            <div className="bg-gradient-to-r  bg-amber-200 p-3 rounded-full hover:bg-amber-300 ">
                <GrLocation className="w-6 h-6 text-zinc-400" />
            </div>
            <div className='text-sm'>
              <h3 className="font-semibold">Location</h3>
              <p>Nashik, Maharashtra, India</p>
              <p>422004</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-2xl shadow-gray-500 rounded-xl p-8 ">
          <h2 className="text-2xl font-semibold mb-1.5">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm">Your Name</label>
              <input
                type="text"
                className=" block w-full border-2 border-gray-300 rounded-md p-2"
                placeholder="Dishank M"
              />
            </div>
            <div>
              <label 
              
              className="block text-gray-700 text-sm">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 "
                placeholder="dishank@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Subject</label>
              <input
                type="text"
                className=" block w-full border-2 border-gray-300 rounded-md p-2 "
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Message</label>
              <textarea
                className="block w-full border-2 border-gray-300 rounded-md p-2 h-32 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-400 to-blue-500 text-white font-semibold px-6 py-2 rounded hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <FAQ/>
    </div>
    
  );
};

export default ContactUs;
