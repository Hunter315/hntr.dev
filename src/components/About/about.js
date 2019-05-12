import React from "react";
import { AboutContainer, AboutHeadline, AboutImage } from "./about.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeadline>
        <h1>About Me</h1>
        <div style={{display: "flex", flexFlow: "column"}}>
        <p className="main-headline">
          I'm Hunter Smith - I create ideas and solve problems. I enjoy programming both the frontend and backend of applications. Check out my projects and see what I can do!
        </p>
        <ul className="ul-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>NextJs</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>Python</li>
          <li>C</li>
          <li>SQL</li>
          <li>Firebase</li>
        </ul>
        
        </div>
      </AboutHeadline>

      <AboutImage>
      <a
            href="https://lambdaschool.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecorationColor:"#44141C"}}
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