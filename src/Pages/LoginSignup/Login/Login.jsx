
import React, { useState } from 'react';
import './Login.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import ForgotPassword from '../ForgetPass/Forgetpass'; 

const Login = () => {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    
    <div className="login-page">
      <div className={`login-card ${showForgot ? 'blurred' : ''}`}> 
        <div className="login-tabs">
          <button
            className={role === 'student' ? 'active' : ''}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button
            className={role === 'admin' ? 'active' : ''}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
        </div>

        <form>
          <input type="email" placeholder="Email" required />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-links">
          <span onClick={() => setShowForgot(true)} style={{ cursor: 'pointer' }}>Forgot Password?</span> | <a href="/Signup">Register</a>
        </div>

        <div className="social-login">
          <button className="google-login">
            <FaGoogle size={18} /> Login with Google
          </button>
          <button className="github-login">
            <FaGithub size={18} /> Login with GitHub
          </button>
        </div>
      </div>

      {showForgot && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ForgotPassword />
            <button className="close-modal" onClick={() => setShowForgot(false)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

