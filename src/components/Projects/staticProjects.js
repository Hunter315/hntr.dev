//static rendering of projects
import React from "react";

import { ProjectGallery, Project } from "./projects.style";

const StaticProjectGallery = () => {
  return (
    <ProjectGallery>
      <Project>
        <div className="project-thumbnail">
          <img
            src={require("../../assets/img/EruditionMain.PNG")}
            alt="erudition website"
          />
        </div>

        <div className="project-description">
          <h3>TEAM</h3>
          <h2>Erudition</h2>
          <p>
            A social web application that allows users to store their favorite articles, blogs, and online courses in one place. 
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://learned-app.now.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              view
            </a>
            <a
              className="src-btn"
              href="https://github.com/labs11-learned-1/labs11-learned1-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            {/* <img
              src={require("../../_assets/svg/minion-4.svg")}
              alt=""
            /> */}
          </div>
        </div>
      </Project>

      <Project>
        <div className="project-description">
          <h3>TEAM</h3>
          <h2>Mentor Me</h2>
          <p className="long-description">
           A web app built in one week to provide entrepreneurs a platform to ask questions to experienced business owners.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://epic-meitner-afa3b4.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view
            </a>
            <a
              className="src-btn"
              href="https://github.com/team-mentor-me"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            {/* <img
              src={require("../../_assets/svg/minion-3.svg")}
              alt="4 minions"
            /> */}
          </div>
        </div>

        <div className="project-thumbnail inverted-thumbnail">
          {/* <img
            src={require("../../_assets/img/project-luncher.png")}
            alt="luncher website"
          /> */}
        </div>
      </Project>

      {/* <Project>
        <div className="project-thumbnail">
          {/* <img
            src={require("../../_assets/img/project-lambdanotes.png")}
            alt="lambda notes website"
          /> 
        </div>

        <div className="project-description">
          <h3>PERSONAL</h3>
          <h2>Lambda Notes</h2>
          <p>
            A simple note-taking web application that lets a user create,
            update, delete and display notes.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://ls-notes.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view
            </a>
            <a
              className="src-btn"
              href="https://github.com/jsmnglng/front-end-project-week"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            {/* <img
              src={require("../../_assets/svg/minion-1.svg")}
              alt="4 minions"
            /> 
          </div>
        </div>
      </Project> */}
    </ProjectGallery>
  );
};

export default StaticProjectGallery;