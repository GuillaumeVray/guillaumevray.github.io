import React from "react";
import ExperienceData from "../data/experience";

const dashedConnectorStyle = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(96, 165, 250, 0.5) 50%, rgba(96, 165, 250, 0) 0%)",
  backgroundSize: "3px 8px",
  backgroundRepeat: "repeat-y",
};

const TimelineMarker = ({ logo, company }) => (
  <div className="relative flex basis-[3.5rem] flex-shrink-0 items-start justify-center pt-1 md:mx-auto md:col-start-5 md:col-end-6 md:block md:basis-auto md:pt-0">
    <div className="hidden md:flex h-full w-4 items-center justify-center">
      <div className="h-full w-[3px] bg-light-blue/50"></div>
    </div>
    <div className="flex items-center justify-center md:absolute md:top-4 md:left-1/2 md:-translate-x-1/2">
      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-light-blue shadow-md sm:h-12 sm:w-12 md:h-16 md:w-16"
        style={{ boxShadow: "0 0 35px rgba(96, 165, 250, 0.55)" }}
      >
        <span className="absolute inset-0 rounded-full bg-light-blue/40 md:animate-ping"></span>
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-inner sm:h-10 sm:w-10 md:h-14 md:w-14">
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
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

        <div className="mx-auto flex flex-col gap-6 text-gray-800 transition-colors duration-300 dark:text-gray-100 md:grid md:grid-cols-9 md:gap-8">
          {ExperienceData?.slice().reverse().map((exp, index) => {
            const isLeft = index % 2 === 0;
            return isLeft ? (
              <div
                key={index}
                className="flex flex-row-reverse items-start gap-3 sm:gap-4 md:contents text-start"
              >
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="my-4 flex-1 rounded-lg bg-slate-100 p-3 text-gray-700 shadow-md transition-colors duration-300 dark:bg-slate-800 dark:text-gray-200 sm:p-3.5 md:col-start-1 md:col-end-5 md:ml-auto md:p-5"
                >
                  <h3 className="mb-1 text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold md:text-xl">
                    {exp.title}
                  </h3>
                  <div className="mb-2 flex w-full flex-col justify-between gap-1.5 font-medium text-gray-500 dark:text-gray-300 md:flex-row md:items-center md:gap-2">
                    <h4 className="text-[clamp(0.95rem,2vw,1.1rem)]">{exp.company}</h4>
                    <p className="text-sm md:text-base">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                    {exp.location}
                  </p>
                  <div className="mx-auto flex w-full">
                    <ul className="list-disc pl-4 text-start text-[clamp(0.9rem,1.9vw,1.05rem)] font-medium leading-relaxed sm:pl-5 md:text-base md:leading-loose">
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
              <div key={index} className="flex items-start gap-3 sm:gap-4 md:contents text-start">
                <TimelineMarker logo={exp.logo} company={exp.company} />
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="my-4 flex-1 rounded-lg bg-slate-100 p-3 text-gray-700 shadow-md transition-colors duration-300 dark:bg-slate-800 dark:text-gray-200 sm:p-3.5 md:col-start-6 md:col-end-10 md:mr-auto md:p-5"
                >
                  <h3 className="mb-1 text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold md:text-xl">
                    {exp.title}
                  </h3>
                  <div className="mb-2 flex w-full flex-col justify-between gap-1.5 font-medium text-gray-500 dark:text-gray-300 md:flex-row md:items-center md:gap-2">
                    <h4 className="text-[clamp(0.95rem,2vw,1.1rem)]">{exp.company}</h4>
                    <p className="text-sm md:text-base">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                    {exp.location}
                  </p>
                  <div className="mx-auto flex w-full">
                    <ul className="list-disc pl-4 text-start text-[clamp(0.9rem,1.9vw,1.05rem)] font-medium leading-relaxed sm:pl-5 md:text-base md:leading-loose">
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

        <div className="mt-6 hidden md:block" aria-hidden="true">
          <div className="grid grid-cols-9">
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
