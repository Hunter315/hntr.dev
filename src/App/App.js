import React, { Component } from "react";
import { Main } from "../pages/Main/Main";
import Helmet from 'react-helmet';

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet title="Hunter Smith Portfolio" />
        <Main />
      </AppContainer>
    );
  }
}

export { App };