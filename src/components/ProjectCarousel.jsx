import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isProjectCarouselPaused, setIsProjectCarouselPaused] = useState(false);

  useEffect(() => {
    if (isProjectCarouselPaused) return;

    const slideTimer = setInterval(() => {
      setCurrentProject((project) => (project + 1) % featuredProjects.length);
    }, 3850);

    return () => clearInterval(slideTimer);
  }, [isProjectCarouselPaused]);

  return (
    <section
      id="projects"
      data-aos="fade"
      className="relative z-10 flex flex-col items-center justify-center px-4 text-center md:px-6"
    >
      <div
        className="relative w-full max-w-7xl mx-auto"
        onMouseEnter={() => setIsProjectCarouselPaused(true)}
        onMouseLeave={() => setIsProjectCarouselPaused(false)}
        onFocus={() => setIsProjectCarouselPaused(true)}
        onBlur={() => setIsProjectCarouselPaused(false)}
      >
        <button
          type="button"
          aria-label="Previous project"
          onClick={() =>
            setCurrentProject(
              (currentProject - 1 + featuredProjects.length) %
                featuredProjects.length
            )
          }
          className="hidden sm:flex absolute left-0 lg:left-0 top-[calc(1.5rem+175px)] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-[0_12px_30px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/10 before:via-white/[0.018] before:to-transparent before:opacity-75 hover:-translate-y-[calc(50%+2px)] hover:border-white/20 hover:bg-white/[0.055] hover:text-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.48)]"
        >
          <FiChevronLeft
            className="relative z-10 h-6 w-6"
            strokeWidth={2.6}
          />
        </button>

        <div className="overflow-hidden pt-6 pb-8 [perspective:1400px]">
          <div
            className="flex gap-6 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
            style={{
              "--project-card-width": "clamp(320px, 72vw, 980px)",
              "--project-card-gap": "1.5rem",
              transform: `translateX(calc(50% - (${currentProject} * (var(--project-card-width) + var(--project-card-gap))) - (var(--project-card-width) / 2)))`,
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                currentProject={currentProject}
                onSelect={setCurrentProject}
                totalProjects={featuredProjects.length}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next project"
          onClick={() =>
            setCurrentProject(
              (currentProject + 1) % featuredProjects.length
            )
          }
          className="hidden sm:flex absolute right-0 lg:right-0 top-[calc(1.5rem+175px)] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-[0_12px_30px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/10 before:via-white/[0.018] before:to-transparent before:opacity-75 hover:-translate-y-[calc(50%+2px)] hover:border-white/20 hover:bg-white/[0.055] hover:text-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.48)]"
        >
          <FiChevronRight
            className="relative z-10 h-6 w-6"
            strokeWidth={2.6}
          />
        </button>

        <div className="mt-0 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() =>
              setCurrentProject(
                (currentProject - 1 + featuredProjects.length) %
                  featuredProjects.length
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-lg shadow-black/25 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.055] hover:text-white sm:hidden"
          >
            <FiChevronLeft className="h-5 w-5" strokeWidth={2.6} />
          </button>

          {featuredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => setCurrentProject(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? "w-8 bg-[var(--accent-primary)]"
                  : "w-2.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}

          <button
            type="button"
            aria-label="Next project"
            onClick={() =>
              setCurrentProject(
                (currentProject + 1) % featuredProjects.length
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-lg shadow-black/25 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.055] hover:text-white sm:hidden"
          >
            <FiChevronRight className="h-5 w-5" strokeWidth={2.6} />
          </button>

        </div>
      </div>
    </section>
  );
}
