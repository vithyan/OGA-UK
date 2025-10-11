import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="section-label">
            <span className="label-icon">💬</span>
            LET'S CONNECT
          </div>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Whether you have a question, suggestion, or just want to say hello, reach out to us anytime
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-description">
                  Have questions? We're here to help. Connect with us through any of these channels.
                </p>
              </div>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📧</span>
                  </div>
                  <div className="info-details">
                    <h4 className="info-label">Email Us</h4>
                    <a href="mailto:info@oga-uk.org" className="info-link">info@oga-uk.org</a>
                    <p className="info-subtext">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📞</span>
                  </div>
                  <div className="info-details">
                    <h4 className="info-label">Call Us</h4>
                    <a href="tel:+442012345678" className="info-link">+44 20 1234 5678</a>
                    <p className="info-subtext">Mon-Fri, 9am-5pm GMT</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📍</span>
                  </div>
                  <div className="info-details">
                    <h4 className="info-label">Visit Us</h4>
                    <p className="info-address">
                      123 Alumni Avenue<br />
                      London, United Kingdom<br />
                      SW1A 1AA
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">⏰</span>
                  </div>
                  <div className="info-details">
                    <h4 className="info-label">Office Hours</h4>
                    <p className="info-address">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Our Journey</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" title="Facebook">
                    <span>📘</span>
                  </a>
                  <a href="#" className="social-icon" title="Twitter">
                    <span>🐦</span>
                  </a>
                  <a href="#" className="social-icon" title="Instagram">
                    <span>📷</span>
                  </a>
                  <a href="#" className="social-icon" title="LinkedIn">
                    <span>💼</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-card">
                <div className="form-header">
                  <h3 className="form-title">Send Us a Message</h3>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      name="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-input"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-icon">📤</span>
                  </button>

                  <p className="form-footer-text">
                    <span className="secure-icon">🔒</span>
                    Your information is secure and will never be shared
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Quick answers to common questions. Don't see what you're looking for? Contact us!
            </p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-card">
              <div className="faq-icon">❓</div>
              <h4 className="faq-question">How do I become a member?</h4>
              <p className="faq-answer">
                Simply fill out our membership form on the website or contact us directly. All alumni are welcome to join our growing community!
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">✉️</div>
              <h4 className="faq-question">How can I update my contact information?</h4>
              <p className="faq-answer">
                You can update your details by logging into your account or sending us an email with your updated information.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">💰</div>
              <h4 className="faq-question">Are there membership fees?</h4>
              <p className="faq-answer">
                We have various membership levels. Basic membership is free, with optional premium tiers that offer additional benefits and exclusive access.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">🤝</div>
              <h4 className="faq-question">How can I volunteer or get involved?</h4>
              <p className="faq-answer">
                We welcome volunteers! Contact us to learn about current opportunities, or visit our Events page to see upcoming volunteer activities.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-icon">🎓</div>
              <h4 className="faq-question">Can I attend events if I'm not a member?</h4>
              <p className="faq-answer">
                Most of our events are open to all alumni. However, members receive priority registration and discounted rates for premium events.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-icon">📸</div>
              <h4 className="faq-question">How do I submit photos to the gallery?</h4>
              <p className="faq-answer">
                Visit our Gallery page and click "Submit Your Photos" or send them directly to our email. We love featuring memories from our community!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3 className="map-title">Find Us on the Map</h3>
              <p className="map-text">Interactive map integration coming soon</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-button">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
