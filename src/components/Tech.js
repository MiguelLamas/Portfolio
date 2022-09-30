import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Nextjs from "../assets/nextjs.png"
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import npm from "../assets/npm.png";
import Jest from "../assets/jest.png";
import GitHub from "../assets/github.png";
import PostgreSQL from "../assets/postgresql.png";
import Heroku from "../assets/heroku.png";
import Tailwind from "../assets/tailwind.png";
import Postman from "../assets/postman.png";
import Auth0 from "../assets/auth0.png";

function Tech() {
  return (
    <div name="tech" className="tech-main">
      {/* Container */}
      <div className="tech-container">
        <div>
          <p className="tech-p1">
            Tech</p>
          <p className="tech-p2">These are some of the technologies I've been introduced to and worked with
          during recent projects.</p>
        </div>
        
        <div className="tech-grid">
          <div className="tech-box">
            <img className="tech-image" src={HTML} alt="HTML icon" />
            <p className="tech-p3 font-sans text-sm">HTML</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={CSS} alt="CSS icon" />
            <p className="tech-p3 font-sans text-sm">CSS</p>
          </div>

          <div className="tech-box">
            <img
              className="tech-image"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="tech-p3 font-sans text-sm">JAVASCRIPT</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={ReactImg} alt="React icon" />
            <p className="tech-p3 font-sans text-sm">REACT</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Nextjs} alt="Nextjs icon" />
            <p className="tech-p3 font-sans text-sm">NEXT JS</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Node} alt="Node icon" />
            <p className="tech-p3 font-sans text-sm">NODE JS</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Express} alt="Express icon" />
            <p className="tech-p3 font-sans text-sm">EXPRESS</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={npm} alt="npm icon" />
            <p className="tech-p3 font-sans text-sm">NPM</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Jest} alt="Jest icon" />
            <p className="tech-p3 font-sans text-sm">JEST</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={GitHub} alt="GitHub icon" />
            <p className="tech-p3 font-sans text-sm">GITHUB</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={PostgreSQL} alt="PostgreSQL icon" />
            <p className="tech-p3 font-sans text-sm">PostgreSQL</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Heroku} alt="Heroku icon" />
            <p className="tech-p3 font-sans text-sm">HEROKU</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Tailwind} alt="Tailwind icon" />
            <p className="tech-p3 font-sans text-sm">TAILWIND CSS</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Postman} alt="Postman icon" />
            <p className="tech-p3 font-sans text-sm">POSTMAN</p>
          </div>

          <div className="tech-box">
            <img className="tech-image" src={Auth0} alt="Auth0 icon" />
            <p className="tech-p3 font-sans text-sm">AUTH0</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tech;
