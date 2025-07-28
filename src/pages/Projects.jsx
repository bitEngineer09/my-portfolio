import React from "react";
import ProjectContent from "../components/ProjectContent";
import { ProjectsData } from "../assets/Projects";

const Projects = () => {
  return (
    <div>
      <div
        className="
                container
                pt-[4rem] xs:px-[2rem] md:px-[4rem] xl:px-[14rem] 2xl:px-0
                "
      >
        <h3
          className="
                text-[3rem] xs:text-[3.3rem] sm:text-[3.8rem] lg:text-[4.2rem] 2xl:text-[4.6rem]
                font-semibold
                underline underline-offset-12
                [text-decoration-color:#7F22FE] text-center
                "
        >
          PROJECTS
        </h3>
        <p
          className="
                text-[1.2rem] xs:text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] 2xl:text-[1.8rem]
                mt-[1.8rem] xs:mt-[1.9rem] md:mt-[2rem]
                hidden xs:block
                text-center tracking-wider
                "
        >
          Here are my some of the projects that I created in this journey
        </p>
        <div className="
                  px-[2rem] xs:px-0 sm:px-[1rem] md:px-[3rem]
                  grid grid-flow-col auto-cols-[27rem] xs:auto-cols-[30rem] md:grid-flow-row overflow-x-auto  md:grid-cols-2 lg:grid-cols-3
                  xs:pt-[3.5rem] sm:pt-[4rem] pt-[4rem] lg:pt-[5rem] xl:pt-[6rem] 2xl:pt-[4rem]
                  gap-[3rem] xs:gap-[3rem] sm:gap-[4rem] md:gap-[3rem] lg:gap-[1rem] xl:gap-[2rem] 2xl:gap-[6rem]
                  lg:gap-y-[4rem] xl:gap-y-[5rem] 2xl:gap-y-[6rem]
                  ">
          {ProjectsData.map((ProjectData) => {
            return <ProjectContent ProjectData={ProjectData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
