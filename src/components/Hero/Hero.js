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
        style={{height: "100%", minWidth: "100%"}}
          src={require("../../assets/img/hntrnotext.png")}
          alt="Hunter Smith"
        />
        <div style={{height: "100%", width: "100%", padding: "0 10%", position: "absolute", boxSizing: "border-box", top: "0"}}>
        <h1 className="grit" style={{position: "absolute", margin: "0",  color: "transparent", right:"40%", top:"20%", fontSize:"140px", textShadow: "rgba(116, 116, 117, 1) 0px 0px 6px"}}>HNTR</h1>
        <h1 className="shadow" style={{position: "absolute", margin: "0", color: "transparent", right:"40%", top:"20%", fontSize:"140px", textShadow: "0px 120px 7px rgba(0, 0, 0, 0.56)"}}>HNTR</h1>

        <h1 className="grit" style={{position: "absolute", margin: "0",  color: "transparent", right:"50px", bottom: "10%", fontSize:"70px", textShadow: "rgba(116, 116, 117, 1) 0px 0px 3px", zIndex:"3"}}>SFTWR DVLPR</h1>
        <h1 className="shadow" style={{position: "absolute", margin: "0", color: "transparent", right:"50px", bottom: "10%", fontSize:"70px", textShadow: "0px 20px 7px rgba(0, 0, 0, 0.56)"}}>SFTWR DVLPR</h1>
        </div>
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