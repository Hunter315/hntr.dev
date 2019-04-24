import React from "react";
import { AboutContainer, AboutHeadline, AboutImage } from "./about.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeadline>
        <h1>(() => Introductions)();</h1>
        <div style={{display: "flex"}}>
        <p className="main-headline">
          I am Hunter Smith - I create ideas and solve problems with Javascript
        </p>
        <p className="secondary-headline">
          {" "}
          <a
            href="https://lambdaschool.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lambda School Graduate
          </a>
          .
        </p>
        </div>
      </AboutHeadline>

      {/* <AboutImage> */}
        {/* <img
          src={require("../../_assets/img/girl-sitting.png")}
          alt="girl-sitting"
        /> */}
      {/* </AboutImage> */}
    </AboutContainer>
  );
};

export { About };