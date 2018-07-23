import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AccordionDemo from "./components/Accordion/AccordionDemo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/accordion">Accordion</Link>
            </li>
          </ul>

          <hr />

          <Route path="/accordion" component={AccordionDemo} />
        </div>
      </Router>
    );
  }
}

export default App;
