import React from "react";
import { StyledReferences } from "../styles/Stylesheet";
import ReferenceCard from "./ReferenceCard";
import sarahHeadshot from "../imgs/sarahHeadshot.png";
import austinHeadshot from "../imgs/austinHeadshot.png";
import juanHeadshot from "../imgs/juanHeadshot.png";

function References() {
  return (
    <StyledReferences>
      <div className="header-text">
        <h2>References</h2>
      </div>
      <div className="card-container">
        <ReferenceCard
          img={sarahHeadshot}
          name="Sarah Cullen"
          title="Senior Instruction & Program Lead"
          email="scullen@bitwiseindustries.com"
        />
        <ReferenceCard
          img={austinHeadshot}
          name="Austin Reilly"
          title="Software Developer"
          email="areilly@bitwiseindustries.com"
        />
        <ReferenceCard
          img={juanHeadshot}
          name="Juan Jucero"
          title="React Native Apprenticeship Lead"
          email="jlucero@alphaworks.tech"
        />
      </div>
    </StyledReferences>
  );
}

export default References;
