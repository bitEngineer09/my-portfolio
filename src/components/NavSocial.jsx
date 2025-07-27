import React from "react";

import { VscGithub } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const NavSocial = () => {
  return (
    <div className="nav-social-content flex gap-[1.8rem] text-[2.2rem]">
      <VscGithub />
      <FaInstagram />
      <GrLinkedinOption />
    </div>
  );
};

export default NavSocial;
