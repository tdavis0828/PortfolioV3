import React from "react";
import { StyledReferenceCard } from "../styles/Stylesheet";

function ReferenceCard({ img, name, title, email }) {
  return (
    <StyledReferenceCard>
      <img src={img} alt="/" />
      <p className="name">
        <span>{name}</span>
      </p>
      <p className="title">{title}</p>
      <a href="mailto:scullen@bitwiseindustries.com">{email}</a>
      <button type="button">Reach Out</button>
    </StyledReferenceCard>
  );
}

export default ReferenceCard;
