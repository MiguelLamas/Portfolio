import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import mlogo from "../assets/mlogo.png"

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="nav-div">
    {/* logo */}
      <div className="hover:scale-110 duration-500">
      <Link to="home" smooth={true} duration={500}>
      <img className="logo" src={mlogo} alt="Logo" style={{ width: "45px" }} />
      </Link>
      </div>

      {/* menu */}        
      <ul className="nav-menu font-sans">
        <li>
          <Link className="nav-stroke" to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link className="nav-stroke" to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="nav-stroke" to="tech" smooth={true} duration={500}>
            TECH
          </Link>
        </li>
        <li>
          <Link className="nav-stroke" to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link className="nav-stroke" to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="nav-hamburger">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden-menu"
            : "mobile-menu"
        }
      >
        <li className="mobile-li">
        <Link className="nav-stroke" onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mobile-li"><Link className="nav-stroke" onClick={handleClick}  to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li className="mobile-li"><Link className="nav-stroke" onClick={handleClick} to="tech" smooth={true} duration={500}>
            Tech
          </Link></li>
        <li className="mobile-li"><Link className="nav-stroke" onClick={handleClick}  to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
        <li className="mobile-li"><Link className="nav-stroke" onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
    
      </div>
  );
}

export default Navbar;
