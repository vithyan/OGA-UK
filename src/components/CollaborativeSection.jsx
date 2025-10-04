import React from "react";
import "./CollaborativeSection.css";

const CollaborativeSection = () => {
  return (
    <section className="collaborative">
      <div className="collaborative-container">
        <div className="collaborative-content">
          <span className="section-number">40</span>
          <span className="section-subtitle">Years of Service</span>
          <h2 className="collaborative-title">
            Sisterhood in action through community service
          </h2>
          <p className="collaborative-description">
            Join our alumni in meaningful community projects that embody our
            school motto. Together, we dare to do right and make a lasting
            impact in our communities.
          </p>
          <div className="collaborative-buttons">
            <button className="btn-get-involved">Join Our Projects</button>
            <button className="btn-learn-more">
              See our impact
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
