import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay connected with Stanford</h2>
            <p className="newsletter-description">
              Join our community and receive the latest updates, opportunities, 
              and insights directly in your inbox
            </p>
            <div className="newsletter-buttons">
              <button className="btn-subscribe">Subscribe</button>
              <button className="btn-learn-newsletter">Learn more</button>
            </div>
          </div>
          <div className="newsletter-image">
            <div className="newsletter-image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Bar */}
      <section className="signup-bar">
        <div className="signup-container">
          <div className="signup-content">
            <span className="signup-label">Stay Informed</span>
            <p className="signup-text">Get the latest Stanford alumni news and opportunities</p>
          </div>
          <div className="signup-form">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="email-input"
            />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
        <p className="privacy-text">
          By subscribing, you agree to our privacy policy
        </p>
      </section>

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-logo">Logo</h3>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Quick links</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#network">Network</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Community</h4>
              <ul className="footer-links">
                <li><a href="#research">Research</a></li>
                <li><a href="#impact">Impact</a></li>
                <li><a href="#global">Global</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#chapters">Chapters</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="#donate">Donate</a></li>
                <li><a href="#volunteer">Volunteer</a></li>
                <li><a href="#mentor">Mentor</a></li>
                <li><a href="#contribute">Contribute</a></li>
                <li><a href="#engage">Engage</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-links">
                <li><a href="#social">Social media</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#terms">Terms of service</a></li>
                <li><a href="#privacy">Privacy policy</a></li>
                <li><a href="#cookies">Cookie settings</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2024 Stanford Alumni Association. All rights reserved.</p>
              <div className="footer-legal-links">
                <a href="#privacy">Privacy policy</a>
                <a href="#terms">Terms of service</a>
                <a href="#cookies">Cookies</a>
              </div>
            </div>
            <div className="footer-social">
              <a href="#facebook" className="social-link">📘</a>
              <a href="#twitter" className="social-link">🐦</a>
              <a href="#linkedin" className="social-link">💼</a>
              <a href="#instagram" className="social-link">📸</a>
              <a href="#youtube" className="social-link">📺</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;