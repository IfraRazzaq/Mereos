import React from 'react';
import './App.css';
import img1 from './asset/img1.png';
import img2 from './asset/img2.png';
import img3 from './asset/img3.png';
import img4 from './asset/img4.png';
import img5 from './asset/img5.png';
import img6 from './asset/img6.png';
import landingImg from './asset/landingImg.png';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaMicrosoft } from 'react-icons/fa';
import Header from './header';
import MereosLogo from './asset/MereosLogo.png';

function Main() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="content-container">
          <div className="left-div">
            <h1 className="headline">Recruitment enters into a new era</h1>
            <p className="description">
              Smart Secure Exam simplifies the corporate recruitment process. Schedule up
              to 20,000 simultaneously monitored sessions and offer a unique experience to
              your candidates.
            </p>
            <button className="button">Start your journey</button>
          </div>
          <div className="right-div">
            <img src={landingImg} alt="landingImg" />
          </div>
        </div>

        <svg width="100%" height="1">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="gray" strokeWidth="1" />
        </svg>

        <h1>Smart Secure Exam Combines security and hyper-flexibility</h1>
        <div className="description2">
          We offer you a suite of secure features that integrate with your LMS available on our platform.
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>

        <div className="section1">
          <div className="left-s1">
            <img src={img1} alt="Smart Secure Exam" className="img1" />
          </div>
          <div className="right-s1">
            <h1>Smart Secure Exam</h1>
            <p>
            Leverage cutting-edge security features, including biometric verification and AI-driven monitoring, to provide a seamless and secure testing experience that safeguards academic integrity while ensuring ease of use for both administrators and test-takers.
            </p>
          </div>
        </div>

        <div className="section2">
          <div className="left-s2">
            <h1>Voice Recognition</h1>
            <p>Implement advanced voice recognition technology to verify the identity of test-takers, ensuring that only authorized individuals can access and complete the assessment.</p>
          </div>
          <div className="right-s2">
            <img src={img2} alt="Voice Recognition" className="img1" />
          </div>
        </div>

        <div className="section3">
          <div className="left-s3">
            <img src={img3} alt="Detection of Suspicious Activity" className="img1" />
          </div>
          <div className="right-s3">
            <h1>Detection of Suspicious Activity</h1>
            <p>Utilize AI algorithms to monitor and analyze exam conditions in real-time, identifying and flagging any suspicious behavior or potential cheating attempts to maintain the integrity of the examination process.</p>
          </div>
        </div>

        <div className="section4">
          <div className="left-s4">
            <h1>Save Time</h1>
            <p>Streamline the examination process with automated pre-checks and real-time monitoring, reducing administrative overhead and allowing students to focus on their assessments without unnecessary delays.</p>
          </div>
          <div className="right-s4">
            <img src={img4} alt="Save Time" className="img1" />
          </div>
        </div>

        <div className="section5">
          <div className="left-s5">
            <img src={img5} alt="Instructor Journey" className="img1" />
          </div>
          <div className="right-s5">
            <h1 className="headline">Become an Instructor</h1>
            <p className="description5">
            Instructors from around the world can take exam from students on Smart Secure Exam. We provide the best environment for taking secure tests.
            </p>
            <button className="button">Start Your Instructor Journey</button>
          </div>
        </div>

        <div className="content-container">
          <div className="left-div">
            <h1 className="headline">Become a student</h1>
            <p className="description5">Students from around the world can give exams assigned by instructors.</p>
            <button className="button">Start Your Student Journey</button>
          </div>
          <div className="right-div">
            <img src={img6} alt="Student Journey" className="img1" />
          </div>
        </div>

        <div className="contact-us-container">
          <h2 className="contact-us-title">Contact Us</h2>
          <p className="contact-us-description">Feedback from customers who have placed their trust in us.</p>
          <div className="contact-us-form">
            <div className="email-container">
              <span className="email-icon">✉️</span>
              <input type="text" placeholder="Email" className="email-input" />
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
              <div className="footer-section about">
                <div className='footer-logo'>
                <img src={MereosLogo} alt="Logo" className="logo" />
                <h2>Smart Proctor</h2>
                </div>
                <p>
                  Empowering learners through accessible and engaging online education.
                  Smart Secure Exam is a leading online learning platform dedicated to
                  providing high-quality, flexible, and affordable educational experiences.
                </p>
              </div>
              <div className="footer-section links">
                <h3>Get Help</h3>
                <ul>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#articles">Latest Articles</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="footer-section programs">
                <h3>Programs</h3>
                <ul>
                  <li><a href="#art">Art & Design</a></li>
                  <li><a href="#business">Business</a></li>
                  <li><a href="#it">IT & Software</a></li>
                  <li><a href="#languages">Languages</a></li>
                  <li><a href="#programming">Programming</a></li>
                </ul>
              </div>
              <div className="footer-section contact">
                <h3>Contact Us</h3>
                <p>Address: 123 Main Street, Anytown, CA 12345</p>
                <p>Tel: +(123) 456-7890</p>
                <p>Email: smartsecureexam@gmail.com</p>
                <div className="social-icons">
                  <FaFacebook className="social-icon" />
                  <FaGithub className="social-icon" />
                  <FaGoogle className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaMicrosoft className="social-icon" />
                </div>
              </div>
            </footer>
    </div>
  );
}

export default Main;
