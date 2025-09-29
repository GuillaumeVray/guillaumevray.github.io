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
              <div className="grid items-stretch justify-center gap-x-4 gap-y-6 min-[460px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                    data-aos-once="false"
                    className="mx-auto flex w-full max-w-[6rem] flex-col items-center space-y-2 sm:max-w-[6.5rem]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-3 shadow-sm transition duration-700 dark:bg-slate-100 sm:h-16 sm:w-16">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                      />
                    </div>
                    <p className="text-center text-xs font-medium sm:text-sm md:text-base">{skill.name}</p>
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
