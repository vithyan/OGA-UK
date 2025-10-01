import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Logo</span>
        </div>
        
        <div className="nav-menu">
          <a href="#alumni" className="nav-link">Alumni</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#network" className="nav-link">Network</a>
          <div className="dropdown">
            <a href="#resources" className="nav-link dropdown-toggle">
              Resources
              <span className="dropdown-arrow">▼</span>
            </a>
          </div>
        </div>
        
        <div className="nav-buttons">
          <button className="btn-connect">Connect</button>
          <button className="btn-explore">Explore</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;