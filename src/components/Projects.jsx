import React from 'react';
import Slider from 'react-slick';
import { StyledProjects } from '../styles/Stylesheet';
import ProjectCard from './ProjectCard';
import tpfScreenshot from '../imgs/tpf.png';
import actaScreenshot from '../imgs/acta-sjvccc.png';

function Projects() {
  const desc =
    'this is a fairly long description that I am writing for proof of concept';
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'image-slider',
  };
  return (
    <StyledProjects>
      <Slider {...settings}>
        <div>
          <ProjectCard
            img={tpfScreenshot}
            desc={desc}
            title="TOWER PORCHFEST"
            tagOne="Javascript"
            tagTwo="Wordpress"
            tageThree="PHP"
          />
        </div>
        <div>
          <ProjectCard
            img={actaScreenshot}
            title="ACTA/SJVCCC"
            desc={desc}
            tagOne="Javascript"
            tagTwo="Wordpress"
            tageThree="PHP"
          />
        </div>
        <div>
          <ProjectCard
            img={tpfScreenshot}
            title="TOWER PORCHFEST"
            desc={desc}
            tagOne="Javascript"
            tagTwo="Wordpress"
            tageThree="PHP"
          />
        </div>
        <div>
          <ProjectCard
            img={tpfScreenshot}
            title="TOWER PORCHFEST"
            desc={desc}
            tagOne="Javascript"
            tagTwo="Wordpress"
            tageThree="PHP"
          />
        </div>
      </Slider>

      {/* <button type="button">Github repo</button> */}
    </StyledProjects>
  );
}

export default Projects;
