import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

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
            <img className="image" src="/src/images/callofdutywallpaper.jpeg" />
            <h3>Call of Duty</h3>
            <h4>Esports</h4>
            <a href="https://dotesports.com/call-of-duty/news/2024-call-of-duty-league-major-1-scores-schedule-results">
              <button></button>
            </a>
          </div>{" "}
          <div className="card">
            <img className="image" src="/src/images/callofdutywallpaper.jpeg" />
            <h3>Call of Duty</h3>
            <h4>Esports</h4>
            <a href="https://dotesports.com/call-of-duty/news/2024-call-of-duty-league-major-1-scores-schedule-results">
              <button></button>
            </a>
          </div>{" "}
          <div className="card">
            <img className="image" src="/src/images/callofdutywallpaper.jpeg" />
            <h3>Call of Duty</h3>
            <h4>Esports</h4>
            <a href="https://dotesports.com/call-of-duty/news/2024-call-of-duty-league-major-1-scores-schedule-results">
              <button></button>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
