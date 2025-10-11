import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/neon-button";
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
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link to="/donate" className="nav-link">
            Donate
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        <div className="nav-buttons">
          <Link to="/donate">
            <Button variant="goldenSolid" size="default">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
