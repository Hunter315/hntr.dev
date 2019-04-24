import React from "react";
import { Link } from "react-scroll";
import { HeroContainer } from "./Hero.style";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="hero-image">
      {/* <img src={require("../../assets/img/grit.png")} 
      alt="grit" 
      style={{position: "absolute", }}
      /> */}
        <img
        style={{height: "100%"}}
          src={require("../../assets/img/hntrnotext.png")}
          alt="Hunter Smith"
        />
        <h1 className="grit" style={{position: "absolute", margin: "0",  color: "transparent", right:"50%", top:"20%", fontSize:"140px", textShadow: "rgba(116, 116, 117, 1) 0px 0px 6px"}}>HNTR</h1>
        <h1 className="shadow" style={{position: "absolute", margin: "0", color: "transparent", right:"50%", top:"20%", fontSize:"140px", textShadow: "0px 120px 7px rgba(0, 0, 0, 0.56)"}}>HNTR</h1>

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