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
        <div className="container">
          <h1 className="animate-fade-down">Get In Touch</h1>
          <p className="lead animate-fade-up">
            We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="contact-content">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-md-5">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p className="mb-4">
                  Have questions? We're here to help. Connect with us through
                  any of these channels.
                </p>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@oga-uk.org">info@oga-uk.org</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+442012345678">+44 20 1234 5678</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>
                      123 Alumni Avenue
                      <br />
                      London, UK
                      <br />
                      SW1A 1AA
                    </p>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      📘
                    </a>
                    <a href="#" className="social-icon">
                      🐦
                    </a>
                    <a href="#" className="social-icon">
                      📷
                    </a>
                    <a href="#" className="social-icon">
                      💼
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="faq-item">
                <h4>How do I become a member?</h4>
                <p>
                  Simply fill out our membership form on the website or contact
                  us directly. All alumni are welcome to join!
                </p>
              </div>
              <div className="faq-item">
                <h4>How can I update my contact information?</h4>
                <p>
                  You can update your details by logging into your account or
                  sending us an email with your updated information.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-item">
                <h4>Are there membership fees?</h4>
                <p>
                  We have various membership levels. Basic membership is free,
                  with optional premium tiers that offer additional benefits.
                </p>
              </div>
              <div className="faq-item">
                <h4>How can I volunteer or get involved?</h4>
                <p>
                  We welcome volunteers! Contact us to learn about current
                  opportunities or visit our Volunteer page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-content">
            <span className="map-icon">🗺️</span>
            <p>Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
