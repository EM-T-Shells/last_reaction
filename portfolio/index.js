import React from "react";
import { Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Portfolio from "./app";
import Contact from "./Contact";
import Resume from "./Resume";

const App = () => {
  return (
    <div>
      <header>
        <h1>Profile Name</h1>
        <nav>
          <Link to="/">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>
      <div>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </div>
      <footer>
        <span>
          <a href="http://github.com">GitHub</a>
        </span>
        <span>
          <a href="http://linkedIn.com">LinkedIn</a>
        </span>
        <span>
          <a href="http://stackoverflow.com">Stackoverflow</a>
        </span>
      </footer>
    </div>
  );
};



export default index;