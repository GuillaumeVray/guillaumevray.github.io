import React from "react";
import ExperienceData from "../data/experience";

const dashedConnectorStyle = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(96, 165, 250, 0.5) 50%, rgba(96, 165, 250, 0) 0%)",
  backgroundSize: "3px 8px",
  backgroundRepeat: "repeat-y",
};

const TimelineMarker = ({ logo, company }) => (
  <div className="col-start-5 col-end-6 mx-auto relative">
    <div className="h-full w-4 flex items-center justify-center">
      <div className="h-full w-[3px] bg-light-blue/50"></div>
    </div>
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <div
        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-light-blue shadow-md"
        style={{ boxShadow: "0 0 35px rgba(96, 165, 250, 0.55)" }}
      >
        <span className="absolute inset-0 rounded-full bg-light-blue/40 animate-ping"></span>
        <div className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-inner">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section className="mt-4 bg-white px-3 py-3 transition-colors duration-300 dark:bg-slate-950 md:mt-7">
      <div className="mx-auto max-w-6xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full ">
          <h1 className="mb-2 text-3xl font-medium title-font text-light-blue sm:text-4xl">
            Experience
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-gray-900 dark:text-white text-center"
          >
            Professional Experience
          </p>
        </div>

        <div className="mx-auto flex flex-col text-gray-800 transition-colors duration-300 dark:text-gray-100 md:grid md:grid-cols-9">
          {ExperienceData?.slice().reverse().map((exp, index) => {
            const isLeft = index % 2 === 0;
            return isLeft ? (
              <div
                key={index}
                className="flex flex-row-reverse md:contents text-start"
              >
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="col-start-1 col-end-5 my-4 ml-auto rounded-lg bg-slate-100 p-2.5 text-gray-700 shadow-md transition-colors duration-300 dark:bg-slate-800 dark:text-gray-200 md:p-4"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between font-medium w-full gap-2 mb-2">
                    <h4 className="text-base text-gray-500 dark:text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300 md:text-base">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                    {exp.location}
                  </p>
                  <div className="flex w-fit mx-auto">
                    <ul className="pl-3 md:pl-5 list-disc leading-loose max-w-max text-[15px] text-start md:text-base font-medium">
                      {exp?.description?.map((desc, index) => (
                        <li key={index} className="mb-1 md:mb-2">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <TimelineMarker logo={exp.logo} company={exp.company} />
              </div>
            ) : (
              <div key={index} className="flex md:contents text-start">
                <TimelineMarker logo={exp.logo} company={exp.company} />
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="col-start-6 col-end-10 my-4 mr-auto rounded-lg bg-slate-100 p-2.5 text-gray-700 shadow-md transition-colors duration-300 dark:bg-slate-800 dark:text-gray-200 md:p-4"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-500 font-medium w-full gap-2 mb-2">
                    <h4 className="text-base text-gray-500 dark:text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300 md:text-base">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                    {exp.location}
                  </p>
                  <div className="flex w-fit mx-auto">
                    <ul className="pl-3 md:pl-5 list-disc leading-loose max-w-max text-[15px] text-start md:text-base font-medium">
                      {exp?.description?.map((desc, index) => (
                        <li key={index} className="mb-1 md:mb-2">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6" aria-hidden="true">
          <div className="md:grid md:grid-cols-9">
            <div className="col-start-5 col-end-6 mx-auto relative">
              <div className="h-6 w-4 flex items-center justify-center">
                <div className="h-full w-[3px]" style={dashedConnectorStyle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
