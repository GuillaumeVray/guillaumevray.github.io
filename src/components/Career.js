import React from "react";
import ExperienceData from "../data/experience";
import EducationData from "../data/education";

const Card = ({ logo, title, subtitle, summary, meta }) => (
  <div className="flex h-full min-h-[11rem] flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-colors duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-gray-200">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 dark:bg-slate-100">
        <img src={logo} alt="logo" className="h-7 w-7 object-contain" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
        {subtitle && (
          <p className="truncate text-xs text-gray-500 dark:text-gray-300">{subtitle}</p>
        )}
      </div>
    </div>
    {summary && (
      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{summary}</p>
    )}
    {meta && (
      <p className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">{meta}</p>
    )}
  </div>
);

const Career = () => {
  const work = ExperienceData.slice().reverse().map((item, idx) => ({
    key: `work-${idx}`,
    logo: item.logo,
    title: `${item.title} · ${item.company}`,
    subtitle: item.duration,
    summary: item.summary,
    meta: item.location,
  }));

  const education = EducationData.map((item, idx) => ({
    key: `edu-${idx}`,
    logo: item.logo,
    title: item.title,
    subtitle: `${item.institution} · ${item.duration}`,
    summary: item.summary,
    meta: item.location,
  }));

  return (
    <section className="body-font text-gray-600 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <div className="mx-auto px-3 py-5 text-center transition-colors duration-300 sm:mx-6 md:mx-12 md:mt-5 md:pt-5 xl:mx-40">
        <div id="career" className="flex w-full flex-col flex-wrap items-center text-center">
          <h2 className="mb-3 text-3xl font-medium title-font text-light-blue sm:text-4xl">Career</h2>
          <p className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">Experience & Education Snapshot</p>

        </div>

        <div className="mx-auto mt-6 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Education</h3>
            <div className="grid grid-cols-1 gap-4">
              {education.map((item) => (
                <Card key={item.key} {...item} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Work</h3>
            <div className="grid grid-cols-1 gap-4">
              {work.map((item) => (
                <Card key={item.key} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
