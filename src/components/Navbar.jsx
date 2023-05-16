import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar } from '../styles/Stylesheet';
import logo from '../imgs/Davis.png';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <StyledNavBar className={scrollPosition >= 1 ? 'light' : ''}>
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="#skills">Skills</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#testimonials">Testimonials</Link>
        <Link to="#contact">Contact</Link>
        <Link to="#resume">Resume</Link>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Davis Digital Logo" />
      </div>
    </StyledNavBar>
  );
}

export default Navbar;
