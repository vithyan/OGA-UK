import React from 'react';
import './CollaborativeSection.css';

const CollaborativeSection = () => {
  return (
    <section className="collaborative">
      <div className="collaborative-container">
        <div className="collaborative-content">
          <span className="section-number">03</span>
          <span className="section-subtitle">Make an Impact</span>
          <h2 className="collaborative-title">
            Drive change through collaborative initiatives
          </h2>
          <p className="collaborative-description">
            Engage in projects that leverage Stanford's collective expertise to 
            address global challenges and create meaningful solutions.
          </p>
          <div className="collaborative-buttons">
            <button className="btn-get-involved">Get Involved</button>
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
  );
};

export default CollaborativeSection;