import React from 'react';
import { StyledReferenceCard } from '../styles/Stylesheet';

function ReferenceCard({ img, name, title, email }) {
  return (
    <StyledReferenceCard>
      <img src={img} alt="/" />
      <p className="name">
        <span>{name}</span>
      </p>
      <p className="title">{title}</p>
      <p>{email}</p>
      <a href={`mailto:${email}`} className="button">
        Reach Out
      </a>
    </StyledReferenceCard>
  );
}

export default ReferenceCard;
