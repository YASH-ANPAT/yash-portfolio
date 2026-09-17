export default function About() {
  return (
    <section
      id="about"
      data-aos="fade"
      className="min-h-screen flex items-center justify-center px-6 relative z-10"
    >
      <div className="max-w-6xl w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <span className="hero-label">
              PROFILE MODULE
            </span>

            <h2 className="section-title text-4xl font-bold mb-6">
              CORE IDENTITY
            </h2>

            <div className="mb-10">
              <p className="text-4xl font-light leading-tight text-white max-w-xl">
                Building Intelligent Systems
              </p>

              <p className="text-4xl font-light leading-tight text-[var(--accent-primary)] max-w-xl">
                For Real-World Impact
              </p>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Focused on artificial intelligence, software engineering,
              and cybersecurity while building practical systems that
              solve real-world challenges.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="about-tag">
                Computer Engineering
              </span>

              <span className="about-tag">
                AI Developer
              </span>

              <span className="about-tag">
                Cybersecurity
              </span>

              <span className="about-tag">
                Machine Learning
              </span>

              <span className="about-tag">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
