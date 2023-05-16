import React from "react";
import { StyledProjectCard } from "../styles/Stylesheet";

function ProjectCard({ img, link, title, desc, tagOne, tagTwo, tageThree }) {
  const colors = ["#e8d44d", "#1b769c", "#787cb4"];

  return (
    <StyledProjectCard>
      <img src={img} alt="/" />
      <div>
        <div className="project-info">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>

          <p className="javascript" style={{ background: colors[0] }}>
            {tagOne}
          </p>
          <p className="wordpress" style={{ background: colors[1] }}>
            {tagTwo}
          </p>
          <p className="php" style={{ background: colors[2] }}>
            {tageThree}
          </p>
        </div>
        <div className="project-desc">
          <p>{desc}</p>
        </div>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
