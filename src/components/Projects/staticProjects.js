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

        <div className="project-description erudition">
          <h3>TEAM</h3>
          <h2>Erudition</h2>
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

          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              className="long-description2"
              style={{  }}
            >
              A web app built in one week to provide entrepreneurs a platform to
              ask questions to experienced business owners.
            </p>
            <div className="project-thumbnail inverted-thumbnail">
              <img
                src={require("../../assets/img/MentorMe.PNG")}
                alt="Mentor Me Website"
              />
            </div>
          </div>

          <div className="btn-group2">
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
            <img
              src={require("../../assets/img/undraw_learning_2q1h.svg")}
              alt="learning"
            />
          </div>
        </div>
      </Project>

      <Project>
      <div className="project-thumbnail">
              <img
                src={require("../../assets/img/React-Native-Expo.jpg")}
                alt="React Native + Expo"
              />
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
            <img
              src={require("../../assets/img/undraw_intense_feeling_ft9s.svg")}
              alt="intense feeling"
            />
          </div>
        </div>
      </Project>
    </ProjectGallery>
  );
};

export default StaticProjectGallery;
