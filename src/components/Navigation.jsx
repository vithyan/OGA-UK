import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-text">OGA-UK</Link>
        </div>
        
        <div className="nav-menu">
          <Link to="/alumni" className="nav-link">Alumni</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/network" className="nav-link">Network</Link>
          <div className="dropdown">
            <Link to="/resources" className="nav-link dropdown-toggle">
              Resources
              <span className="dropdown-arrow">▼</span>
            </Link>
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