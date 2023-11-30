import React from 'react';
import { motion } from 'framer-motion';
import { StyledReferences } from '../styles/Stylesheet';
import ReferenceCard from './ReferenceCard';
import sarahHeadshot from '../imgs/sarahHeadshot.png';
import austinHeadshot from '../imgs/austinHeadshot.png';
import juanHeadshot from '../imgs/juanHeadshot.png';

function References() {
  return (
    <StyledReferences id="references">
      <div className="header-text">
        <h2>References</h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'linear', duration: 1.5, x: { duration: 1 } }}
        className="card-container"
      >
        <ReferenceCard
          img={sarahHeadshot}
          name="Sarah Cullen"
          title="Program Lead"
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
          title="Apprenticeship Lead"
          email="jlucero@alphaworks.tech"
        />
      </motion.div>
    </StyledReferences>
  );
}

export default References;
