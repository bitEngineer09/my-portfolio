import React from "react";
import { ProjectsData } from "../assets/Projects";

const ProjectContent = ({ProjectData}) => {
  return (
    <div className="
              cardsPro
              hover:transition 0.5s ease-in-out
              transition 0.5s
              flex flex-col justify-between
              p-[1.2rem] xs:p-[1.5rem] sm:p-[2rem] md:p-[1.5rem] lg:p-[1.7rem] xl:p-[2.2rem] 2xl:p-[3rem] 
              h-[38rem] xs:h-[46rem] sm:h-[48rem] md:h-[45rem] lg:h-[44rem] xl:h-[52rem] 2xl:h-[57rem]
              rounded-[2rem]
              border-[0.2rem]
              border-zinc-700
              ">
      <img 
        src={ProjectData.image}
        alt=""
        className="
              rounded-[1rem]
              w-full
              h-[15rem] xs:h-[18rem] sm:h-[17rem] md:h-[19rem] lg:h-[17rem] xl:h-[18rem] 2xl:h-[21rem]
              border-[0.3rem]
              border-zinc-700
              "/>
      <h3 className="text-[2rem] xs:text-[2.5rem] sm:text-[2.7rem] md:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3rem] font-semibold leading-[3.4rem]">
        {ProjectData.title}
      </h3>
      <p className="text-[1.15rem] xs:text-[1.4rem] sm:text-[1.6rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]  text-zinc-400">
        {ProjectData.description}
      </p>
      <div className="">
        <button 
            id="bottone1"
            className="
                text-[1.2rem] xs:text-[1.4rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[1.9rem]
                p-[0.8rem_1.4rem] xs:p-[1.1rem_2.6rem] sm:p-[1.4rem_4rem] md:p-[1rem_2rem] lg:p-[0.9rem_2rem] xl:p-[1rem_2.1rem] 2xl:p-[1.1rem_2.3rem]
                ">
          <strong>
            <a href={ProjectData.url}>Chekout Git Hub</a>
          </strong>
        </button>
      </div>
    </div>
  );
};

export default ProjectContent;
