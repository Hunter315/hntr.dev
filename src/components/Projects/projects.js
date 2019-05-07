import React from "react";
import StaticProjectGallery from "./staticProjects";

import { ProjectContainer } from "./projects.style";

const Projects = () => {
  return (
    <div style={{display:"flex"}}>
    <ProjectContainer id="projects">
      <h1>Projects</h1>
      <p>
        Here are a few of my projects that I have worked on. You can check out all of my work{" "}
        <a
          href="https://github.com/Hunter315"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <StaticProjectGallery />
    </ProjectContainer>
    </div>
  );
};

export { Projects };