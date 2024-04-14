import React, { useState, useEffect } from 'react';
import '../styles/header.css';

export default function HeaderComponent() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsActive(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={isActive ? "header-container active" : "header-container"}>
        <div className="header-title">
          <h1>Maxi Neßlauer</h1>
          <p>Computer Science Student | Technology Enthusiast</p>
        </div>
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <a href="/" className="nav-link" aria-current="page">Home</a>
          <a href="/projects" className="nav-link">Projects</a>
          <a href="/skills" className="nav-link">Skills</a>
          <a href="/education" className="nav-link">Education</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
