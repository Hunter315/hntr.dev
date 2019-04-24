import React, { Component } from "react";
import { Main } from "../pages/Main/Main";

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Main />
      </AppContainer>
    );
  }
}

export { App };