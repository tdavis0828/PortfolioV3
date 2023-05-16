import React from "react";
import { StyledProjects } from "../styles/Stylesheet";
import ProjectCard from "./ProjectCard";
import tpfScreenshot from "../imgs/tpf.png";
import actaScreenshot from "../imgs/acta-sjvccc.png";
import drybarScreenshot from "../imgs/drybar.png";
import revertScreenshot from "../imgs/revert.png";

function Projects() {
  const desc =
    "This is a fairly long description that I am writing for proof of concept...";

  return (
    <StyledProjects>
      <div className="header-text">
        <h2>Projects</h2>
      </div>
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

      <ProjectCard
        img={drybarScreenshot}
        link="https://www.towerporchfest.org"
        title="DRY BAR"
        desc={desc}
        tagOne="Javascript"
        tagTwo="Wordpress"
        tageThree="PHP"
      />
      <div className="github-link">
        <a href="/">More Projects...</a>
      </div>
    </StyledProjects>
  );
}

export default Projects;
