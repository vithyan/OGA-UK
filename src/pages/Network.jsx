import React from 'react';
import '../components/HeroSection.css';
import '../components/GatewaySection.css';
import '../components/CollaborativeSection.css';
import '../components/MissionSection.css';

const Network = () => {
  return (
    <div className="page-content">
      {/* Hero Section for Network */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              OGA-UK network spanning the globe
            </h1>
            <p className="hero-description">
              Connect with UK alumni across industries, locations, and interests. 
              Build meaningful professional relationships from The City to Silicon Valley.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Join Network</button>
              <button className="btn-secondary">Explore Connections</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Features */}
      <section className="gateway">
        <div className="gateway-container">
          <div className="gateway-header">
            <span className="section-label">Connect</span>
            <h2 className="gateway-title">Your professional network</h2>
            <p className="gateway-subtitle">
              Leverage the power of UK alumni connections for career growth and collaboration
            </p>
          </div>
          
          <div className="gateway-cards">
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">💼</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Career Opportunities</h3>
                <p className="card-description">
                  Access exclusive job postings in London's Financial District, Tech hubs, and global markets.
                </p>
              </div>
            </div>
            
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">🎯</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Mentorship Programs</h3>
                <p className="card-description">
                  Connect with senior professionals from FTSE 100 companies and successful entrepreneurs.
                </p>
              </div>
            </div>
            
            <div className="gateway-card achievement-card">
              <div className="card-image">
                <div className="card-placeholder">🚀</div>
              </div>
              <div className="card-content">
                <span className="achievement-label">Innovation</span>
                <h3 className="card-title">Startup Ecosystem</h3>
                <p className="card-description">
                  Connect with entrepreneurs and investors in London's thriving startup scene.
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
            <span className="section-number">03</span>
            <span className="section-subtitle">Collaborate</span>
            <h2 className="collaborative-title">
              Unlock the power of UK alumni connections
            </h2>
            <p className="collaborative-description">
              Whether you're looking for career opportunities, seeking mentorship, or wanting to 
              give back to the community, our UK network opens doors to endless possibilities.
            </p>
            <div className="collaborative-buttons">
              <button className="btn-get-involved">Start Networking</button>
              <button className="btn-learn-more">
                Success Stories
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
            <div className="icon-placeholder">🌐</div>
          </div>
          <div className="mission-content">
            <span className="mission-label">Global Reach</span>
            <h2 className="mission-title">Connecting UK alumni worldwide</h2>
            <p className="mission-description">
              Our network spans 150+ countries with over 500,000 UK alumni. From London to Hong Kong, 
              from New York to Sydney, UK connections create opportunities everywhere.
            </p>
            <div className="mission-links">
              <a href="#map" className="mission-link">Global Map</a>
              <a href="#chapters" className="mission-link">
                Local Chapters
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;