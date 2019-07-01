import React from "react";
import ReactDOM from "react-dom";

import { Router } from "@reach/router";
import Home from "./Home";
import Random from "./Random";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Home path="/" />
          <Random path="/random/" />
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
