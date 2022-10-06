import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" w-full h-[80px] sm:h-[80px] flex justify-end bg-[#f5f1ed] text-[#000]">
      <ul className="flex">
        <li className="mt-10 text-xs">Designed &amp; Built by Miguel Lamas.</li>
        </ul>
        <div className="hover:scale-125 duration-500">
        <Link to="home" smooth={true} duration={500}>
        <button className="scroll-button">&#8593;</button>
        </Link>
        </div>
    </footer>
  );
};

export default Footer;
