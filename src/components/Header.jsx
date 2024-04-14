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


  return (
    <header ref={headerRef}>
        <div className={isActive ? "header-container active" : "header-container"}>
            <div className="header-title">
                <h1>Maximilian Neßlauer</h1>
                <p>Computer Science Student | Technology Enthusiast</p>
            </div>
            <nav className={`navbar ${isActive ? "centered" : ""}`} aria-label="Main navigation">
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
