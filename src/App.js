import React from "react";
import ReactDOM from "react-dom";

import { Router } from "@reach/router";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Home path="/" />
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
