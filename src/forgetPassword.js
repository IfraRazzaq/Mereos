import React from 'react';
import './ForgotPassword.css';
import forgot from './asset/forgot.png';
import { FaGoogle } from 'react-icons/fa';
import Header from './header';

const ForgotPassword = () => {
  return (
    <div className="App">
        <Header />
      <div className="main-content">
        <div className="left-section">
          <h2>Forgot Password</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <button className="next-btn">Next</button>
          <button className="google-login">
            <FaGoogle className="social-icon" /> Continue with Google
          </button>
          <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
        </div>

        <div className="right-section">
        <img src={forgot} alt="landingImg" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
