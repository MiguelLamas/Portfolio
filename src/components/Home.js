import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="home-main">
      {/* Container */}
      <div className="home-container">
        <h1 className="home-h1">Miguel Lamas_</h1>
        <h2 className="home-h2">Junior Full Stack Developer.</h2>
        <p className="home-p">
          I'm a London based Junior Developer who recently graduated from the School of Code Bootcamp - Cohort 12. I continue to explore
          and learn new frontend and backend technologies, as I work towards transitioning into my first role in tech.
        </p>
        <div>
        <Link to="about" smooth={true} duration={500}>
          <button className="home-button font-sans text-sm rounded border-black text-black group border px-6 py-3 my-2 flex items-center hover:bg-[#000] hover:border-[#000] hover:text-[#FFF]">
            READ MORE
            <span className="group-hover:rotate-90 duration-900">
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default Home;

