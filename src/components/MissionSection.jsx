import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <>
      {/* Mission Section */}
      <section className="mission">
        <div className="mission-container">
          <div className="mission-icon">
            <div className="icon-placeholder">🎯</div>
          </div>
          <div className="mission-content">
            <span className="mission-label">Mission</span>
            <h2 className="mission-title">Empowering Stanford alumni worldwide</h2>
            <p className="mission-description">
              We connect, support, and inspire Stanford graduates to make a difference. Our 
              community transcends boundaries, driving innovation and positive change.
            </p>
            <div className="mission-links">
              <a href="#about" className="mission-link">About us</a>
              <a href="#explore" className="mission-link">
                Explore
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefits-container">
          <div className="benefits-header">
            <span className="section-label">Benefits</span>
            <h2 className="benefits-title">Your Stanford advantage</h2>
            <p className="benefits-subtitle">
              Unlock exclusive opportunities designed for Stanford alumni
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-image">
                <div className="benefit-placeholder">💼</div>
              </div>
              <div className="benefit-content">
                <span className="benefit-category">Career</span>
                <h3 className="benefit-title">Professional development and networking</h3>
                <p className="benefit-description">
                  Access job boards, mentorship programs, and industry insights
                </p>
                <a href="#explore" className="benefit-link">
                  Explore
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-image">
                <div className="benefit-placeholder">📚</div>
              </div>
              <div className="benefit-content">
                <span className="benefit-category">Resources</span>
                <h3 className="benefit-title">Knowledge and learning</h3>
                <p className="benefit-description">
                  Unlimited access to research papers, webinars, and online courses
                </p>
                <a href="#access" className="benefit-link">
                  Access
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-image">
                <div className="benefit-placeholder">🌐</div>
              </div>
              <div className="benefit-content">
                <span className="benefit-category">Community</span>
                <h3 className="benefit-title">Global connections</h3>
                <p className="benefit-description">
                  Engage with alumni chapters worldwide and build lasting relationships
                </p>
                <a href="#connect" className="benefit-link">
                  Connect
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;