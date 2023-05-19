import React, { useState, useEffect } from 'react';
import { StyledProjectCard } from '../styles/Stylesheet';

function ProjectCard({ img, link, title, desc, tag }) {
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    if (tag === 'Javascript') {
      setCurrentColor('#e8d44d');
    } else if (tag === 'Wordpress') {
      setCurrentColor('#1b769c');
    } else if (tag === 'PHP') {
      setCurrentColor('#787cb4');
    } else if (tag === 'React') {
      setCurrentColor('#00d8ff');
    } else if (tag === '') {
      setCurrentColor('');
    }
  }, [tag]);

  return (
    <StyledProjectCard>
      <img src={img} alt="/" />
      <div>
        <div className="project-info">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
          <p style={{ background: currentColor }}>{tag}</p>
        </div>
        <div className="project-desc">
          <p>{desc}</p>
        </div>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
