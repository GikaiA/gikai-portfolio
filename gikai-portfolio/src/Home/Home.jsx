import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import legendofti from "../images/legendofti.png";

function Home() {
  return (
    <div className="home-section">
      <div className="home">
        <div className="hero-section">
          <h1 className="hero-title">Hi I'm Gikai</h1>
          <p className="hero-text">
            Aspiring
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              cursorColor="#f39c12"
              words={[
                " Full Stack Web Developer",
                " Frontend Developer",
                " Photographer",
              ]}
            />
          </p>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-section">
          <div className="subprojects">
            <div className="card">
              <img
                src={legendofti}
                alt="legendofti-thumbnail"
                className="image"
              ></img>
              <div className="project-bio-section"></div>
              <p className="project-bio">
                The LegendOfTi website highlights the content creator,
                LegendOfTi. This custom portfolio website was designed and
                developed to highlight the unique style and brand of the
                creator, integrating social media and sponsor visibility
                enhancements to maximize engagement and revenue.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <img
            src={legendofti}
            alt="legendofti-thumbnail"
            className="image"
          ></img>
          <p>
            The LegendOfTi website highlights the content creator, LegendOfTi.
            It includes{" "}
          </p>
        </div>{" "}
        <div className="card">
          <img
            src={legendofti}
            alt="legendofti-thumbnail"
            className="image"
          ></img>
          <p>
            The LegendOfTi website highlights the content creator, LegendOfTi.
            It includes{" "}
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Home;
