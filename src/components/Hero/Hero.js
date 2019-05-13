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
        <div style={{display:"flex", justifyContent:"center"}}>
          <img
            src={require("../../assets/img/white-down-arrow-png-2.png")}
            alt="down arrow"
          />
          <img
            src={require("../../assets/img/white-down-arrow-png-2.png")}
            alt="down arrow"
            style={{bottom:"3rem"}}
          />
        </div>
        </Link>
      </div>
      <div className="gradient" >

      </div>
    </HeroContainer>
  );
};

export { Hero };