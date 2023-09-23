import React, { useState, useEffect } from "react";
import { StyledNavBar, StyledBurgerMenu } from "../styles/Stylesheet";
import logo from "../imgs/Davis.png";
import resume from "../assets/ReactResume.pdf";
import hamburgerIcon from "../imgs/hamburger.png";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <StyledBurgerMenu>
        <img
          src={hamburgerIcon}
          alt="Navbar Icon"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </StyledBurgerMenu>
      <StyledNavBar
        className={scrollPosition >= 1 ? "light" : ""}
        id={isOpen ? "open" : ""}
      >
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
          <img
            src={logo}
            alt="Davis Digital Logo"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </StyledNavBar>
    </>
  );
}

export default Navbar;
