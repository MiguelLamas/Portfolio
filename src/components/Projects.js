import React from "react";
import careFull from "../assets/careFull.png";
import rickAndMorty from "../assets/rickAndMorty.png"
import toDoViteReactApp from "../assets/toDoViteReactApp.png"
import pernToDoApp from "../assets/pernToDoApp.png"
import RestaurantFinder from "../assets/RestaurantFinder.png"
import comingSoon3 from "../assets/comingSoon3.png"

function Projects() {
  return (
    <div name="projects" className="projects-main">
      {/* container */}
      <div className="projects-container">
        <div className="projects-div1">
          <p className="projects-p1">Projects</p>
          <p className="projects-p2">Here are some of the projects I've been working on recently. I'll be adding more projects as I continue to learn, build and develop. Hover or click on each card to find out more.</p>
        </div>

        {/* grid/card container */}
        <div className="projects-grid">
          {/* grid/card item */}
          <div
            style={{ backgroundImage: `url(${careFull})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="font-sans text-xl text-center p-8 font-bold text-[#000] tracking-wider">
            Pet Care App
              </span>
              <div className="pt-8 text-center">
                <a href="https://care-full.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/MiguelLamas/final-project-back-end-care-full-app" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>

           {/* grid/card item */}
          <div
            style={{ backgroundImage: `url(${rickAndMorty})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="font-sans text-xl text-center font-bold text-[#000] tracking-wider">
            Rick & Morty Character Wiki
              </span>
              <div className="pt-8 text-center">
                <a href="https://rick-and-morty-character-wiki.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/MiguelLamas/rick-and-morty-character-wiki" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid/card item */}
          <div
            style={{ backgroundImage: `url(${toDoViteReactApp})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="font-sans text-xl text-center p-8 font-bold text-[#000] tracking-wider">
            To Do List App
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-vite-to-do.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/MiguelLamas/react-todo" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid/card item */}
          <div
            style={{ backgroundImage: `url(${pernToDoApp})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="font-sans text-xl p-8 font-bold text-[#000] tracking-wider">
            PERN Todo App
              </span>
              <div className="pt-8 text-center">
                <a href="https://to-do-app-pern-stack-frontend.onrender.com" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/MiguelLamas/to-do-app-pern-stack-frontend" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* grid/card item */}
          <div
            style={{ backgroundImage: `url(${RestaurantFinder})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="font-sans text-xl p-8 font-bold text-[#000] tracking-wider">
            PERN Yelp Clone App
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    DEMO
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>

 {/* grid/card item */}
 <div
            style={{ backgroundImage: `url(${comingSoon3})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="font-sans text-xl p-8 font-bold text-[#000] tracking-wider">
            Project Name
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    DEMO
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="font-sans border border-black text-center px-4 py-3 m-2 bg-[#000] text-[#FFF] font-normal text-sm">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
  );
}

export default Projects;
