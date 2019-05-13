//static rendering of projects
import React from "react";

import { ProjectGallery, Project } from "./projects.style";

const StaticProjectGallery = () => {
  return (
    <ProjectGallery>
      <Project>
        <div className="project-thumbnail">
        <a
              className="app-btn"
              href="https://learned-app.now.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img
            src={require("../../assets/img/EruditionMain.PNG")}
            alt="erudition website"
          />
            </a>
          
        </div>

        <div className="project-description erudition">
          <h3>TEAM</h3>
          <h2>Erudition</h2>
          <h4>Lead Engineer + Backend Engineer</h4>
          <p>
           A social web application that allows users to store their favorite
            articles, blogs, and online courses in one place.
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
        <div className="project-description mentor">
          <h3>TEAM</h3>
          <h2>Mentor Me</h2>
          <h4>Team Lead</h4>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              className="long-description2"
             
            >
              A web app built in one week to provide entrepreneurs a platform to
              ask questions to experienced business owners. I led a team of 4 developers in a 1-week hackathon to create this app.
            </p>
            <div className="project-thumbnail inverted-thumbnail">
            <a
              className="app-btn"
              href="https://team-mentor-me.github.io/mentor-me-landing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../assets/img/MentorMe.PNG")}
                alt="Mentor Me Website"
              />
            </a>
              
            </div>
          </div>

          <div className="btn-group2">
            <a
              className="app-btn"
              href="https://team-mentor-me.github.io/mentor-me-landing/"
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
              src={require("../../assets/img/undraw_learning_2q1h.svg")}
              alt="learning"
            /> */}
          </div>
        </div>
      </Project>

      <Project>
      <div className="project-thumbnail">
      <a
              className="src-btn"
              href="https://github.com/Hunter315/aposDate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../assets/img/React-Native-Expo.jpg")}
                alt="React Native + Expo"
              />
            </a>
              
      </div>
        <div className="project-description erudition">
          <h3>INDEPENDENT</h3>
          <h2>aposDate</h2>

           
            <p className="pClass">
              A React Native + Expo CLI dating app to connect post-religious
              users.
            </p>
          
        
          <div className="btn-group">
            <a
              className="src-btn"
              href="https://github.com/Hunter315/aposDate"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            {/* <img
              src={require("../../assets/img/undraw_intense_feeling_ft9s.svg")}
              alt="intense feeling"
            /> */}
          </div>
        </div>
      </Project>
    </ProjectGallery>
  );
};

export default StaticProjectGallery;
