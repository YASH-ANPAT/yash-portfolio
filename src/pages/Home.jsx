import Hero from "../components/Hero";
import CapabilitySpectrum from "../components/CapabilitySpectrum";
import ProjectCarousel from "../components/ProjectCarousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <CapabilitySpectrum />

      <section
        className="home-featured-section"
        id="featured-systems"
        aria-labelledby="featured-systems-title"
      >
        <div className="home-featured-heading">
          <span
            className="home-editorial-label featured-systems-label"
            id="featured-systems-title"
          >
            / FEATURED SYSTEMS
          </span>

          <Link className="home-featured-view-all" to="/projects">
            VIEW ALL PROJECTS →
          </Link>
        </div>

        <ProjectCarousel />
      </section>

      <section
        className="home-editorial-section home-labs-section"
        id="future-projects"
      >
        <div className="home-editorial-label">/ AI LABS</div>

        <div className="home-editorial-content">
          <h2>
            Where I experiment with{" "}
            <span
              className="text-[var(--color-accent)]"
              style={{
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontWeight: "inherit",
              }}
            >
              intelligent
            </span>{" "}
            systems.
          </h2>

          <p className="home-editorial-description">
            A.U.R.A. · CODE ANALYSIS · EXPERIMENTS
          </p>

          <Link className="home-editorial-link" to="/ai-labs">
            EXPLORE AI LABS →
          </Link>
        </div>
      </section>

      <section
        className="home-editorial-section home-about-section"
        id="about"
      >
        <div className="home-editorial-label">/ ABOUT</div>

        <div className="home-editorial-content">
          <h2>
            I&apos;m interested in the space between machine learning and
            software engineering.
          </h2>

          <p className="home-editorial-description">
            I like understanding the problem, building the system, and figuring
            out how the pieces should work together.
          </p>

          <Link className="home-editorial-link" to="/about">
            READ ABOUT ME →
          </Link>
        </div>
      </section>

      <section
        className="home-editorial-section home-connect-section"
        id="contact"
      >
        <div className="home-editorial-label">
          / LET&apos;S CONNECT
        </div>

        <div className="home-editorial-content">
          <h2>Have an idea?</h2>
          <h2>
            Let&apos;s{" "}
            <span
              className="text-[var(--color-accent)]"
              style={{
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontWeight: "inherit",
              }}
            >
              build
            </span>{" "}
            something useful.
          </h2>

          <div className="home-contact-links">
            <a href="mailto:anpatyash16@gmail.com">Email</a>
            <a
              href="https://github.com/YASH-ANPAT"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yash-anpat"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://wellfound.com/u/yash-anpat"
              target="_blank"
              rel="noreferrer"
            >
              Wellfound
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}