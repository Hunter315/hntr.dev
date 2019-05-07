import React, { Component } from "react";

import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects";
import { Footer } from "../../components/Footer";

import { MainContainer, MainWrapper } from "./Main.style";

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <Navbar />

        <MainWrapper>
          <Hero />
          <About />
          <Projects />
        </MainWrapper>

        <Footer />
      </MainContainer>
    );
  }
}

export { Main };