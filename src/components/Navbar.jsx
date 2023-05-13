import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar } from '../styles/Stylesheet';
import logo from '../imgs/Davis.png';

function Navbar() {
  return (
    <StyledNavBar>
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
