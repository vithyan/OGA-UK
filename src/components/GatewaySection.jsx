import React from "react";
import "./GatewaySection.css";

const GatewaySection = () => {
  return (
    <section className="gateway">
      <div className="gateway-container">
        <div className="gateway-header">
          <span className="section-label">Celebrating 40 Years</span>
          <h2 className="gateway-title">Voices of Our Sisterhood</h2>
          <p className="gateway-subtitle">
            Hear from accomplished women who continue to embody our motto in
            their professional and personal lives.
          </p>
        </div>

        <div className="gateway-cards">
          <div className="gateway-card testimonial-card">
            <div className="card-image">
              <div className="card-placeholder">👩‍💼</div>
            </div>
            <div className="card-content">
              <blockquote className="testimonial-quote">
                "The sisterhood I found at OGA events opened doors across
                continents. We're truly a global family."
              </blockquote>
              <div className="testimonial-author">
                <h4 className="author-name">Anushka Silva</h4>
                <p className="author-title">International Lawyer</p>
                <p className="author-class">Class of 2001</p>
              </div>
            </div>
          </div>

          <div className="gateway-card">
            <div className="card-image">
              <div className="card-placeholder">🌟</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Success Stories</h3>
              <p className="card-description">
                Discover inspiring journeys of our alumni who are making
                remarkable contributions in their fields worldwide.
              </p>
            </div>
          </div>

          <div className="gateway-card achievement-card">
            <div className="card-image">
              <div className="card-placeholder">🏆</div>
            </div>
            <div className="card-content">
              <span className="achievement-label">Excellence</span>
              <h3 className="card-title">40 Years of Achievement</h3>
              <p className="card-description">
                Celebrating four decades of sisterhood, service, and remarkable
                achievements by our alumni community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;
