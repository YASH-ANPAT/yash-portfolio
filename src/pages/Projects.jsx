import { useEffect, useRef, useState } from "react";
import { projectCards } from "../data/projects";

const projectOrder = [
  "Predictive Equipment Maintenance Platform",
  "AI Document Assistant",
  "Food Delivery Time Prediction",
  "NewsHub",
  "MediKeeps - Hospital Management System",
  "Wumpus Game AI",
  "School Management System",
];

const orderedProjects = projectOrder
  .map((title) => projectCards.find((project) => project.title === title))
  .filter(Boolean);

function ProjectVisual({ project, number }) {
  return (
    <div className="projects-showcase-visual">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="projects-showcase-image"
        />
      ) : (
        <div className="projects-showcase-placeholder">
          <span>{project.label}</span>
          <small>PROJECT PREVIEW UNAVAILABLE</small>
        </div>
      )}
      <span className="projects-showcase-visual-number">{number}</span>
    </div>
  );
}

export default function Projects() {
  const projectsPageRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const page = projectsPageRef.current;
    if (!page) return undefined;

    const items = [...page.querySelectorAll(".projects-showcase-item")];
    const visibleItems = new Map();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      items.forEach((item) => {
        item.dataset.revealed = "true";
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleItems.set(entry.target, entry);
            entry.target.dataset.revealed = "true";
          } else {
            visibleItems.delete(entry.target);
          }
        });

        const viewportCenter = window.innerHeight / 2;
        const nearestItem = [...visibleItems.keys()].reduce(
          (nearest, item) => {
            const distance = Math.abs(
              item.getBoundingClientRect().top +
              item.getBoundingClientRect().height / 2 -
              viewportCenter
            );

            if (!nearest || distance < nearest.distance) {
              return {
                distance,
                index: item.dataset.projectIndex,
              };
            }

            return nearest;
          },
          null
        );

        setActiveProject(nearestItem ? nearestItem.index : null);
      },
      { rootMargin: "-150px 100px 0px 0px", threshold: 0.18 }
    );

    items.forEach((item, index) => {
      item.dataset.projectIndex = String(index);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={projectsPageRef}
      className="projects-page relative z-10 px-6 pb-28 pt-32 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <header className="projects-page-header">
          <span className="projects-page-module projects-page-header-item">
            PROJECTS MODULE
          </span>

          <h1 className="projects-page-title projects-page-header-item">
            Project Showcase
          </h1>

          <p className="projects-page-intro projects-page-header-item">
            Systems, applications and intelligent tools I&apos;ve built...!
          </p>

          <p className="projects-page-meta projects-page-header-item">
            07 PROJECTS <span aria-hidden="true">·</span> AI / ML / SOFTWARE
          </p>
        </header>

        <div className="projects-showcase-list">
          {orderedProjects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.title}
                className={`projects-showcase-item ${isReversed ? "projects-showcase-item-reversed" : ""
                  } ${activeProject === String(index) ? "projects-showcase-item-active" : ""
                  }`}
              >
                <span className="projects-showcase-number">{number}</span>
                <div className="projects-showcase-copy">
                  <h2 className="projects-showcase-title">{project.title}</h2>

                  {project.description && (
                    <p className="projects-showcase-description">
                      {project.description}
                    </p>
                  )}

                  {project.technologies.length > 0 && (
                    <ul className="projects-showcase-technologies" aria-label="Technologies">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  )}

                  <div className="projects-showcase-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="crimson-button flat-lg px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flat-lg border border-white/10 bg-white/[0.045] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-[var(--border-accent)] hover:bg-[var(--accent-faint)]"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>

                <ProjectVisual project={project} number={number} />
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
