export default function ProjectCard({ project, index, currentProject, onSelect, totalProjects }) {
  const offset = index - currentProject;
  const depth = Math.abs(offset);
  const rotate = offset === 0 ? 0 : offset < 0 ? 14 : -14;
  const translateZ = offset === 0 ? 0 : -140 * depth;
  const scale = offset === 0 ? 1 : 0.88 - depth * 0.04;

  return (
    <article
      key={index}
      onClick={() => onSelect(index)}
      className="w-[var(--project-card-width)] shrink-0 px-1 transition-all duration-700 ease-out [transform-style:preserve-3d]"
      style={{
        opacity: offset === 0 ? 1 : 0,
        pointerEvents: offset === 0 ? "auto" : "none",
        transform: `translateZ(${translateZ}px) rotateY(${rotate}deg) scale(${scale})`,
        zIndex: totalProjects - depth,
      }}
    >
      <div
        className={`premium-glass premium-glass-hover group mx-auto grid h-[430px] max-h-[58vh] max-w-5xl overflow-hidden rounded-2xl text-left backdrop-blur-2xl transition duration-500 ease-out hover:-translate-y-2 md:h-[350px] md:grid-cols-[0.9fr_1.1fr]
        ${index === currentProject ? "project-active" : "opacity-70"}`}
      >
        <div className={`relative min-h-0 overflow-hidden bg-gradient-to-br ${project.accent}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
                {project.label}
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_32%),linear-gradient(135deg,rgba(0,0,0,0.26),rgba(0,0,0,0.80))]"></div>
          <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            Featured Project
          </div>
        </div>

        <div className="flex min-h-0 flex-col overflow-hidden p-6 md:p-8">
          <h3 className="text-2xl font-semibold leading-snug text-white md:[display:-webkit-box] md:[-webkit-line-clamp:2] md:[-webkit-box-orient:vertical] md:overflow-hidden">
            {project.title}
          </h3>

          <p className="mt-4 overflow-hidden text-base leading-relaxed text-[var(--text-secondary)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
            {project.desc}
          </p>

          <div className="mt-5 flex max-h-[74px] flex-wrap gap-2 overflow-hidden">
            {project.techItems.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="crimson-button rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              View Code
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.045] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:border-[var(--border-accent)] hover:bg-[var(--accent-faint)]"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
