import React from "react";
import "./MissionSection.css";

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
            <span className="mission-label">Our Mission</span>
            <h2 className="mission-title">
              Empowering Tamil women through sisterhood
            </h2>
            <p className="mission-description">
              We connect, support, and inspire our alumni to uphold our motto
              "Dare to do right. Dare to be true." Our sisterhood spans
              generations, fostering excellence in service and professional
              achievement.
            </p>
            <div className="mission-links">
              <a href="#about" className="mission-link">
                Our History
              </a>
              <a href="#explore" className="mission-link">
                Join Us
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
            <span className="section-label">Member Benefits</span>
            <h2 className="benefits-title">Your OGA sisterhood advantage</h2>
            <p className="benefits-subtitle">
              Exclusive opportunities and lifelong connections for our alumni
              community
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-image">
                <div className="benefit-placeholder">💼</div>
              </div>
              <div className="benefit-content">
                <span className="benefit-category">Professional Growth</span>
                <h3 className="benefit-title">
                  Career networking and mentorship
                </h3>
                <p className="benefit-description">
                  Connect with successful alumni across industries for
                  mentorship, job opportunities, and professional guidance.
                </p>
                <a href="#career" className="benefit-link">
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
                <span className="benefit-category">Education</span>
                <h3 className="benefit-title">
                  Scholarships and learning resources
                </h3>
                <p className="benefit-description">
                  Access educational scholarships, professional development
                  courses, and exclusive learning opportunities.
                </p>
                <a href="#education" className="benefit-link">
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
                <span className="benefit-category">Community Service</span>
                <h3 className="benefit-title">Global sisterhood network</h3>
                <p className="benefit-description">
                  Join community service projects and connect with alumni
                  worldwide who share our values of service and excellence.
                </p>
                <a href="#community" className="benefit-link">
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
