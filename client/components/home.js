import React, { Component } from "react";
import Stack from "./stack";
import Nav from "./nav";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Timeline from "./timeline/timeline";

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <div className="banner">
          <div className="fade-In">
            <div className="monogram"></div>
          </div>
        </div>
        <About />
        <Timeline />
        <Stack />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
