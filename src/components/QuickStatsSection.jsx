import React from 'react';
import './QuickStatsSection.css';

const stats = [
  {
    value: 2500,
    suffix: '+',
    label: 'Active Members',
    description: 'Accomplished women worldwide'
  },
  {
    value: 100,
    suffix: '%',
    label: 'A/L Pass Rate',
    description: '2023 Academic Excellence'
  },
  {
    value: 40,
    suffix: '',
    label: 'Years of Service', 
    description: 'Celebrating our legacy'
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Pounds Donated',
    description: 'Community contributions'
  },
  {
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'Professional achievements'
  },
  {
    value: 15,
    suffix: '',
    label: 'Countries',
    description: 'Global presence'
  }
];

const QuickStatsSection = () => {
  return (
    <section className="quick-stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Our Impact by Numbers</h2>
          <p className="stats-description">
            Four decades of excellence, growth, and meaningful contributions to our community and beyond.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-bottom">
          <div className="bottom-highlight">
            <h3 className="bottom-title">Growing Stronger Together</h3>
            <p className="bottom-text">
              Every number tells a story of dedication, excellence, and sisterhood. 
              As we celebrate our 40th anniversary, we look forward to many more years 
              of empowering women and making a positive impact in our communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;