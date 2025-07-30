import React from "react";
import Card from "../components/Card";

const Skills = () => {
  return (
      <div className="
                container
                px-[0.4rem] xs:px-[3rem] md:px-[4rem] xl:px-[14rem] 2xl:px-0
                2xl:pt-[3rem]
                ">
        <h3 className="
                text-[3rem] xs:text-[3.3rem] sm:text-[3.8rem] lg:text-[4.2rem] 2xl:text-[4.6rem]
                font-semibold
                underline underline-offset-12
                [text-decoration-color:#7F22FE] text-center
                ">
          SKILLS
        </h3>
        <p className="
                text-[1.2rem] xs:text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] 2xl:text-[1.8rem]
                mt-[1.8rem] xs:mt-[1.9rem] md:mt-[2rem]
                hidden xs:block
                text-center tracking-wider
                ">
          Showcasing my expertise in crafting intuitive, responsive, and
          visually engaging web experiences.
        </p>
        <div className="LanguagesCard">
          <Card />
        </div>
      </div>
  );
};

export default Skills;
