import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import REACT from "../assets/react.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import NPM from "../assets/npm.png";
import GitHub from "../assets/github.png";
import Postgres from "../assets/postgresql.png";
import Tailwind from "../assets/tailwind.png";

const Tech = () => {
  return (
    <div name="tech" className="tech-main">
      {/* Container */}
      <div className="tech-container">
        <div>
          <p className="tech-p1">Tech</p>
          <p className="tech-p2">
            These are some of the technologies I've been introduced to and
            worked with during recent projects.
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-box">
            <img className="tech-image" src={HTML} alt="HTML icon" />
            <p className="tech-p3">HTML</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={CSS} alt="HTML icon" />
            <p className="tech-p3">CSS</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={JavaScript} alt="HTML icon" />
            <p className="tech-p3">JS</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={REACT} alt="HTML icon" />
            <p className="tech-p3">REACT</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={Node} alt="HTML icon" />
            <p className="tech-p3">NODE JS</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={Express} alt="HTML icon" />
            <p className="tech-p3">EXPRESS</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={NPM} alt="HTML icon" />
            <p className="tech-p3">NPM</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={GitHub} alt="HTML icon" />
            <p className="tech-p3">GITHUB</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={Postgres} alt="HTML icon" />
            <p className="tech-p3">POSTGRESQL</p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={Tailwind} alt="HTML icon" />
            <p className="tech-p3">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
