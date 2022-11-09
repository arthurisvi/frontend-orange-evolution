import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
