import React from 'react';
import '../components/HeroSection.css';
import '../components/GatewaySection.css';
import '../components/CollaborativeSection.css';
import '../components/MissionSection.css';
import './Events.css';

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

      {/* Upcoming Events - Timeline Style */}
      <section className="events-timeline-section">
        <div className="events-container">
          <div className="events-header">
            <span className="section-label">
              <span className="label-icon">📅</span>
              Calendar 2025
            </span>
            <h2 className="events-title">Upcoming Events</h2>
            <p className="events-subtitle">
              Discover events happening in your area and around the world
            </p>
          </div>
          
          <div className="events-timeline">
            {/* Event 1 */}
            <div className="event-item">
              <div className="event-date">
                <span className="month">MAR</span>
                <span className="day">15</span>
              </div>
              <div className="event-content">
                <div className="event-badge">🍽️ Networking</div>
                <h3 className="event-title">London Alumni Dinner</h3>
                <p className="event-description">
                  Intimate gathering at The Shard with distinguished alumni speakers
                </p>
                <div className="event-meta">
                  <span className="event-location">📍 London, UK</span>
                  <span className="event-time">⏰ 7:00 PM - 10:00 PM</span>
                </div>
                <button className="event-register-btn">Register Now →</button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="event-item">
              <div className="event-date">
                <span className="month">APR</span>
                <span className="day">22</span>
              </div>
              <div className="event-content">
                <div className="event-badge">💼 Career</div>
                <h3 className="event-title">Career Development Workshop</h3>
                <p className="event-description">
                  Professional networking and career guidance session with industry leaders
                </p>
                <div className="event-meta">
                  <span className="event-location">📍 Manchester, UK</span>
                  <span className="event-time">⏰ 2:00 PM - 6:00 PM</span>
                </div>
                <button className="event-register-btn">Register Now →</button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="event-item featured">
              <div className="event-date">
                <span className="month">JUN</span>
                <span className="day">10</span>
              </div>
              <div className="event-content">
                <div className="event-badge">🏆 Annual Event</div>
                <h3 className="event-title">OGA-UK Annual Reunion 2025</h3>
                <p className="event-description">
                  The biggest gathering of UK alumni worldwide - reconnect and celebrate!
                </p>
                <div className="event-meta">
                  <span className="event-location">📍 London, UK</span>
                  <span className="event-time">⏰ 6:00 PM - 11:00 PM</span>
                </div>
                <button className="event-register-btn">Register Now →</button>
              </div>
            </div>

            {/* Event 4 */}
            <div className="event-item">
              <div className="event-date">
                <span className="month">SEP</span>
                <span className="day">18</span>
              </div>
              <div className="event-content">
                <div className="event-badge">🎭 Cultural</div>
                <h3 className="event-title">West End Theatre Night</h3>
                <p className="event-description">
                  Exclusive group booking for a West End show followed by dinner
                </p>
                <div className="event-meta">
                  <span className="event-location">📍 London West End</span>
                  <span className="event-time">⏰ 6:30 PM</span>
                </div>
                <button className="event-register-btn">Register Now →</button>
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