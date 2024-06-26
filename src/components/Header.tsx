import React, { useState, useEffect, useRef } from 'react';
import '../styles/header.css';

const HeaderComponent: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

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

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    event.preventDefault();
    
    if (window.location.pathname === '/') {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offset = 80;
        const topOffset = targetSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    } else {
      window.location.href = '/' + '#' + targetId;
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
          <a href="#contact" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
