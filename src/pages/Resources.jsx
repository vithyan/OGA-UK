import React from 'react';
import '../components/HeroSection.css';
import '../components/GatewaySection.css';
import '../components/CollaborativeSection.css';
import '../components/MissionSection.css';

const Resources = () => {
  return (
    <div className="page-content">
      {/* Hero Section for Resources */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              OGA-UK resources empowering lifelong learning
            </h1>
            <p className="hero-description">
              Access exclusive resources, research, and educational content from leading UK institutions 
              designed to support your continued growth and professional development.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Resources</button>
              <button className="btn-secondary">Research Library</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="gateway">
        <div className="gateway-container">
          <div className="gateway-header">
            <span className="section-label">Library</span>
            <h2 className="gateway-title">Knowledge at your fingertips</h2>
            <p className="gateway-subtitle">
              Discover curated resources spanning research, career development, and industry insights
            </p>
          </div>
          
          <div className="gateway-cards">
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">📚</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Research Papers</h3>
                <p className="card-description">
                  Access cutting-edge research from Oxford, Cambridge, Imperial, and other Russell Group universities.
                </p>
              </div>
            </div>
            
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">🎓</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Online Courses</h3>
                <p className="card-description">
                  Enhance your skills with exclusive courses from top UK universities and institutions.
                </p>
              </div>
            </div>
            
            <div className="gateway-card achievement-card">
              <div className="card-image">
                <div className="card-placeholder">💡</div>
              </div>
              <div className="card-content">
                <span className="achievement-label">Premium</span>
                <h3 className="card-title">Industry Reports</h3>
                <p className="card-description">
                  Get exclusive insights and analysis from UK's leading research centers and think tanks.
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
            <span className="section-number">04</span>
            <span className="section-subtitle">Learn</span>
            <h2 className="collaborative-title">
              Continuous learning for lasting impact
            </h2>
            <p className="collaborative-description">
              Stay at the forefront of your field with access to UK's world-class research, 
              expert insights, and cutting-edge educational resources from leading institutions.
            </p>
            <div className="collaborative-buttons">
              <button className="btn-get-involved">Start Learning</button>
              <button className="btn-learn-more">
                Browse Library
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
            <div className="icon-placeholder">📖</div>
          </div>
          <div className="mission-content">
            <span className="mission-label">Knowledge</span>
            <h2 className="mission-title">Empowering through education</h2>
            <p className="mission-description">
              Our resource library represents decades of UK innovation and research. 
              From breakthrough studies to practical guides, we provide the knowledge you need to excel.
            </p>
            <div className="mission-links">
              <a href="#catalog" className="mission-link">Resource Catalog</a>
              <a href="#contribute" className="mission-link">
                Contribute Content
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;