import React from "react";
import { Link } from "react-scroll";
import { HeroContainer } from "./Hero.style";
import Particles from '../Particles/particles'

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="hero-image">
      <Particles />

        
      </div>
      <div className="drop-down-icon">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {/* <img
            src={require("../../_assets/img/down-arrow.png")}
            alt="down arrow"
          /> */}
        </Link>
      </div>
      <div className="gradient" >

      </div>
    </HeroContainer>
  );
};

export { Hero };