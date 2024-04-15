import { useState, useEffect, useRef } from 'react';
import '../styles/header.css';

export default function HeaderComponent() {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerVisible = headerRef.current && headerRef.current.getBoundingClientRect().top >= 0;
      setIsActive(!headerVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" ref={headerRef}>
      <div className={isActive ? "header-container active" : "header-container"}>
        <div className="header-title">
          <h1>Maximilian Neßlauer</h1>
          <p>Computer Science Student | Technology Enthusiast</p>
        </div>
        <nav className={`navbar ${isActive ? "centered" : ""}`} aria-label="Main navigation">
          <a href="#home" className="nav-link" aria-current="page" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
          <a href="#education" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'education')}>Education</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
