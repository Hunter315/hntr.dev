import React from "react";
import { FooterContainer, FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="footer-links">
          <nav>
            {/* <a
              href="https://twitter.com/jsmnglng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a> */}

            <a
              href="https://www.linkedin.com/in/huntermsmith/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Hunter315"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>

            <a href="mailto:hunter.mckay.smith@gmail.com">Email</a>
          </nav>
        </div>

        <div className="copyright-text">
          <p>
            &copy; 2019{" "}
            <a
              href="https://github.com/Hunter315/hntr.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hunter Smith
            </a>
          </p>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export { Footer };