import React from "react";
import { AboutContainer, AboutHeadline, AboutImage } from "./about.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeadline>
        <h1>About Me</h1>
        <div style={{display: "flex", flexFlow: "column"}}>
        <p className="main-headline">
         I enjoy programming both the frontend and backend of applications. I am a Lambda School Graduate and have experience building real-world applications. Here are just a few of the tools that I have enjoyed using in my projects. I am always striving to learn and use more!
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
            style={{textDecoration:"none"}}
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