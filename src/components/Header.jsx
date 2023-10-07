import React from 'react';
import { StyledHeader } from '../styles/Stylesheet';
import githubLogo from '../imgs/github.png';
import fiverrLogo from '../imgs/fiverr.png';
import linkedInLogo from '../imgs/linkedin.png';
import headshot from '../imgs/headshot.png';
import { motion } from 'framer-motion';

function Header() {
  return (
    <StyledHeader id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <p>My name is</p>
        <h2>
          <span>Tyler Davis</span>
        </h2>
        <p>
          I am a <span>Developer</span>
        </p>
        <p>
          I'm a skilled React developer proficient in ReactJS, Redux,
          HTML/CSS/JavaScript, testing, Git, and Agile methodology. I build
          complex UIs, manage state, write tests, and collaborate with other
          developers. My expertise in best practices and industry standards
          ensures scalable and maintainable web applications.{' '}
        </p>
        <a href="#projects" className="view-work">
          Check out my work
        </a>
        <div className="icons-container">
          <a
            href="https://github.com/tdavis0828"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-davis-8aab37143/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="Linked In logo" />
          </a>
          {/* <a
            href="https://www.fiverr.com/tylerdavis571/build-you-a-beautiful-website"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fiverrLogo} alt="Fiverr logo" />
          </a> */}
        </div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={headshot} alt="headshot" />
      </motion.div>
    </StyledHeader>
  );
}

export default Header;
