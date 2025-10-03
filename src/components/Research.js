import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import researchPapers from "../data/research";

const Research = () => {
  const papers = [...researchPapers].sort((a, b) => b.year - a.year);
  const [activePaperId, setActivePaperId] = useState(null);

  const activatePaper = (id) => setActivePaperId(id);
  const deactivatePaper = () => setActivePaperId(null);
  const togglePaper = (id) =>
    setActivePaperId((current) => (current === id ? null : id));

  const highlightAuthors = (paper, authors) =>
    authors.split(",").map((author, index) => {
      const trimmed = author.trim();
      const isGuillaume = trimmed.toLowerCase() === "guillaume vray";
      const hasEqualContribution = equalContributionAuthors[paper.id]?.has(
        trimmed.toLowerCase()
      );

      return (
        <React.Fragment key={`${trimmed}-${index}`}>
          {index > 0 && ", "}
          <span
            className={
              isGuillaume
                ? "text-light-blue font-semibold"
                : undefined
            }
          >
            {trimmed}
            {hasEqualContribution && <sup>*</sup>}
          </span>
        </React.Fragment>
      );
    });

  const equalContributionAuthors = {
    "reservoirtta-2025": new Set(["guillaume vray", "devavrat tomar"]),
    "slip-2025": new Set(["guillaume vray", "devavrat tomar"]),
    "unmix-ttns-2024": new Set(["guillaume vray", "devavrat tomar"]),
    "sood-2021": new Set(["guillaume vray", "behzad bozorgtabar"]),
  };

  const TypeBadge = ({ type }) => {
    if (!type) return null;
    const base =
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";
    const palette = {
      Journal:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
      Conference:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
      Workshop:
        "bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200",
    };
    return <span className={`${base} ${palette[type] || palette.Conference}`}>{type}</span>;
  };

  const PresBadge = ({ presentation }) => {
    if (!presentation) return null;
    const base =
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";
    const palette = {
      Oral:
        "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-200",
      Poster:
        "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    };
    return (
      <span className={`${base} ${palette[presentation] || palette.Poster}`}>
        {presentation}
      </span>
    );
  };

  return (
    <section className="body-font text-gray-600 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <div className="mx-auto px-3 py-5 text-center transition-colors duration-300 sm:mx-6 md:mx-12 md:mt-5 md:pt-5 xl:mx-40">
        <div
          id="research"
          className="flex w-full flex-col flex-wrap items-center text-center"
        >
          <h1 className="mb-3 text-3xl font-medium title-font text-light-blue sm:text-4xl">
            Research
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white"
          >
            Publications
          </p>
        </div>
        <div className="mx-auto mt-6 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => {
            const isActive = activePaperId === paper.id;
            const isNew = paper.id === "reservoirtta-2025";

            return (
              <article
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={paper.id}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${paper.title}`}
              aria-expanded={isActive}
              className={`group relative flex h-[22rem] md:h-[24rem] cursor-pointer overflow-hidden rounded-xl shadow-md transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-blue dark:shadow-slate-800 md:shadow-lg ${
                isNew ? "new-paper-card" : ""
              }`}
              onMouseEnter={() => activatePaper(paper.id)}
              onMouseLeave={deactivatePaper}
              onFocus={() => activatePaper(paper.id)}
              onBlur={(event) => {
                if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
                  deactivatePaper();
                }
              }}
              onClick={() => togglePaper(paper.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  togglePaper(paper.id);
                }
              }}
            >
              <img
                src={paper.image}
                alt={`${paper.title} cover visual`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
              {isNew && (
                <div className="pointer-events-none absolute left-4 top-2 z-30 rounded-full bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white new-paper-badge">
                  New
                </div>
              )}
              <div
                className={`absolute bottom-0 left-0 right-0 z-10 rounded-b-xl bg-black/50 px-6 py-3 transition-all duration-500 ease-in-out transform ${
                  isActive ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                }`}
              >
                <h3 className="text-left text-2xl font-semibold text-white">{paper.title}</h3>
                {paper.tag && (
                  <span className="mt-1 inline-flex items-center rounded-full bg-slate-100/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
                    {paper.tag}
                  </span>
                )}
              </div>
              <div
                className={`absolute inset-0 z-20 flex h-full flex-col rounded-xl bg-white p-6 text-start transition-all duration-500 ease-in-out transform dark:bg-slate-900 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-1 flex-col overflow-hidden">
                  <div className="flex-1 overflow-y-auto pr-1 sm:pr-2">
                    <div className="flex flex-col gap-3 pb-2">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {paper.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {paper.tag && (
                          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
                            {paper.tag}
                          </span>
                        )}
                        <TypeBadge type={paper.type} />
                        <PresBadge presentation={paper.presentation} />
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {highlightAuthors(paper, paper.authors)}
                      </p>
                      {equalContributionAuthors[paper.id] && (
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          * Equal Contribution
                        </p>
                      )}
                      {false && (
                        <>
                          <p className="text-base font-medium text-darkblue dark:text-light-blue">
                            {paper.venue}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Year: {paper.year}</p>
                        </>
                      )}
                      {paper.summary && (
                        <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          {paper.summary}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-darkblue shadow-sm transition hover:bg-slate-100 dark:bg-slate-800 dark:text-light-blue dark:hover:bg-slate-700"
                      href={paper.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={16} />
                      Paper
                    </a>
                    {paper.codeUrl && (
                      <a
                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-darkblue shadow-sm transition hover:bg-slate-100 dark:bg-slate-800 dark:text-light-blue dark:hover:bg-slate-700"
                        href={paper.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={18} />
                        Code
                      </a>
                    )}
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

export default Research;
