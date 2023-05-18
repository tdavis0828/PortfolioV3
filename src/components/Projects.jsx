import React from 'react';
import { motion } from 'framer-motion';
import { StyledProjects } from '../styles/Stylesheet';
import ProjectCard from './ProjectCard';
import tpfScreenshot from '../imgs/tpf.png';
import actaScreenshot from '../imgs/acta-sjvccc.png';
import revertScreenshot from '../imgs/revert.png';

function Projects() {
  const desc =
    'This is a fairly long description that I am writing for proof of concept...';

  return (
    <StyledProjects id="projects">
      <div className="header-text">
        <h2>Projects</h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'linear', duration: 3, x: { duration: 1 } }}
        className="projects-container"
      >
        <ProjectCard
          img={tpfScreenshot}
          link="https://www.towerporchfest.org"
          desc={desc}
          title="TOWER PORCHFEST"
          tagOne="Javascript"
          tagTwo="Wordpress"
          tageThree="PHP"
        />

        <ProjectCard
          img={actaScreenshot}
          link="https://www.towerporchfest.org"
          title="ACTA/SJVCCC"
          desc={desc}
          tagOne="Javascript"
          tagTwo="Wordpress"
          tageThree="PHP"
        />

        <ProjectCard
          img={revertScreenshot}
          link="https://www.towerporchfest.org"
          title="REVERT"
          desc={desc}
          tagOne="Javascript"
          tagTwo="Wordpress"
          tageThree="PHP"
        />
      </motion.div>
      <div className="github-link">
        <a
          href="https://github.com/tdavis0828"
          target="_blank"
          rel="noreferrer"
        >
          More Projects...
        </a>
      </div>
    </StyledProjects>
  );
}

export default Projects;
