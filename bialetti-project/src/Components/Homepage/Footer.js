import React from 'react';
import './Footer.css';
import { FaArrowUp, FaTwitter, FaFacebook, FaInstagram, FaStore, FaPen } from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-left">
        {/* <div className="logo-section">
          <img src="https://toppng.com/uploads/preview/logo-bialetti-11550728633ngufgly2ed.png" alt="Logo" className="logo" />
          <h4>THE ESSENCE OF <br/> ITALIAN COFFEE CULTURE </h4>
        </div> */}
        <div className="newsletter-section">
          <p>Signup for our newsletter</p>
          <h3>YOU WILL RECEIVE AN IMMEDIATE 10% <br/> DISCOUNT ON YOUR FIRST ORDER</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBMIT</button>
          </div>
        </div>
        <div className="social-media-section">
          {/* <h4>Follow Us</h4> */}
          <div className="social-icons">
            <a href="https://www.facebook.com/Bialetti/"><FaFacebook /><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com/Bialetti/"><FaTwitter /><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/bialetti/"><FaInstagram /><i className="fab fa-instagram"></i></a>
          </div>
          <div className='about_us'>
            <a href='https://www.bialetti.com/it_en/chi-siamo' >About Us</a>
            <a href='https://www.bialetti.com/it_en/la-storia' >Our History</a>
            <a href='https://www.bialetti.com/it_en/bialetti-careers' >Careers</a>
            <a href='#' >Investor Relations</a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <div className="footer-column">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Selling Conditions</a></li>
              <li><a href="#">Regulations</a></li>
              <li><a href="#">B2B</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Payment Methods</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>ADDRESS</h4>
            <ul>
              <li>Registered Office</li>
              <li>Via Fogliano, 1</li>
              <li>25030 Coccaglio BS</li>
              <li>Italia</li>
              <li>Email: bialetti@gmail.com</li>
            </ul>
          </div>
          
        </div>
        <div className="footer-buttons">
          <button> <FaPen /> CONTACT US</button>
          <button> <FaStore /> SERVICE CENTER</button>
          <button className='top_btn' onClick={scrollToTop}><FaArrowUp />UP</button>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()}  Bialetti Industrie S.p.A. / Cap. Soc. i.v. Euro 1.041.628,00 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



