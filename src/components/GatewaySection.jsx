import React from 'react';
import './GatewaySection.css';

const GatewaySection = () => {
  return (
    <section className="gateway">
      <div className="gateway-container">
        <div className="gateway-header">
          <span className="section-label">Discover</span>
          <h2 className="gateway-title">Your gateway to lifelong learning</h2>
          <p className="gateway-subtitle">
            Explore opportunities that connect OGA-UK alumni worldwide
          </p>
        </div>
        
        <div className="gateway-cards">
          <div className="gateway-card">
            <div className="card-image">
              <div className="card-placeholder">🎓</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Upcoming alumni gatherings</h3>
              <p className="card-description">
                Connect with fellow UK alumni at events and networking opportunities in major cities.
              </p>
            </div>
          </div>
          
          <div className="gateway-card">
            <div className="card-image">
              <div className="card-placeholder">💡</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Success stories & insights</h3>
              <p className="card-description">
                Discover inspiring stories and career insights from UK alumni making global impact.
              </p>
            </div>
          </div>
          
          <div className="gateway-card achievement-card">
            <div className="card-image">
              <div className="card-placeholder">🏆</div>
            </div>
            <div className="card-content">
              <span className="achievement-label">Achievements</span>
              <h3 className="card-title">Celebrating UK alumni excellence</h3>
              <p className="card-description">
                Read about stories of innovation and impact from our distinguished graduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;