import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavBrand, NavContainer, NavMenu, NavWrapper } from "./Navbar.style";

class Navbar extends Component {
  state = {
    active: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let scroll = window.scrollY;

    if (scroll > 0) {
      this.setState({ active: "active-nav" });
    } else {
      this.setState({ active: "" });
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <NavContainer className={this.state.active}>
        <NavWrapper>
          <NavBrand href="#top">
            <img
              src={require("../../assets/img/apple-touch-icon.png")}
              alt="letter H"
              onClick={this.scrollToTop}
            />
          </NavBrand>
          <NavMenu>
            <ul>
              <li className="page-links">
                <Link
                  activeClass="active home"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="page-links">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="page-links">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              {/* <li id="resume">
                <a
                  href="https://resume.creddle.io/resume/ikm2c1ejimy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </NavMenu>
        </NavWrapper>
      </NavContainer>
    );
  }
}

export { Navbar };