import { aiLabs } from "../data/aiLabs";

export default function AILabs() {
  return (
    <section
      id="future-projects"
      data-aos="fade"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
    >
      <h2 className="section-title mb-12 pb-1 text-4xl font-bold">
        AI Project Lab
      </h2>

      <p className="mb-12 max-w-2xl text-[var(--text-secondary)]">
        This section represents the AI systems I am currently planning and
        building as part of my journey toward becoming a Generative AI developer.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
        {aiLabs.map((project) => (
          <div
            key={project}
            className="premium-glass premium-glass-hover rounded-xl p-8 text-left backdrop-blur transition duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold mb-4">{project}</h3>

            <p className="text-[var(--text-secondary)]">
              Planned AI system currently under development as part of my Generative AI learning roadmap.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
