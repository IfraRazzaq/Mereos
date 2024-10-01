import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MereosLogo from './asset/MereosLogo.png';
import './App.css';

function Header() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
    setShowSignupDropdown(false);
  };

  const toggleSignupDropdown = () => {
    setShowSignupDropdown(!showSignupDropdown);
    setShowLoginDropdown(false);
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={MereosLogo} alt="Logo" className="logo" />
        </div>
        <h1 className="heading">Smart Proctor</h1>
        <div className="nav-buttons">
          <div className="dropdown">
            <button onClick={toggleLoginDropdown} className="btn btn-login">Login</button>
            {showLoginDropdown && (
              <div className="dropdown-menu">
                <Link to="/Login">Admin</Link>
                <Link to="/studentLogin">Student</Link>
                <Link to="/instructorLogin">Instructor</Link>
              </div>
            )}
            <button onClick={toggleSignupDropdown} className="btn btn-signup">Sign Up</button>
            {showSignupDropdown && (
              <div className="dropdown-menu">
                <Link to="/Login">Admin</Link>
                <Link to="/studentLogin">Student</Link>
                <Link to="/signup">Instructor</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
