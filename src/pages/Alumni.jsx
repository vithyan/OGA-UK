import React from 'react';
import '../components/HeroSection.css';
import '../components/GatewaySection.css';
import '../components/CollaborativeSection.css';
import '../components/MissionSection.css';

const Alumni = () => {
  return (
    <div className="page-content">
      {/* Hero Section for Alumni */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              OGA-UK alumni network spanning the globe
            </h1>
            <p className="hero-description">
              Connect with thousands of UK graduates worldwide and build meaningful professional 
              relationships across industries, from London to Singapore, New York to Dubai.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Join Network</button>
              <button className="btn-secondary">Browse Profiles</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Directory Section */}
      <section className="gateway">
        <div className="gateway-container">
          <div className="gateway-header">
            <span className="section-label">Directory</span>
            <h2 className="gateway-title">Connect with OGA-UK Alumni</h2>
            <p className="gateway-subtitle">
              Find and connect with UK alumni across industries and global locations
            </p>
          </div>
          
          <div className="gateway-cards">
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">🏢</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">By Industry</h3>
                <p className="card-description">
                  Browse alumni in Finance, Tech, Healthcare, Law, Engineering, and more sectors.
                </p>
              </div>
            </div>
            
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">🌍</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">By Location</h3>
                <p className="card-description">
                  Connect with alumni in London, Manchester, Edinburgh, or international hubs.
                </p>
              </div>
            </div>
            
            <div className="gateway-card achievement-card">
              <div className="card-image">
                <div className="card-placeholder">🎓</div>
              </div>
              <div className="card-content">
                <span className="achievement-label">Universities</span>
                <h3 className="card-title">By Institution</h3>
                <p className="card-description">
                  Find alumni from Oxford, Cambridge, Imperial, UCL, LSE, and other top UK universities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Section */}
      <section className="collaborative">
        <div className="collaborative-container">
          <div className="collaborative-content">
            <span className="section-number">01</span>
            <span className="section-subtitle">Connect</span>
            <h2 className="collaborative-title">
              Build lasting professional relationships
            </h2>
            <p className="collaborative-description">
              Join mentorship programs, industry groups, and networking events designed to 
              foster meaningful connections within the UK alumni community worldwide.
            </p>
            <div className="collaborative-buttons">
              <button className="btn-get-involved">Get Connected</button>
              <button className="btn-learn-more">
                Learn more
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
          <div className="collaborative-image">
            <div className="collaborative-image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-container">
          <div className="mission-icon">
            <div className="icon-placeholder">👥</div>
          </div>
          <div className="mission-content">
            <span className="mission-label">Community</span>
            <h2 className="mission-title">Building bridges across generations</h2>
            <p className="mission-description">
              Our alumni network spans decades of UK graduates, creating mentorship 
              opportunities and knowledge transfer from Russell Group universities to global careers.
            </p>
            <div className="mission-links">
              <a href="#mentorship" className="mission-link">Mentorship Program</a>
              <a href="#connect" className="mission-link">
                Connect Now
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;