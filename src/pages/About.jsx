const identityFacts = [
  ["Focus", "AI / ML · Intelligent Systems"],
  ["Based in", "Pune, India"],
  ["Education", "Computer Engineering · SPPU"],
  ["Graduation", "2027"],
];

const thinkingPrinciples = [
  {
    number: "01",
    title: "BUILD FOR THE PROBLEM",
    text: "Understand what actually needs to be solved before deciding which technology belongs in the system.",
  },
  {
    number: "02",
    title: "MODELS ARE PART OF THE SYSTEM",
    text: "A model is useful only when it fits into a reliable application, pipeline, or workflow.",
  },
  {
    number: "03",
    title: "KEEP LEARNING BY BUILDING",
    text: "I learn fastest by turning ideas into working systems, testing them, and iterating on them.",
  },
];

const buildingProgression = [
  {
    number: "01",
    title: "SOFTWARE",
    text: "Building applications and understanding how software systems fit together.",
  },
  {
    number: "02",
    title: "MACHINE LEARNING",
    text: "Exploring how data and models can be used to solve practical problems.",
  },
  {
    number: "03",
    title: "INTELLIGENT SYSTEMS",
    text: "Combining models, retrieval, APIs, and application logic into useful workflows.",
  },
  {
    number: "04",
    title: "PRODUCT THINKING",
    text: "Turning technical ideas into software that people can actually use.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-profile-page relative z-10 px-6 pb-28 pt-32 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="about-profile-intro">
          <div className="about-profile-identity">
            <span className="about-profile-label">01 / ABOUT / PROFILE</span>
            <h1 className="about-profile-name">YASH ANPAT</h1>
            <p className="about-profile-role">
              AI/ML ENGINEER · SOFTWARE DEVELOPER
            </p>
          </div>

          <div className="about-profile-intro-side">
            <p className="about-profile-positioning">
              I build intelligent software systems that turn models into useful
              products.
            </p>
            <p className="about-profile-supporting">
              My work sits at the intersection of machine learning and software
              engineering, from predictive systems and data-driven applications
              to RAG-powered tools. I&apos;m interested in building software that
              doesn&apos;t just run, but can reason, adapt, and solve real problems.
            </p>
            <dl className="about-profile-facts">
              {identityFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section className="about-profile-think">
          <div className="about-profile-think-mark">02 / HOW I THINK</div>
          <div className="about-profile-think-content">
            <h2 className="about-profile-think-statement">
              I don&apos;t start with the model.
              <br />
              I start with the problem.
            </h2>
            <div className="about-profile-think-principles">
              {thinkingPrinciples.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
            <div className="about-profile-think-flow" aria-label="Engineering flow">
              {["PROBLEM", "DATA", "MODEL", "SYSTEM", "PRODUCT"].map(
                (item, index, flow) => (
                  <div className="about-profile-think-flow-node" key={item}>
                    <span>{item}</span>
                    {index < flow.length - 1 && <b aria-hidden="true">→</b>}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="about-profile-into">
          <div className="about-profile-section-mark">03 / WHAT I&apos;M INTO</div>
          <div className="about-profile-into-content">
            <h2 className="about-profile-into-statement">
              I like building at the point where software starts becoming
              intelligent.
            </h2>
            <p className="about-profile-into-description">
              I&apos;m interested in machine learning, intelligent systems,
              developer tools, and the engineering required to turn ideas into
              usable software. I enjoy working across the stack — understanding
              the problem, experimenting with models, connecting the pieces,
              and turning the result into something people can actually use.
            </p>
            <div className="about-profile-into-flow" aria-label="Development progression">
              {["MACHINE LEARNING", "INTELLIGENT SYSTEMS", "SOFTWARE", "USEFUL PRODUCTS"].map(
                (item, index, flow) => (
                <div className="about-profile-flow-node" key={item}>
                  <span>{item}</span>
                  {index < flow.length - 1 && (
                    <b aria-hidden="true">→</b>
                  )}
                </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="about-profile-evolution">
          <div className="about-profile-evolution-heading">
            <span className="about-profile-label">04 / FROM IDEAS TO SYSTEMS</span>
            <h2>I learn by turning ideas into working systems.</h2>
          </div>
          <div className="about-profile-evolution-content">
            <p className="about-profile-evolution-description">
              My work has grown from building conventional software applications
              to working with machine learning, intelligent systems, and
              RAG-powered tools. Along the way, I&apos;ve become more interested in
              how the different layers of a system fit together — from
              understanding the problem and working with data to integrating
              models and turning the result into something useful.
            </p>
            <div className="about-profile-building-progression">
              {buildingProgression.map((stage) => (
                <article key={stage.number}>
                  <span>{stage.number}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-profile-education">
          <div className="about-profile-education-label">05 / EDUCATION</div>
          <div className="about-profile-education-content">
            <h2>COMPUTER ENGINEERING</h2>
            <dl className="about-profile-education-facts">
              <div>
                <dt>DEGREE</dt>
                <dd>Computer Engineering</dd>
              </div>
              <div>
                <dt>INSTITUTION</dt>
                <dd>AISSMS College of Engineering, Pune</dd>
              </div>
              <div>
                <dt>UNIVERSITY</dt>
                <dd>Savitribai Phule Pune University (SPPU)</dd>
              </div>
              <div>
                <dt>GRADUATION</dt>
                <dd className="about-profile-education-graduation">2027</dd>
              </div>
            </dl>
            <p className="about-profile-education-description">
              Currently pursuing Computer Engineering with a focus on building
              a strong foundation in software engineering, machine learning,
              and intelligent systems.
            </p>
          </div>
        </section>

        <section className="about-profile-next">
          <span className="about-profile-label">06 / WHAT&apos;S NEXT</span>
          <h2>Build better systems. Keep learning. Keep shipping.</h2>
          <p>
            I&apos;m continuing to explore machine learning, intelligent
            systems, and the engineering around them — with a focus on building
            software that is useful, reliable, and thoughtfully designed.
          </p>
          {/* <span className="about-profile-closing-line">MORE TO BUILD.</span> */}
          <div className="about-profile-socials">
            <a href="https://github.com/YASH-ANPAT" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/yash-anpat" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="mailto:anpatyash16@gmail.com" className="ml-1 text-[var(--accent-primary)] hover:underline">
              Gmail ↗
            </a>
            <a href="https://wellfound.com/u/yash-anpat" className="ml-1 text-[var(--accent-primary)] hover:underline">
              Wellfound ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
