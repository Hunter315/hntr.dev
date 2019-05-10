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
        {/* <img
        style={{height: "100%", minWidth: "100%"}}
          src={require("../../assets/img/hntrnotext.png")}
          alt="Hunter Smith"
        /> */}
        <div style={{height: "100%", width: "100%", padding: "0 10%", position: "absolute", boxSizing: "border-box", top: "0"}}>
        <h1 className="grit" style={{position: "absolute", margin: "0",  color: "white",  top:"20%", fontSize:"140px", lineHeight: "8rem"}}>HUNTER SMITH</h1>

        <h1 className="grit" style={{position: "absolute", margin: "0",  color: "white", right:"50px", bottom: "10%", fontSize:"70px", zIndex:"3"}}>SOFTWARE DEVELOPER</h1>
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