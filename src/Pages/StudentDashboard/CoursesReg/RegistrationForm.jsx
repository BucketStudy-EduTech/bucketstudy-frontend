import React, { useState } from 'react';
import './RegistrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    mode: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
    console.log("Form Data:", formData);
    // You can clear the form if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      mode: '',
      message: '',
    });
  };

  return (
    <div className="registration-form-container">
      <h2 className="form-title">Student Course Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
        
        <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>

        <select name="mode" value={formData.mode} onChange={handleChange} required>
          <option value="">Select Mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        <textarea name="message" placeholder="Message (optional)" value={formData.message} onChange={handleChange}></textarea>

        <button type="submit" className='w-4 p-5 bg-amber-500-'>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;