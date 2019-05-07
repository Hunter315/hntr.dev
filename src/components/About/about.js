import React from "react";
import { AboutContainer, AboutHeadline, AboutImage } from "./about.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeadline>
        <h1>About Me</h1>
        <div style={{display: "flex"}}>
        <p className="main-headline">
          I am Hunter Smith - I create ideas and solve problems with Javascript
        </p>
        
        </div>
      </AboutHeadline>

      <AboutImage>
      <a
            href="https://lambdaschool.com"
            target="_blank"
            rel="noopener noreferrer"
          > 
       <img
          src={require("../../assets/img/LambdaSchoolLogo.png")}
          alt="Lambda School"
        /> 
        <p className="secondary-headline">Lambda School Graduate</p>
        </a>
      </AboutImage>
    </AboutContainer>
  );
};

export { About };