import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container bg-amber-800">
      <nav className="text-[4rem] flex justify-between">
        <div>Logo</div>
        <ul className={`flex ${isOpen ? "nav-link active": "nav-link"}`}>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <GiHamburgerMenu onClick={toogleMenu} className="block md:hidden" />
      </nav>
    </div>
  );
};

export default Education;
