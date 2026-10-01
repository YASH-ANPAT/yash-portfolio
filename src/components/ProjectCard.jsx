export default function ProjectCard({
  project,
  index,
  currentProject = 0,
  onSelect = () => {},
  totalProjects = 1,
  isStandalone = false,
}) {
  const isActive = isStandalone || index === currentProject;

  return (
    <article
      onClick={() => onSelect(index)}
      className={
        isStandalone
          ? "w-full shrink-0"
          : "w-[var(--project-card-width)] shrink-0"
      }
      style={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
        zIndex: totalProjects - index,
      }}
    >
      <div className="group mx-auto grid h-[375px] max-w-[3000px] overflow-hidden border border-[var(--color-border)] bg-black text-left md:grid-cols-[1.1fr_0.9fr]">

        <div className="flex min-w-0 flex-col justify-between p-6 sm:p-7 md:p-8">

          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-[var(--color-text-secondary)]">
                {project.label}
              </span>
            </div>

            <h3 className="max-w-2xl font-[var(--font-heading)] text-xl font-medium leading-[0.98] tracking-[-0.04em] text-[var(--color-text)] sm:text-2xl lg:text-3xl">
              {project.title}
            </h3>

            {project.description && (
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                {project.description}
              </p>
            )}
          </div>

          <div className="mt-10">
            <div className="flex max-w-2xl flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-border)] pt-4">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="font-mono text-[0.68rem] tracking-[0.08em] text-[var(--color-accent)]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="font-mono text-xs tracking-[0.12em] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                >
                  LIVE ↗
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="font-mono text-xs tracking-[0.12em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
                >
                  GITHUB ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="relative min-h-0 overflow-hidden border-t border-[var(--color-border)] md:min-h-0 md:border-l md:border-t-0">
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-zinc-950">
              <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-text-secondary)]">
                {project.label}
              </span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-5 right-5 font-mono text-[0.6rem] tracking-[0.16em] text-white/50">
            SYSTEM {String(index + 1).padStart(2, "0")}
          </div>
        </div>

      </div>
    </article>
  );
}










