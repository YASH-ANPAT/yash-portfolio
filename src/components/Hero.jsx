import { Link } from "react-router-dom";
import ParticleWaveCore from "./ParticleWaveCore";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* =====================================================
          INTERACTIVE PARTICLE FIELD

          The particle core starts slightly before the text,
          making it feel like the interface is coming online.
          ===================================================== */}
      <ParticleWaveCore />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-28 md:px-10 md:pt-32 lg:px-12">
        <div className="w-full">
          <div className="max-w-2xl">
            {/* =================================================
                HERO IDENTITY LABEL
                ================================================= */}
            <div className="hero-reveal hero-reveal-label mb-8">
              <p className="hero-label mb-0">
                AIML Engineer / Software Developer
              </p>
            </div>

            {/* =================================================
                MAIN HERO HEADING

                Each line has its own reveal timing.
                ================================================= */}
            <h1 id="hero-title" className="hero-title">
              <span className="hero-reveal hero-reveal-name hero-name">
                Hey, I am Yash Anpat
              </span>

              <span className="hero-reveal hero-reveal-headline hero-headline">
                I build intelligent systems!
              </span>
            </h1>

            {/* =================================================
                SUPPORTING DESCRIPTION
                ================================================= */}
            <div className="hero-reveal hero-reveal-description">
              <p className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
                I design and build practical software at the intersection of
                artificial intelligence, machine learning, and software
                engineering.
              </p>
            </div>

            {/* =================================================
                PRIMARY ACTIONS
                ================================================= */}
            <div className="hero-reveal hero-reveal-actions mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="crimson-button rounded-lg px-7 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore Projects
              </Link>

              <Link
                to="/ai-labs"
                className="ghost-button rounded-lg px-7 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore AI Labs
              </Link>
            </div>

            {/* =================================================
                TECHNOLOGY SNAPSHOT

                This is intentionally the final element to appear.
                ================================================= */}
            <div className="hero-reveal hero-reveal-stack mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>RAG</span>
              <span>React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}