import React from 'react';
import { StyledSkills } from '../styles/Stylesheet';
import htmlLogo from '../imgs/html-5.png';
import cssLogo from '../imgs/css-3.png';
import jsLogo from '../imgs/js.png';
import reactLogo from '../imgs/react.png';
import wpLogo from '../imgs/wordpress.png';
import bootstrapLogo from '../imgs/bootstrap.png';
import phpLogo from '../imgs/php.png';
import sqlLogo from '../imgs/mysql.png';
import nodeLogo from '../imgs/node-js.png';

function Skills() {
  return (
    <StyledSkills>
      <div className="header-text" id="skills">
        <h2>What I do</h2>
        <p>
          I am skilled in both <span>Front-End</span> & <span>Back-End</span>{' '}
          development
        </p>
      </div>
      <div className="front-end">
        <h3>Front End Toolbox</h3>
        <div className="skills">
          <img src={htmlLogo} alt="HTML 5 logo" />
          <img src={cssLogo} alt="CSS 3 logo" />
          <img src={jsLogo} alt="Javascript logo" />
          <img src={bootstrapLogo} alt="Bootstrap logo" />
          <img src={reactLogo} alt="ReactJS logo" />
          <img src={wpLogo} alt="Wordpress logo" />
        </div>
      </div>
      <div className="back-end">
        <h3>Backend End Toolbox</h3>
        <div className="skills">
          <img src={phpLogo} alt="PHP logo" />
          <img src={sqlLogo} alt="My SQL logo" />
          <img src={nodeLogo} alt="node js logo" />
          <p>MERN</p>
        </div>
      </div>
    </StyledSkills>
  );
}

export default Skills;
