import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import ForgotPassword from "../ForgetPass/Forgetpass";
import { useAuth } from "../../../context/AuthContext"; // Use AuthContext
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirection is handled by the login function in AuthContext
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className={`login-card ${showForgot ? "blurred" : ""}`}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <span
            onClick={() => setShowForgot(true)}
            style={{ cursor: "pointer" }}
          >
            Forgot Password?
          </span>{" "}
          | <Link to="/signup">Register</Link>
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
            <button
              className="close-modal"
              onClick={() => setShowForgot(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;