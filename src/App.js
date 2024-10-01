import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import instructorLogin from './instructorLogin';
import studentLogin from './studentLogin';
import Signup from './signup';
import Main from './main';
import ForgotPassword from './forgetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/studentLogin" element={<studentLogin />} />
        <Route path="/instructorLogin" element={<instructorLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgetPassword' element={<ForgotPassword />} />
        
      </Routes>
    </Router>
  );
}

export default App;
