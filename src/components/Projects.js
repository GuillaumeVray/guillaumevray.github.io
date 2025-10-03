import React, { useState } from "react";
import { FaExternalLinkAlt, FaFileAlt, FaDownload, FaGithub } from "react-icons/fa";
import projects from "../data/projects";

const Projects = () => {
  const items = [...projects].sort((a, b) => (b.year || 0) - (a.year || 0));
  const [activeId, setActiveId] = useState(null);

  const activate = (id) => setActiveId(id);
  const deactivate = () => setActiveId(null);
  const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

  const ActionButton = ({ href, children, icon: Icon }) => {
    if (!href) return null;
    return (
      <a
        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-darkblue shadow-sm transition hover:bg-slate-100 dark:bg-slate-800 dark:text-light-blue dark:hover:bg-slate-700"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Icon && <Icon size={16} />}
        {children}
      </a>
    );
  };

  return (
    <section className="body-font text-gray-600 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <div className="mx-auto px-3 py-5 text-center transition-colors duration-300 sm:mx-6 md:mx-12 md:mt-5 md:pt-5 xl:mx-40">
        <div id="projects" className="flex w-full flex-col flex-wrap items-center text-center">
          <h2 className="mb-3 text-3xl font-medium title-font text-light-blue sm:text-4xl">Projects</h2>
          <p className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">Selected Work</p>
        </div>

        <div className="mx-auto mt-6 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const isActive = activeId === p.id;
            return (
              <article
                key={p.id}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${p.title}`}
                aria-expanded={isActive}
                className="group relative flex h-[22rem] md:h-[24rem] cursor-pointer overflow-hidden rounded-xl shadow-md transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-blue dark:shadow-slate-800 md:shadow-lg"
                onMouseEnter={() => activate(p.id)}
                onMouseLeave={deactivate}
                onFocus={() => activate(p.id)}
                onBlur={(e) => {
                  if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                    deactivate();
                  }
                }}
                onClick={() => toggle(p.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(p.id);
                  }
                }}
              >
                {/* Background: image if provided, else solid black */}
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black" aria-hidden="true" />
                )}

                {/* Collapsed header */}
                <div
                  className={`absolute bottom-0 left-0 right-0 z-10 rounded-b-xl bg-black/60 px-6 py-3 transition-all duration-500 ease-in-out transform ${
                    isActive ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                  }`}
                >
                  <h3 className="text-left text-2xl font-semibold text-white">{p.title}</h3>
                  {(p.tag || p.year) && (
                    <span className="mt-1 inline-flex items-center rounded-full bg-slate-100/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
                      {p.tag || p.year}
                    </span>
                  )}
                </div>

                {/* Expanded body */}
                <div
                  className={`absolute inset-0 z-20 flex h-full flex-col rounded-xl bg-white p-6 text-start transition-all duration-500 ease-in-out transform dark:bg-slate-900 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-1 flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto pr-1 sm:pr-2">
                      <div className="flex flex-col gap-2 pb-2">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                        {/* Year tag shown on image mode only; omit here */}
                        {p.summary && (
                          <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{p.summary}</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <ActionButton href={p.links?.demoUrl} icon={FaExternalLinkAlt}>
                        Demo
                      </ActionButton>
                      <ActionButton href={p.links?.reportUrl} icon={FaFileAlt}>
                        Report
                      </ActionButton>
                      <ActionButton href={p.links?.codeUrl} icon={FaGithub}>
                        Code
                      </ActionButton>
                      <ActionButton href={p.links?.downloadUrl} icon={FaDownload}>
                        Download
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
