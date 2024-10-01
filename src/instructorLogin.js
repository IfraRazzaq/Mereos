import React from 'react';
import './Login.css'; 
import { FaGoogle } from 'react-icons/fa';
import './App.css';

function instructorLogin() {
    return (
        <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <p>Instructor</p>
                    <form>
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" />

                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />

                        <a href="/signup">Forgot Password?</a>

                        <button type="submit">Login</button>

                        <button className="google-login">
                            <FaGoogle className="social-icon" /> Continue with Google
                        </button>
                    </form>
                    <div className="signup-link">
                        <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
                        <p>Login as ? <a href="/signup">Instructor/Student</a></p>
                    </div>
                </div>
                <div className="login-image">
                    <img src="your-image-path.png" alt="Login Illustration" />
                </div>
            </div>
    );
}

export default instructorLogin;