import React, { useState } from 'react';
import './forgetpass.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //You can integrate your backend or Firebase here.
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password?</h2>
        <p>Enter your registered email address and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <a href="/Login" className="back-link">← Back to Login</a>
      </div>
    </div>
  );
};

export default ForgotPassword;

