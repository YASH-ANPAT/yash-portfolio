import ProjectCard from "../components/ProjectCard";
import { projectCards } from "../data/projects";

export default function Projects() {
  return (
    <section className="relative z-10 px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="hero-label">PROJECTS MODULE</span>
          <h1 className="section-title mt-4 text-4xl font-bold md:text-5xl">
            Full Project Showcase
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              currentProject={index}
              totalProjects={projectCards.length}
              isStandalone
            />
          ))}
        </div>
      </div>
    </section>
  );
}
