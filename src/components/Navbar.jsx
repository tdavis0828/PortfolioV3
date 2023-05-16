import React, { useState, useEffect } from 'react';
import { StyledNavBar } from '../styles/Stylesheet';
import logo from '../imgs/Davis.png';
import resume from '../assets/ReactResume.pdf';

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
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#references">References</a>
        <a href="#contact">Contact</a>
        <a href={resume} download="ReactResume.pdf">
          Resume
        </a>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Davis Digital Logo" />
      </div>
    </StyledNavBar>
  );
}

export default Navbar;
