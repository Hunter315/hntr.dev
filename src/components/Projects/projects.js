import React from "react";
import StaticProjectGallery from "./staticProjects";

import { ProjectContainer } from "./projects.style";

const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <h1>Projects.</h1>
      <p>
        Here are a few selections of my work as a web developer. You can view my
        other small projects{" "}
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
  );
};

export { Projects };