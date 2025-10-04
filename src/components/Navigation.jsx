import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-text">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:animate-pulse transition-all duration-300">
              OGA
            </span>
          </Link>
          <span className="logo-subtitle">Old Girls' Association</span>
        </div>

        <div className="nav-menu">
          <Link to="/alumni" className="nav-link">
            Alumni
          </Link>
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/network" className="nav-link">
            News
          </Link>
          <div className="dropdown">
            <Link to="/resources" className="nav-link dropdown-toggle">
              Get Involved
              <span className="dropdown-arrow">▼</span>
            </Link>
          </div>
        </div>

        <div className="nav-buttons">
          <button className="btn-connect">Join Us</button>
          <button className="btn-explore">Donate</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
