import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-container">
          <div className="section-label">
            <span className="label-icon">💝</span>
            MAKE A DIFFERENCE
          </div>
          <h1 className="donate-title">Support OGA-UK</h1>
          <p className="donate-subtitle">
            Your generosity empowers our community, preserves our heritage, and creates lasting impact for generations to come
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">£125K+</div>
              <div className="stat-label">Raised This Year</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Donors</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Scholarships Awarded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="donate-container">
          <div className="section-header">
            <h2 className="section-title">Where Your Donation Goes</h2>
            <p className="section-description">
              Every contribution makes a meaningful difference in strengthening our community
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon-wrapper">
                <div className="impact-icon">🎓</div>
              </div>
              <h3 className="impact-title">Education Scholarships</h3>
              <p className="impact-description">
                Support deserving students pursuing their academic dreams with full and partial scholarships
              </p>
              <div className="impact-stat">
                <span className="stat-value">15</span>
                <span className="stat-text">Students Supported</span>
              </div>
            </div>
            <div className="impact-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="impact-icon-wrapper">
                <div className="impact-icon">🤝</div>
              </div>
              <h3 className="impact-title">Community Events</h3>
              <p className="impact-description">
                Fund reunions, networking dinners, cultural celebrations, and professional development workshops
              </p>
              <div className="impact-stat">
                <span className="stat-value">24</span>
                <span className="stat-text">Events This Year</span>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-icon-wrapper">
                <div className="impact-icon">🏛️</div>
              </div>
              <h3 className="impact-title">Heritage Preservation</h3>
              <p className="impact-description">
                Maintain our rich history, traditions, and archives for future generations to cherish
              </p>
              <div className="impact-stat">
                <span className="stat-value">50+</span>
                <span className="stat-text">Years of History</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <div className="donate-container">
          <div className="donation-form-wrapper">
            <div className="form-header">
              <h3 className="form-title">Make Your Contribution</h3>
              <p className="form-subtitle">Choose your donation amount and help us continue our mission</p>
            </div>

            <div className="donation-form-card">
              {/* Preset Amounts */}
              <div className="preset-amounts">
                <label className="form-label">Select Amount (£)</label>
                <div className="amount-buttons">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`amount-btn ${
                        donationAmount === amount ? 'active' : ''
                      }`}
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount('');
                      }}
                    >
                      <span className="amount-currency">£</span>
                      <span className="amount-value">{amount}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="custom-amount">
                <label className="form-label">Or Enter Custom Amount</label>
                <div className="custom-input-wrapper">
                  <span className="currency-symbol">£</span>
                  <input
                    type="number"
                    className="custom-input"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setDonationAmount('');
                    }}
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div className="donation-type">
                <label className="form-label">Donation Frequency</label>
                <div className="type-buttons">
                  <button 
                    className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    <span className="type-icon">🎁</span>
                    <span className="type-text">One-Time</span>
                  </button>
                  <button 
                    className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    <span className="type-icon">🔄</span>
                    <span className="type-text">Monthly</span>
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="personal-info">
                <label className="form-label">Your Information</label>
                <div className="info-grid">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="First Name*"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Last Name*"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="Email Address*"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-textarea"
                    rows="4"
                    placeholder="Share your message or dedication (optional)"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button className="btn-donate-submit">
                <span className="btn-text">
                  Complete Donation of £{customAmount || donationAmount || '0'}
                </span>
                <span className="btn-icon">→</span>
              </button>

              <div className="form-footer">
                <div className="secure-badge">
                  <span className="secure-icon">🔒</span>
                  <span className="secure-text">Secure & Encrypted</span>
                </div>
                <p className="tax-info">
                  All donations are tax-deductible and 100% secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognition-section">
        <div className="donate-container">
          <div className="section-header">
            <h2 className="section-title">Donor Recognition Tiers</h2>
            <p className="section-description">
              Join our distinguished community of supporters and be recognized for your generosity
            </p>
          </div>
          <div className="recognition-grid">
            <div className="recognition-card bronze">
              <div className="tier-badge">
                <span className="badge-icon">🥉</span>
              </div>
              <h4 className="tier-name">Bronze Circle</h4>
              <p className="tier-amount">£25 - £99</p>
              <div className="tier-divider"></div>
              <p className="tier-title">Friend of OGA-UK</p>
              <ul className="tier-benefits">
                <li>✓ Newsletter subscription</li>
                <li>✓ Website recognition</li>
                <li>✓ Event updates</li>
              </ul>
            </div>
            <div className="recognition-card silver">
              <div className="tier-badge">
                <span className="badge-icon">🥈</span>
              </div>
              <h4 className="tier-name">Silver Circle</h4>
              <p className="tier-amount">£100 - £249</p>
              <div className="tier-divider"></div>
              <p className="tier-title">Community Supporter</p>
              <ul className="tier-benefits">
                <li>✓ All Bronze benefits</li>
                <li>✓ Exclusive event invites</li>
                <li>✓ Annual report</li>
              </ul>
            </div>
            <div className="recognition-card gold featured">
              <div className="popular-tag">MOST POPULAR</div>
              <div className="tier-badge">
                <span className="badge-icon">🥇</span>
              </div>
              <h4 className="tier-name">Gold Circle</h4>
              <p className="tier-amount">£250 - £499</p>
              <div className="tier-divider"></div>
              <p className="tier-title">Distinguished Patron</p>
              <ul className="tier-benefits">
                <li>✓ All Silver benefits</li>
                <li>✓ VIP event seating</li>
                <li>✓ Recognition plaque</li>
              </ul>
            </div>
            <div className="recognition-card platinum">
              <div className="tier-badge">
                <span className="badge-icon">💎</span>
              </div>
              <h4 className="tier-name">Platinum Circle</h4>
              <p className="tier-amount">£500+</p>
              <div className="tier-divider"></div>
              <p className="tier-title">Premier Benefactor</p>
              <ul className="tier-benefits">
                <li>✓ All Gold benefits</li>
                <li>✓ Board recognition</li>
                <li>✓ Legacy naming rights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="donor-testimonials">
        <div className="donate-container">
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              Supporting OGA-UK has been one of the most rewarding decisions. Seeing the impact on students' lives and knowing I'm part of preserving our heritage brings me immense joy.
            </p>
            <div className="testimonial-author">
              <div className="author-name">Dr. Anushka Silva</div>
              <div className="author-title">Gold Circle Donor • Class of 1995</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
