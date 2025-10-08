import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay connected with OGA</h2>
            <p className="newsletter-description">
              Join our sisterhood and receive updates about events,
              achievements, and opportunities to make a difference in our
              community
            </p>
            <div className="newsletter-buttons">
              <button className="btn-subscribe">Join Our Family</button>
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
            <span className="signup-label">Stay Connected</span>
            <span className="signup-text">
              Get the latest OGA news and sisterhood updates
            </span>
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
              <h3 className="footer-logo">OGA</h3>
              <p className="footer-motto">
                "Dare to do right. Dare to be true."
              </p>
              <p className="footer-description">
                Celebrating 40 years of sisterhood, service, and excellence.
                Connecting accomplished women across generations and continents.
              </p>
              <div className="footer-contact">
                <p>info@oga.lk</p>
                <p>+94 11 234 5678</p>
                <p>123 School Lane, Colombo 07, Sri Lanka</p>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">About</h4>
              <ul className="footer-links">
                <li>
                  <a href="#history">Our History</a>
                </li>
                <li>
                  <a href="#leadership">Leadership</a>
                </li>
                <li>
                  <a href="#mission">Mission</a>
                </li>
                <li>
                  <a href="#presidents">Past Presidents</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Community</h4>
              <ul className="footer-links">
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Get Involved</h4>
              <ul className="footer-links">
                <li>
                  <a href="#membership">Membership</a>
                </li>
                <li>
                  <a href="#donate">Donate</a>
                </li>
                <li>
                  <a href="#volunteer">Volunteer</a>
                </li>
                <li>
                  <a href="#sponsor">Sponsor Events</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li>
                  <a href="#terms">Terms of service</a>
                </li>
                <li>
                  <a href="#privacy">Privacy policy</a>
                </li>
                <li>
                  <a href="#cookies">Cookie settings</a>
                </li>
                <li>
                  <a href="#accessibility">Accessibility</a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-anniversary">
              <span className="anniversary-text">Celebrating 40 Years</span>
              <span className="anniversary-years">1984 - 2024</span>
            </div>
            <div className="footer-copyright">
              <p>© 2025 Old Girls' Association. All rights reserved.</p>
              <div className="footer-legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Use</a>
              </div>
              <p className="footer-love">Made with ❤️ for our sisterhood</p>
            </div>
            <div className="footer-social">
              <p className="follow-text">Follow Us:</p>
              <a href="#facebook" className="social-link">
                �
              </a>
              <a href="#twitter" className="social-link">
                �
              </a>
              <a href="#linkedin" className="social-link">
                �
              </a>
              <a href="#instagram" className="social-link">
                �
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
