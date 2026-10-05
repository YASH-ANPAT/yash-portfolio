import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    number: "08",
    animationState: 7,
    title: "INTELLIGENCE",
    technologies: [
      "MACHINE LEARNING",
      "LLMs",
      "RAG",
      "LangChain",
      "FAISS",
      "Sentence Transformers",
    ],
  },
  {
    number: "07",
    animationState: 6,
    title: "SOFTWARE",
    technologies: ["Python", "C++", "Django", "Flask", "FastAPI", "REST APIs"],
  },
  {
    number: "06",
    animationState: 5,
    title: "AI ENGINEERING",
    technologies: ["Streamlit", "Groq", "LLM Applications", "Agentic AI"],
  },
  {
    number: "04",
    animationState: 3,
    title: "CLOUD / INFRA",
    technologies: ["AWS", "Google Cloud", "CI/CD", "Kubernetes"],
  },
  {
    number: "05",
    animationState: 4,
    title: "DATA",
    technologies: ["Data Processing", "Data Analysis", "Feature Engineering"],
  },
  {
    number: "03",
    animationState: 2,
    title: "DEVELOPER TOOLS",
    technologies: ["Git", "GitHub", "VS Code", "Docker"],
  },
  {
    number: "01",
    animationState: 0,
    title: "MACHINE LEARNING",
    technologies: [
      "XGBoost",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PyTorch",
      "ML Pipelines",
      "SHAPS",
      "Seaborn",
    ],
  },
  {
    number: "02",
    animationState: 1,
    title: "WEB / FRONTEND",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Vite", "Tailwind"],
  },
];

export default function CapabilitySpectrum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) {
      return undefined;
    }

    const cycle = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % capabilities.length);
    }, 3000);

    return () => {
      window.clearInterval(cycle);
    };
  }, [isPaused, reducedMotion]);

  const resumeCycle = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 90);
  };

  const activeCapability = capabilities[activeIndex];

  return (
    <section
      className="home-capability-section"
      aria-labelledby="capability-spectrum-title"
    >
      <header className="home-capability-header">
        <span
          className="home-capability-label"
          id="capability-spectrum-title"
        >
          / CAPABILITY SPECTRUM
        </span>

        <p>
          Tools and tech I use to build intelligent software systems.
        </p>
      </header>

      <div
        className={`home-capability-grid home-capability-active-${activeCapability.animationState}`}
        onMouseLeave={resumeCycle}
        onFocus={() => setIsPaused(true)}
        onBlur={resumeCycle}
      >
        {capabilities.map((capability, index) => (
          <article
            className={`home-capability-block ${
              index === activeIndex ? "home-capability-block-active" : ""
            }`}
            key={capability.title}
            tabIndex="0"
            onMouseEnter={() => {
              setActiveIndex(index);
              setIsPaused(true);

              if (resumeTimeoutRef.current) {
                window.clearTimeout(resumeTimeoutRef.current);
              }
            }}
            onMouseLeave={resumeCycle}
            onFocus={() => {
              setActiveIndex(index);
              setIsPaused(true);

              if (resumeTimeoutRef.current) {
                window.clearTimeout(resumeTimeoutRef.current);
              }
            }}
            onBlur={resumeCycle}
            aria-label={`${capability.title}: ${capability.technologies.join(
              ", "
            )}`}
          >
            <div className="home-capability-block-heading">
              <span>{capability.number}</span>
              <h2>{capability.title}</h2>
            </div>

            <div className="home-capability-tech">
              {capability.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}