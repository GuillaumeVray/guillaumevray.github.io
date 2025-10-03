import React from "react";
import ExperienceData from "../data/experience";

const dashedConnectorStyle = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(96, 165, 250, 0.5) 50%, rgba(96, 165, 250, 0) 0%)",
  backgroundSize: "3px 8px",
  backgroundRepeat: "repeat-y",
};

const TimelineMarker = () => (
  <div className="relative flex basis-[3.5rem] flex-shrink-0 items-start justify-center pt-1 md:mx-auto md:col-start-5 md:col-end-6 md:block md:basis-auto md:pt-0">
    <div className="flex h-full w-4 items-center justify-center">
      <div className="h-full w-[3px] bg-light-blue/50"></div>
    </div>
    <div className="flex items-center justify-center md:absolute md:top-4 md:left-1/2 md:-translate-x-1/2">
      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-light-blue shadow-md sm:h-12 sm:w-12 md:h-16 md:w-16"
        style={{ boxShadow: "0 0 35px rgba(96, 165, 250, 0.55)" }}
      >
        <span className="absolute inset-0 rounded-full bg-light-blue/40 md:animate-ping"></span>
        <div className="relative z-10 h-7 w-7 rounded-full bg-white shadow-inner sm:h-9 sm:w-9 md:h-12 md:w-12"></div>
      </div>
    </div>
  </div>
);

const TimelineCard = ({ title, company, duration, location, logo, summary }) => (
  <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 text-gray-700 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-200 sm:p-5">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 dark:bg-slate-100">
        <img src={logo} alt={`${company} logo`} className="h-7 w-7 object-contain" />
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-[clamp(1.05rem,2.2vw,1.3rem)] font-semibold text-gray-900 dark:text-white md:text-lg">
          {title} at {company}
        </h3>
        <p className="truncate text-xs font-medium text-gray-500 dark:text-gray-300 md:text-sm">
          {[duration, location].filter(Boolean).join(" · ")}
        </p>
      </div>
    </div>
    {summary && (
      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {summary}
      </p>
    )}
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
                  className="md:col-start-1 md:col-end-5 md:ml-auto"
                >
                  <TimelineCard
                    title={exp.title}
                    company={exp.company}
                    duration={exp.duration}
                    location={exp.location}
                    logo={exp.logo}
                    summary={exp.description?.[0]}
                  />
                </div>
                <TimelineMarker />
              </div>
            ) : (
              <div key={index} className="flex items-start gap-3 sm:gap-4 md:contents text-start">
                <TimelineMarker />
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="md:col-start-6 md:col-end-10 md:mr-auto"
                >
                  <TimelineCard
                    title={exp.title}
                    company={exp.company}
                    duration={exp.duration}
                    location={exp.location}
                    logo={exp.logo}
                    summary={exp.description?.[0]}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 block" aria-hidden="true">
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
