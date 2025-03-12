import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import legendofti from '../images/legendofti.png'

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
      <div className="projects">
        <h1 className="projects-title" id="projects">
          Projects
        </h1>
        <div className="projects-section">
          <div className="card">
            <img src={legendofti} alt="legendofti-thumbnail" className="image"></img>
            <p>The LegendOfTi website highlights the content creator, LegendOfTi. It includes </p>
          </div>{" "}
          <div className="card">
            <img src={legendofti} alt="legendofti-thumbnail" className="image"></img>
            <p>The LegendOfTi website highlights the content creator, LegendOfTi. It includes </p>
          </div>{" "}
          <div className="card">
            <img src={legendofti} alt="legendofti-thumbnail" className="image"></img>
            <p>The LegendOfTi website highlights the content creator, LegendOfTi. It includes </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
