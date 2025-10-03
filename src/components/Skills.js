import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <section className="body-font text-gray-600 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <div className="mx-auto mt-5 p-4 pt-0 md:mx-20 md:p-5 lg:mx-32 xl:mx-56">
        <div
          id="skills"
          className="mb-4 flex w-full flex-col flex-wrap justify-center text-center md:mb-7"
        >
          <h1 className="mb-2 text-3xl font-medium text-light-blue sm:text-4xl">
            Skills
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white"
          >
            My Technical Expertise
          </p>
        </div>
        <div className="space-y-10">
          {SkillsData.map((section, sectionIndex) => (
            <div
              key={section.category}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={sectionIndex * 100}
              data-aos-once="false"
              className="rounded-md border-2 border-t-gray-200 px-3 py-6 shadow-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
            >
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                {section.category}
              </h2>
              <div className="grid items-stretch justify-center gap-x-3 gap-y-5 grid-cols-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                    data-aos-once="false"
                    className="mx-auto flex w-full max-w-[4rem] flex-col items-center space-y-2 sm:max-w-[5rem]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-2 shadow-sm transition duration-700 dark:bg-slate-100 sm:h-14 sm:w-14">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-7 w-7 object-contain sm:h-10 sm:w-10"
                      />
                    </div>
                    <p className="text-center text-[10px] font-medium sm:text-sm md:text-base">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
