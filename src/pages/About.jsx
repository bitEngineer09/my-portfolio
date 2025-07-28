import React from "react";
import RotatingText from "/ReactBits/RotatingText/RotatingText";
import ProfileCard from "/ReactBits/ProfileCard/ProfileCard";
import Skills from "./Skills";
import Projects from "./Projects";

const About = () => {
  return (
    <>
      <div className="
              about-section container
              flex flex-col
              lg:flex-row
              lg:justify-between
              items-center
              p-[4rem] xs:p-[5rem_3rem] sm:p-[3rem] md:p-[3rem_3rem] lg:p-[7rem_3rem] xl:p-[8rem_15rem] 
              2xl:pt-[11rem]
              2xl:px-0
              2xl:pb-0
              gap-[5rem] xs:gap-[3.6rem] sm:gap-[4rem] md:gap-[6rem] lg:gap-[auto]
                      ">
        <div className="
                flex flex-col
                items-center lg:items-start
                xl:gap-[0.5rem] 2xl:gap-[1rem]
                w-[60rem] 2xl:w-[79rem]
                ">
          <h2 className="
                about-heading
                text-center lg:text-start
                text-[3rem] xs:text-[3.5rem] sm:text-[3.2rem] md:text-[3.3rem] lg:text-[3.3rem] xl:text-[4rem] 2xl:text-[4.5rem]
                leading-[3.5rem] xs:leading-[3.7rem] sm:leading-[3.6rem] md:leading-[3.8rem] lg:leading-[4rem] xl:leading-[4.3rem] 2xl:leading-none
                font-semibold
                 ">
            Hi, I am <br />
            <span className="text-[3.5rem] xs:text-[3.7rem] sm:text-[3.6rem] md:text-[3.7rem] lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[6rem]">Gautam Yadav</span>
          </h2>
          <div className="mt-[1.3rem] xs:mt-[1.6rem] sm:mt-auto flex gap-[0.4rem] xs:gap-[0.4rem] sm:gap-[0.5rem] md:gap-[0.6rem] lg:gap-[0.7rem] xl:gap-[0.9rem] 2xl:gap-[1rem]">
            <p className="text-[2.3rem] xs:text-[2.6rem] sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.7rem] 2xl:text-[4rem]">I am a </p>
            <RotatingText
              texts={[
                "FrontEnd Developer",
                "App Developer",
                "Website Developer",
                "Cool!",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              className="text-[2.3rem] xs:text-[2.6rem] sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.7rem] 2xl:text-[4rem] text-violet-500 font-semibold "
            />
          </div>
          <p className="
                hidden sm:block
                text-center lg:text-start
                sm:mt-[1.1rem] md:mt-[1.2rem] lg:mt-[1.2rem] xl:mt-[1.4rem] 2xl:mt-[1.8rem]
                sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem]
                sm:leading-[2rem] md:leading-[2.1rem] lg:leading-[2rem] xl:leading-[2.3rem] 2xl:leading-[2.6rem]
                tracking-wide 
                ">
            A passionate beginner frontend developer focused on building
            responsive and user-friendly web interfaces. I specialize in HTML,
            CSS, and JavaScript, and I'm currently learning React to enhance my
            skills in modern frontend development. I'm actively working on
            personal projects to sharpen my skills and contribute meaningfully
            to real-world applications.
          </p>
          <button className="
                    text-[1.3rem] xs:text-[1.4rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.8rem]
                    2-[16rem] xs:w-[16rem] sm:w-[15rem] md:w-[17rem] lg:w-[17rem] xl:w-[19rem] 2xl:w-[21rem]
                    mt-[1.8rem] xs:mt-[1.8rem] sm:mt-[2rem] md:mt-[3rem] lg:mt-[1.7rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                    p-[0.8rem_1rem] xs:p-[0.8rem_0.8rem] sm:p-[1.1rem_1.4rem] md:p-[1rem_1.7rem] lg:p-[0.9rem_1.8rem] xl:p-[1rem_1.9rem] 2xl:p-[1.3rem_2rem]
                    btn bg-violet-600
                    2xl:rounded-full
                    ">
            Download Resume
          </button>
        </div>
        <div className="">
          <ProfileCard
            name="Gautam Yadav"
            title="bitEngineer"
            handle="yadav._51"
            status="Online"
            contactText="Contact Me"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>

      <div className="mt-[4rem] xs:mt-[2rem] sm:mt-[5rem] 2xl:mt-[7rem]">
        <Skills/>
      </div>

      <div className="mt-[5rem] xs:mt-[6rem] sm:mt-[10rem] 2xl:mt-[7rem]">
        <Projects />
      </div>
    </>
  );
};

export default About;
