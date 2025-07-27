import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { GrMenu } from "react-icons/gr";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="nav-container">
      <nav className="nav-bar container flex justify-between items-center md:p-[2.2rem_3rem] xl:p-[2.4rem_15rem] 2xl:p-[2rem_0]">
        <NavLink
          to="/about"
          className="nav-logo md:text-[2.3rem] lg:text-[2.4rem] text-[2.5rem]"
        >
          <span>
            {"< "}Gautam{" "}
            <span className="text-violet-500 font-semibold">/</span> Yadav{" >"}{" "}
          </span>
        </NavLink>
        <ul
          className={`flex  md:gap-[2rem] 2xl:gap-[4rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.8rem] 2xl:text-[1.9rem] ${
            isOpen ? "nav-link active" : "nav-link"
          }`}
        >
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Education">Education</NavLink>
        </ul>
        <div className="nav-icons flex items-center md:gap-[1.7rem] 2xl:gap-[3rem] md:text-[2rem] lg:text-[2.5rem] text-[2.5rem]">
          <FiGithub />
          <FaLinkedinIn />
          <GrInstagram />
          <GrMenu onClick={toggleMenu} className="block md:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
