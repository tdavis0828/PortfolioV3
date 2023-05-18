import React from 'react';
import { motion } from 'framer-motion';
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
        <h2>Skills</h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'linear', duration: 1.5, x: { duration: 1 } }}
        className="front-end"
      >
        <h3>Front End Toolbox</h3>
        <div className="skills">
          <img src={htmlLogo} alt="HTML 5 logo" />
          <img src={cssLogo} alt="CSS 3 logo" />
          <img src={jsLogo} alt="Javascript logo" />
          <img src={bootstrapLogo} alt="Bootstrap logo" />
          <img src={reactLogo} alt="ReactJS logo" />
          <img src={wpLogo} alt="Wordpress logo" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'linear', duration: 1.5, x: { duration: 1 } }}
        className="back-end"
      >
        <h3>Backend End Toolbox</h3>
        <div className="skills">
          <img src={phpLogo} alt="PHP logo" />
          <img src={sqlLogo} alt="My SQL logo" />
          <img src={nodeLogo} alt="node js logo" />
          <p>MERN</p>
        </div>
      </motion.div>
    </StyledSkills>
  );
}

export default Skills;
