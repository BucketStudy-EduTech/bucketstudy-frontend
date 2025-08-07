import React from 'react';
import './form.css';

<div className="contact-form-container">
        <div className="contact-card">
          <div className="contact-image">
            <h2 className="contact-heading">Contact-Us</h2>
          </div>

          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>