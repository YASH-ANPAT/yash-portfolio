import ParticleWaveCore from "./ParticleWaveCore";

export default function Hero() {
  return (
    <section data-aos="slide-down" id="hero" className="relative z-10 min-h-[120vh] overflow-hidden">
      <ParticleWaveCore />
      <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <span className="hero-label">
            AI Engineer & Software Developer
          </span>

          <h1 className="cinematic-title">
            <span className="cinematic-title-intro">Hello, I'm</span>
            <span className="cinematic-title-main">Yash Anpat</span>
          </h1>

          <h2 className="mt-10 text-xl font-light text-[rgba(255,255,255,0.78)] md:text-2xl">
            Building Intelligent Systems
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]">
            I craft elegant solutions that think. Currently mastering AI & Machine Learning to engineer the next generation of intelligent systems.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#projects">
              <button className="crimson-button rounded-lg px-8 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1">
                Explore Projects
              </button>
            </a>

            <a
              href="/Yash_Anpat_Resume.pdf"
              download
              className="ghost-button rounded-lg border px-8 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
