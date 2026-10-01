import Hero from "../components/Hero";
import CapabilitySpectrum from "../components/CapabilitySpectrum";
import ProjectCarousel from "../components/ProjectCarousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <CapabilitySpectrum />

      <section className="home-featured-section" aria-labelledby="featured-systems-title">
        <div className="home-featured-heading">
          <span className="home-editorial-label featured-systems-label" id="featured-systems-title">
            / FEATURED SYSTEMS
          </span>

          <Link className="home-featured-view-all" to="/projects">
            VIEW ALL PROJECTS →
          </Link>

          {/* <p className="featured-systems-description">
            A selection of systems I&apos;ve built across machine learning and
            software engineering.
          </p> */}
        </div>
        <ProjectCarousel />
      </section>

      <section className="home-editorial-section home-labs-section" id="future-projects">
        <div className="home-editorial-label">03 / AI LABS</div>
        <div className="home-editorial-content">
          <h2>Where I experiment with intelligent systems.</h2>
          <p className="home-editorial-description">
            A.U.R.A. Ãƒâ€šÃ‚Â· RAG Ãƒâ€šÃ‚Â· AGENTS Ãƒâ€šÃ‚Â· CODE ANALYSIS Ãƒâ€šÃ‚Â· EXPERIMENTS
          </p>
          <Link className="home-editorial-link" to="/ai-labs">
            EXPLORE AI LABS ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢
          </Link>
        </div>
      </section>

      <section className="home-editorial-section home-about-section" id="about">
        <div className="home-editorial-label">04 / ABOUT</div>
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
            READ ABOUT ME ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢
          </Link>
        </div>
      </section>

      <section className="home-editorial-section home-connect-section" id="contact">
        <div className="home-editorial-label">05 / LET&apos;S CONNECT</div>
        <div className="home-editorial-content">
          <h2>Have an idea? Let&apos;s build something useful.</h2>
          <div className="home-contact-links">
            <a href="mailto:anpatyash16@gmail.com">Email</a>
            <a href="https://github.com/YASH-ANPAT">GitHub</a>
            <a href="https://linkedin.com/in/yash-anpat">LinkedIn</a>
            <a href="https://wellfound.com/u/yash-anpat">Wellfound</a>
          </div>
        </div>
      </section>
    </main>
  );
}

