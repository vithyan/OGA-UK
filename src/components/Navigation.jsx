import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only handle scroll after initial load
      if (!isFirstLoad) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setScrollDirection("up"); // fade-up (hide)
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setScrollDirection("down"); // fade-down (show)
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle first load - start fade-down animation
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY, isFirstLoad]);

  // Get animation classes based on state
  const getAnimationClasses = () => {
    if (isFirstLoad) {
      return "animate-fade-down animate-once animate-ease-linear";
    }

    const classes =
      scrollDirection === "down"
        ? "animate-fade-down animate-once animate-ease-linear"
        : "animate-fade-up animate-once animate-ease-linear";

    return classes;
  };

  return (
    <nav className={`navbar ${getAnimationClasses()}`}>
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
