import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./shared/contexts/auth";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
