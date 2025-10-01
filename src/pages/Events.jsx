import React from 'react';
import '../components/HeroSection.css';
import '../components/GatewaySection.css';
import '../components/CollaborativeSection.css';
import '../components/MissionSection.css';

const Events = () => {
  return (
    <div className="page-content">
      {/* Hero Section for Events */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              OGA-UK alumni events bringing communities together
            </h1>
            <p className="hero-description">
              Join exclusive events, reunions, and networking opportunities designed 
              for the UK alumni community across major cities worldwide.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">View Calendar</button>
              <button className="btn-secondary">Host Event</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Categories */}
      <section className="gateway">
        <div className="gateway-container">
          <div className="gateway-header">
            <span className="section-label">Calendar</span>
            <h2 className="gateway-title">Upcoming Events</h2>
            <p className="gateway-subtitle">
              Discover events happening in your area and around the world
            </p>
          </div>
          
          <div className="gateway-cards">
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">🍽️</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Networking Dinners</h3>
                <p className="card-description">
                  Intimate gatherings in London, Manchester, Edinburgh for meaningful professional connections.
                </p>
              </div>
            </div>
            
            <div className="gateway-card">
              <div className="card-image">
                <div className="card-placeholder">🎭</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cultural Events</h3>
                <p className="card-description">
                  West End shows, art exhibitions, and cultural celebrations across UK cities.
                </p>
              </div>
            </div>
            
            <div className="gateway-card achievement-card">
              <div className="card-image">
                <div className="card-placeholder">🏆</div>
              </div>
              <div className="card-content">
                <span className="achievement-label">Annual</span>
                <h3 className="card-title">Awards Ceremonies</h3>
                <p className="card-description">
                  Celebrating outstanding achievements in the UK alumni community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="collaborative">
        <div className="collaborative-container">
          <div className="collaborative-content">
            <span className="section-number">02</span>
            <span className="section-subtitle">Featured Event</span>
            <h2 className="collaborative-title">
              Annual OGA-UK Alumni Reunion 2025
            </h2>
            <p className="collaborative-description">
              Join us for the biggest gathering of UK alumni worldwide. Reconnect with 
              university friends, celebrate achievements, and create new memories in London.
            </p>
            <div className="collaborative-buttons">
              <button className="btn-get-involved">Register Now</button>
              <button className="btn-learn-more">
                Event Details
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
            <div className="icon-placeholder">📅</div>
          </div>
          <div className="mission-content">
            <span className="mission-label">Events</span>
            <h2 className="mission-title">Creating memorable experiences</h2>
            <p className="mission-description">
              From intimate gatherings to grand celebrations, our events bring the UK alumni 
              community together to share knowledge, celebrate achievements, and build lasting connections.
            </p>
            <div className="mission-links">
              <a href="#calendar" className="mission-link">Event Calendar</a>
              <a href="#host" className="mission-link">
                Host an Event
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;