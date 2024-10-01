import React, { useState } from 'react';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import './App.css';
import adminLogin from './asset/adminLogin.png';
import Header from './header';

function Login() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    // Replace with your backend login logic
    // Check if credentials are valid
    if (isValidCredentials(email, password)) {
      setIsLoggedIn(true);
    } else {
      // Handle login failure (e.g., display an error message)
      console.error('Invalid credentials');
    }
  };

  // Placeholder for your backend validation logic
  const isValidCredentials = (email, password) => {
    // Replace this with your actual validation logic
    // For example, you might check if the email and password match predefined values
    return email === 'valid@email.com' && password === 'validpassword';
  };

  return (
      <div className="App">
        <Header />
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <p>Admin</p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <a href="/forgetPassword">Forgot Password?</a>

          <button type="submit">Login</button>

          <button className="google-login">
            <FaGoogle className="social-icon" /> Continue with Google
          </button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <p>Login as ? <a href="/signup">Instructor/Student</a></p>
        </div>
      </div>
      <div className="login-image">
        <img src={adminLogin} alt="Login Illustration" />
      </div>
    </div>
  </div>
);
}

export default Login;