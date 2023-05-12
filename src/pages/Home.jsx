import React from 'react';
import { StyledHome } from '../styles/Stylesheet';
import githubLogo from '../imgs/github.png';
import fiverrLogo from '../imgs/fiverr.png';
import linkedInLogo from '../imgs/linkedin.png';
import headshot from '../imgs/headshot.png';

function Home() {
  return (
    <StyledHome>
      <div className="hero-content">
        <p>My name is</p>
        <h2>
          <span>Tyler Davis</span>
        </h2>
        <p>
          I am a <span>Web Developer</span>
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{' '}
        </p>
        <button type="button">Check out my work</button>
        <div className="icons-container">
          <img src={githubLogo} alt="Github logo" />
          <img src={linkedInLogo} alt="Linked In logo" />
          <img src={fiverrLogo} alt="Fiverr logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src={headshot} alt="headshot" />
      </div>
    </StyledHome>
  );
}

export default Home;
