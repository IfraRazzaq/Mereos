import React from 'react';
import './signup.css';
import './App.css'; 

function Signup() {
    return (
        <><header className="App-header">
            <nav className="navbar">
                <div className="logo-container">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
                </div>
                <h1 className="heading">Smart Proctor</h1>
                <div className="nav-buttons">
                    <button className="btn btn-login">Login</button>
                    <button className="btn btn-signup">Sign Up</button>
                </div>
            </nav>
        </header><div className="container">
                <h2>Create Instructor Account</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="form-group full-width">
                        <input type="text" placeholder="Institute Name" />
                    </div>
                    <div className="form-group full-width">
                        <input type="email" placeholder="Email ID" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Enter Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <button className="btn-submit" type="submit">Create Account</button>
                </form>
            </div></>
    );
}

export default Signup;
