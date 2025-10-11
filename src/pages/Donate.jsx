import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="container">
          <h1 className="animate-fade-down">Support OGA-UK</h1>
          <p className="lead animate-fade-up">
            Your generosity helps us build a stronger community
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2 className="text-center mb-5">Your Impact Matters</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="impact-card">
                <div className="impact-icon">🎓</div>
                <h4>Scholarships</h4>
                <p>Support current students pursuing their dreams</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="impact-card">
                <div className="impact-icon">🤝</div>
                <h4>Community Events</h4>
                <p>Fund reunions, networking events, and gatherings</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="impact-card">
                <div className="impact-icon">🏛️</div>
                <h4>Heritage Preservation</h4>
                <p>Maintain our history and traditions for future generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="donation-form-card">
                <h3 className="text-center mb-4">Make a Donation</h3>

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
                        £{amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="custom-amount mt-4">
                  <label className="form-label">Or Enter Custom Amount</label>
                  <div className="input-group">
                    <span className="input-group-text">£</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount('');
                      }}
                    />
                  </div>
                </div>

                {/* Donation Type */}
                <div className="donation-type mt-4">
                  <label className="form-label">Donation Type</label>
                  <div className="d-flex gap-3">
                    <button className="type-btn active">One-Time</button>
                    <button className="type-btn">Monthly</button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="personal-info mt-4">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Message (Optional)
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Share why you're giving..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="btn-donate-submit">
                  Donate £{customAmount || donationAmount || '0'}
                </button>

                <p className="text-center mt-3 text-muted small">
                  Your donation is secure and tax-deductible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognition-section">
        <div className="container">
          <h2 className="text-center mb-5">Recognition Levels</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="recognition-card">
                <h4>Bronze</h4>
                <p className="amount">£25 - £99</p>
                <p className="description">Friend of OGA</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="recognition-card">
                <h4>Silver</h4>
                <p className="amount">£100 - £249</p>
                <p className="description">Supporter</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="recognition-card">
                <h4>Gold</h4>
                <p className="amount">£250 - £499</p>
                <p className="description">Patron</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="recognition-card platinum">
                <h4>Platinum</h4>
                <p className="amount">£500+</p>
                <p className="description">Benefactor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
