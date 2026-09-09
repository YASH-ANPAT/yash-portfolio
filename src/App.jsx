import { FaPython, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiTensorflow } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

function ParticleWaveCore() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) {
      return undefined;
    }

    const DPR = Math.min(window.devicePixelRatio || 1, 1.6);
    const particles = [];
    const latSegments = 42;
    const lngSegments = 72;
    const fieldDepth = 420;

    for (let lat = 0; lat <= latSegments; lat += 1) {
      const v = lat / latSegments;
      const theta = v * Math.PI;

      for (let lng = 0; lng < lngSegments; lng += 1) {
        const u = lng / lngSegments;
        const phi = u * Math.PI * 2;

        particles.push({
          theta,
          phi,
          seed: Math.sin(phi * 3.7 + theta * 5.1),
          band: Math.sin(theta * 1.8),
        });
      }
    }

    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.floor(width * DPR));
      canvas.height = Math.max(1, Math.floor(height * DPR));
      context.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const draw = (time) => {
      const t = time * 0.00048;
      const cx = width * 0.52;
      const cy = height * 0.5;
      const baseRadius = Math.min(width, height) * 0.31;
      const scaleY = 1.06;
      const scaleX = 0.96;

      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i += 1) {
        const point = particles[i];
        const waveA = Math.sin(point.theta * 4.2 + t * 1.05 + point.phi * 2.1);
        const waveB = Math.cos(point.phi * 5.1 - t * 0.85 + point.theta * 3.2);
        const waveC = Math.sin((point.theta + point.phi) * 2.7 - t * 1.2 + point.seed * 2.0);
        const breathe = 1 + Math.sin(t * 1.4) * 0.028;
        const displacedRadius = baseRadius * breathe * (1 + waveA * 0.11 + waveB * 0.06 + waveC * 0.035);

        const sinTheta = Math.sin(point.theta);
        const cosTheta = Math.cos(point.theta);
        const cosPhi = Math.cos(point.phi);
        const sinPhi = Math.sin(point.phi);

        let x = displacedRadius * sinTheta * cosPhi * scaleX;
        let y = displacedRadius * cosTheta * scaleY;
        let z = displacedRadius * sinTheta * sinPhi;

        const rotateY = t * 0.55;
        const rotateX = Math.sin(t * 0.6) * 0.18;

        const x1 = x * Math.cos(rotateY) - z * Math.sin(rotateY);
        const z1 = x * Math.sin(rotateY) + z * Math.cos(rotateY);
        const y1 = y * Math.cos(rotateX) - z1 * Math.sin(rotateX);
        const z2 = y * Math.sin(rotateX) + z1 * Math.cos(rotateX);

        x = x1;
        y = y1;
        z = z2;

        const perspective = fieldDepth / (fieldDepth - z);
        const px = cx + x * perspective;
        const py = cy + y * perspective;
        const depthFactor = (z + baseRadius) / (baseRadius * 2);
        const poleFade = Math.pow(Math.sin(point.theta), 0.09);
        const alpha = (0.08 + depthFactor * 0.42) * poleFade;
        const size = 0.45 + perspective * 1.1 + point.band * 0.28;

        context.beginPath();
        context.fillStyle = `rgba(255,59,59,${alpha})`;
        context.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="ai-core-container">
      <div className="ai-core-aura"></div>
      <div className="ai-core-vignette"></div>
      <canvas ref={canvasRef} className="ai-core-canvas" aria-hidden="true"></canvas>
    </div>
  );
}



export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
    });
  }, []);


  const [currentProject, setCurrentProject] = useState(0);
  const [isProjectCarouselPaused, setIsProjectCarouselPaused] = useState(false);

  const projects = [
    {
      title: "AI Document Assistant",
      desc: "A Retrieval-Augmented Generation chatbot that lets users ask questions about PDF documents using semantic search, FAISS retrieval, and GPT-OSS 20B for grounded answers with source references.",
      tech: "Python · RAG · Sentence Transformers · FAISS · GPT-OSS 20B · Groq · Streamlit",
      link: "https://github.com/YASH-ANPAT/ai-document-assistant",
      demo: "https://yash-rag-chatbot.streamlit.app/"
    },
    {
      title: "Predictive Maintenance Platform",
      desc: "An end-to-end machine learning platform that monitors equipment telemetry, predicts failure probability using XGBoost, generates maintenance recommendations, and provides SHAP-based explanations through a React dashboard.",
      tech: "Python · XGBoost · FastAPI · PostgreSQL · React · SHAP · Docker",
      link: "https://github.com/YASH-ANPAT/predictive-maintenance-platform",
      demo: "https://predictive-maintenance-platform-gamma.vercel.app/"
    },
    {
      title: "Delivery Time Prediction (ML Web App)",
      desc: "A machine learning-based web application that predicts food delivery time using multiple r egression, with real-world location input handled via OpenCage API and a user-friendly Flask interface.",
      tech: "Python · Flask · Pandas · Scikit-learn · HTML · CSS · REST API",
      link: "https://github.com/YASH-ANPAT/food-delivery-time-prediction",
      demo: "https://food-delivery-time-prediction-nal6.onrender.com/"
    },
    {
      title: "NewsHub (News API Web App)",
      desc: "A Flask-based web application that fetches real-time news using NewsAPI, allowing users to search topics and view articles with a clean UI.",
      tech: "Python · Flask · HTML · CSS · REST API",
      link: "https://github.com/YASH-ANPAT/news-api-flask-project"
    },
    {
      title: "MediKeeps(Hospital Management System)",
      desc: "A full-stack system designed to manage hospital operations including doctors, patients, and appointment scheduling.",
      tech: "Python · Django · HTML · CSS · Database",
      link: "https://github.com/YASH-ANPAT/medikeeps-hospital-management-system"
    },
    {
      title: "School Management System",
      desc: "A system designed to manage student records and administrative operations efficiently.",
      tech: "Python · SQL · HTML · CSS",
      link: "https://github.com/YASH-ANPAT"
    },
  ];

  const projectVisuals = [
    {
      accent: "from-red-950/30 via-zinc-900/70 to-black",
      label: "RAG SYSTEM",
      image: "/project-images/ai-document-assistant.png",
      techItems: [
        "Python",
        "RAG",
        "Sentence Transformers",
        "FAISS",
        "GPT-OSS 20B",
        "Groq",
        "Streamlit"
      ],
    },
    {
      accent: "from-red-950/40 via-zinc-900/70 to-black",
      label: "ML PLATFORM",
      image: "/project-images/predictive-maintenance.png",
      techItems: [
        "Python",
        "XGBoost",
        "FastAPI",
        "PostgreSQL",
        "React",
        "SHAP",
      ],
    },
    {
      accent: "from-zinc-800/80 via-red-950/20 to-black",
      label: "ML App",
      image: "/project-images/food-delivery.png",
      techItems: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML", "CSS", "REST API"],
    },
    {
      accent: "from-neutral-800/85 via-zinc-950/60 to-red-950/20",
      label: "News API",
      image: "/project-images/newshub.jpeg",
      techItems: ["Python", "Flask", "HTML", "CSS", "REST API"],
    },
    {
      accent: "from-red-950/25 via-neutral-900/75 to-black",
      label: "Django",
      image: "/project-images/medikeeps.jpeg",
      techItems: ["Python", "Django", "HTML", "CSS", "Database"],
    },
    {
      accent: "from-zinc-700/50 via-black to-red-950/25",
      label: "Admin",
      image: "/project-images/school-management.png",
      techItems: ["Python", "SQL", "HTML", "CSS"],
    },
  ];

  const projectCards = projects.map((project, index) => ({
    ...project,
    ...projectVisuals[index],
  }));

  useEffect(() => {
    if (isProjectCarouselPaused) return;

    const slideTimer = setInterval(() => {
      setCurrentProject((project) => (project + 1) % projectCards.length);
    }, 3850);

    return () => clearInterval(slideTimer);
  }, [isProjectCarouselPaused, projectCards.length]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* GLOBAL BACKGROUND */}
      {/* Deep Black Base */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,#030303_0%,#050505_50%,#030303_100%)]"></div>

      {/* Hero Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,59,59,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,59,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-90"></div>

      {/* Hero Right Accent */}
      <div className="fixed inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(255,59,59,0.02)_80%,transparent_100%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.009)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:112px_112px] opacity-50"></div>

      <div className="fixed h-[1000px] w-[1000px] rounded-full bg-[rgba(255,59,59,0.05)] opacity-15 blur-[180px] top-[-520px] left-[-520px] animate-float pointer-events-none"></div>

      <div className="fixed h-[800px] w-[800px] rounded-full bg-[rgba(255,59,59,0.04)] opacity-10 blur-[180px] bottom-[-420px] right-[-420px] animate-floatSlow pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 [perspective:1200px]">

        <div className="group relative flex items-center justify-between overflow-hidden rounded-full bg-white/[0.045] px-10 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.44),inset_0_1px_1px_rgba(255,255,255,0.11),inset_0_-10px_24px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition duration-500 [transform-style:preserve-3d] hover:-translate-y-0.5 hover:bg-white/[0.055] hover:shadow-[0_22px_54px_rgba(0,0,0,0.5),0_0_30px_rgba(255,59,59,0.08),inset_0_1px_1px_rgba(255,255,255,0.13),inset_0_-10px_24px_rgba(0,0,0,0.2)]">

          {/*  Glass reflection layer */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_72%_45%,rgba(255,255,255,0.06),transparent_28%)]"></div>
          <div className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(110deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02)_32%,rgba(255,255,255,0.01)_68%,rgba(255,255,255,0.055))]"></div>
          <div className="pointer-events-none absolute left-7 top-0 h-[2px] w-[24%] rounded-full bg-gradient-to-r from-transparent via-white/42 to-transparent blur-[1px]"></div>
          <div className="pointer-events-none absolute left-0 top-5 h-7 w-[2px] rounded-full bg-gradient-to-b from-transparent via-white/28 to-transparent blur-[1px]"></div>
          <div className="pointer-events-none absolute left-3 top-2 h-8 w-24 rounded-full bg-white/[0.055] blur-xl"></div>
          <div className="pointer-events-none absolute bottom-0 right-8 h-[2px] w-[26%] rounded-full bg-gradient-to-r from-transparent via-white/36 to-transparent blur-[1px]"></div>
          <div className="pointer-events-none absolute bottom-5 right-0 h-7 w-[2px] rounded-full bg-gradient-to-b from-transparent via-white/24 to-transparent blur-[1px]"></div>
          <div className="pointer-events-none absolute bottom-2 right-4 h-8 w-28 rounded-full bg-white/[0.045] blur-xl"></div>
          <div className="pointer-events-none absolute inset-x-9 bottom-0 h-4 translate-y-1/2 rounded-full bg-black/24 blur-lg"></div>
          <div className="pointer-events-none absolute inset-0 -z-10 translate-y-2 rounded-full bg-black/30 blur-lg"></div>

          {/* Logo */}
          <h1 className="group/logo relative z-10 cursor-default text-base font-semibold tracking-wide text-white drop-shadow-[0_1px_10px_rgba(255,255,255,0.12)]">
            <span className="absolute -inset-x-4 -inset-y-2 rounded-full bg-[radial-gradient(circle,rgba(255,59,59,0.42),transparent_58%)] opacity-0 blur-xl transition duration-500 group-hover/logo:opacity-80"></span>
            <span className="relative bg-[linear-gradient(90deg,#ffffff,#ffffff)] bg-clip-text text-transparent transition duration-500 group-hover/logo:animate-pulse group-hover/logo:bg-[linear-gradient(90deg,#f5f5f5,#ff3b3b,#f5f5f5)] group-hover/logo:drop-shadow-[0_0_16px_rgba(255,59,59,0.55)]">
              Yash Anpat
            </span>
          </h1>

          {/* Links */}
          <div className="relative z-10 flex gap-8 text-sm text-[var(--text-secondary)]">

            <a href="#hero" className="rounded-full px-1 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--text-primary)] hover:drop-shadow-[0_0_12px_rgba(255,59,59,0.36)]">
              Home
            </a>

            <a href="#about" className="rounded-full px-1 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--text-primary)] hover:drop-shadow-[0_0_12px_rgba(255,59,59,0.36)]">
              About
            </a>

            <a href="#skills" className="rounded-full px-1 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--text-primary)] hover:drop-shadow-[0_0_12px_rgba(255,59,59,0.36)]">
              Skills
            </a>

            <a href="#projects" className="rounded-full px-1 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--text-primary)] hover:drop-shadow-[0_0_12px_rgba(255,59,59,0.36)]">
              Projects
            </a>

            <a href="#future-projects" className="rounded-full px-1 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--text-primary)] hover:drop-shadow-[0_0_12px_rgba(255,59,59,0.36)]">
              AI Lab
            </a>

            <a href="#contact" className="rounded-full px-1 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--text-primary)] hover:drop-shadow-[0_0_12px_rgba(255,59,59,0.36)]">
              Contact
            </a>

          </div>

        </div>

      </nav>


      <main className="relative z-10">
        {/* HERO SECTION */}
        <section data-aos="slide-down" id="hero" className="relative z-10 min-h-[120vh] overflow-hidden bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]">
          {/* BACKGROUND GRID & ATMOSPHERE */}
          <div className="absolute inset-0 z-0">
            {/* Deep black base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
            {/* Subtle structured grid - visible in empty spaces */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,59,59,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,59,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-90"></div>
            {/* Micro accent - far right only, very subtle */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(255,59,59,0.02)_80%,transparent_100%)]"></div>
          </div>

          {/* AI CORE - Right Side */}
          <ParticleWaveCore />
          {/* CONTENT - Left Side */}
          <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              {/* Label */}
              <span className="hero-label">
                AI Engineer & Software Developer
              </span>

              {/* Main Heading */}
              <h1 className="cinematic-title">
                <span className="cinematic-title-intro">Hello, I'm</span>
                <span className="cinematic-title-main">Yash Anpat</span>
              </h1>

              {/* Subtitle */}
              <h2 className="mt-10 text-xl font-light text-[rgba(255,255,255,0.78)] md:text-2xl">
                Building Intelligent Systems
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]">
                I craft elegant solutions that think. Currently mastering AI & Machine Learning to engineer the next generation of intelligent systems.
              </p>

              {/* CTA Buttons */}
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


        {/* ABOUT SECTION */}
        <section
          id="about"
          data-aos="fade"
          className="min-h-screen flex items-center justify-center px-6 relative z-10"
        >
          <div className="max-w-6xl w-full">
            <div className="max-w-6xl mx-auto">

              {/* LEFT SIDE */}

              <div className="text-left">
                <span className="hero-label">
                  PROFILE MODULE
                </span>

                {/* <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] mb-4">
                  PROFILE MODULE
                </p> */}

                <h2 className="section-title text-4xl font-bold mb-6">
                  CORE IDENTITY
                </h2>

                <div className="mb-10">

                  <p className="text-4xl font-light leading-tight text-white max-w-xl">
                    Building Intelligent Systems
                  </p>

                  <p className="text-4xl font-light leading-tight text-[var(--accent)] max-w-xl">
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

              {/* RIGHT SIDE */}



            </div>
          </div>
        </section>


        {/* SKILLS SECTION */}
        <section
          id="skills"
          data-aos="fade"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
        >

          <h2 className="section-title mb-12 text-4xl font-bold">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <FaPython size={28} />
              Python
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <SiCplusplus size={28} />
              C++
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <SiTensorflow size={28} />
              Machine Learning
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <SiDjango size={28} />
              Django
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <BsCodeSlash size={28} />
              Data Structures
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <AiOutlineApi size={28} />
              APIs
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <FaGitAlt size={28} />
              Git
            </div>

            <div className="skill-card flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:scale-105">
              <FaHtml5 size={28} />
              HTML / CSS
            </div>

          </div>
        </section>


        {/* PROJECTS SECTION */}
        <section
          id="projects"
          data-aos="fade"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 relative z-10"
        >

          <h2 className="section-title mb-8 pb-1 text-4xl font-bold">
            Projects
          </h2>

          <div
            className="relative w-full max-w-7xl mx-auto"
            onMouseEnter={() => setIsProjectCarouselPaused(true)}
            onMouseLeave={() => setIsProjectCarouselPaused(false)}
            onFocus={() => setIsProjectCarouselPaused(true)}
            onBlur={() => setIsProjectCarouselPaused(false)}
          >

            {/* LEFT BUTTON */}
            <button
              type="button"
              aria-label="Previous project"
              onClick={() =>
                setCurrentProject(
                  (currentProject - 1 + projectCards.length) % projectCards.length
                )
              }
              className="hidden sm:flex absolute left-2 lg:left-8 top-[calc(1.5rem+175px)] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-[0_12px_30px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/10 before:via-white/[0.018] before:to-transparent before:opacity-75 hover:-translate-y-[calc(50%+2px)] hover:border-white/20 hover:bg-white/[0.055] hover:text-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.48)]"
            >
              <FiChevronLeft className="relative z-10 h-6 w-6" strokeWidth={2.6} />
            </button>

            {/* CARDS */}
            <div className="overflow-hidden pt-6 pb-16 [perspective:1400px]">

              {/* SLIDING TRACK */}
              <div
                className="flex gap-6 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
                style={{
                  "--project-card-width": "clamp(320px, 72vw, 980px)",
                  "--project-card-gap": "1.5rem",
                  transform: `translateX(calc(50% - (${currentProject} * (var(--project-card-width) + var(--project-card-gap))) - (var(--project-card-width) / 2)))`
                }}
              >

                {projectCards.map((project, index) => {
                  const offset = index - currentProject;
                  const depth = Math.abs(offset);
                  const rotate = offset === 0 ? 0 : offset < 0 ? 14 : -14;
                  const translateZ = offset === 0 ? 0 : -140 * depth;
                  const scale = offset === 0 ? 1 : 0.88 - depth * 0.04;

                  return (

                    <article
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className="w-[var(--project-card-width)] shrink-0 px-1 transition-all duration-700 ease-out [transform-style:preserve-3d]"
                      style={{
                        opacity: offset === 0 ? 1 : 0,
                        pointerEvents: offset === 0 ? "auto" : "none",
                        transform: `translateZ(${translateZ}px) rotateY(${rotate}deg) scale(${scale})`,
                        zIndex: projectCards.length - depth,
                      }}
                    >

                      <div
                        className={`premium-glass premium-glass-hover group mx-auto grid h-[430px] max-h-[58vh] max-w-5xl overflow-hidden rounded-2xl text-left backdrop-blur-2xl transition duration-500 ease-out hover:-translate-y-2 md:h-[350px] md:grid-cols-[0.9fr_1.1fr]
        ${index === currentProject
                            ? "project-active"
                            : "opacity-70"
                          }`}
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
                })}

              </div> {/* ✅ CLOSE sliding track */}

            </div> {/* ✅ CLOSE overflow wrapper */}

            {/* RIGHT BUTTON */}
            <button
              type="button"
              aria-label="Next project"
              onClick={() =>
                setCurrentProject((currentProject + 1) % projectCards.length)
              }
              className="hidden sm:flex absolute right-2 lg:right-8 top-[calc(1.5rem+175px)] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-[0_12px_30px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/10 before:via-white/[0.018] before:to-transparent before:opacity-75 hover:-translate-y-[calc(50%+2px)] hover:border-white/20 hover:bg-white/[0.055] hover:text-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.48)]"
            >
              <FiChevronRight className="relative z-10 h-6 w-6" strokeWidth={2.6} />
            </button>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() =>
                  setCurrentProject(
                    (currentProject - 1 + projectCards.length) % projectCards.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-lg shadow-black/25 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.055] hover:text-white sm:hidden"
              >
                <FiChevronLeft className="h-5 w-5" strokeWidth={2.6} />
              </button>

              {projectCards.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Show ${project.title}`}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentProject
                    ? "w-8 bg-[var(--accent-primary)]"
                    : "w-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                />
              ))}

              <button
                type="button"
                aria-label="Next project"
                onClick={() =>
                  setCurrentProject((currentProject + 1) % projectCards.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[var(--text-primary)] shadow-lg shadow-black/25 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.055] hover:text-white sm:hidden"
              >
                <FiChevronRight className="h-5 w-5" strokeWidth={2.6} />
              </button>
            </div>

          </div>

        </section>


        {/* FUTURE AI LAB */}
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

            {[
              "AI Chatbot",
              "Resume Analyzer",
              "ML Prediction Model",
              "AI Text Summarizer"
            ].map(project => (

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


        {/* CONTACT */}
        <section
          id="contact"
          data-aos="fade"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
        >

          <h2 className="section-title mb-10 text-4xl font-bold">
            Contact
          </h2>

          <p className="mb-10 max-w-xl text-[var(--text-secondary)]">
            Whether you want to collaborate on an AI project, discuss engineering,
            or just connect — my inbox is open.
          </p>

          <div className="flex flex-col gap-4 text-[var(--text-secondary)]">

            <p>Email: <a href="mailto:anpatyash16@gmail.com" className="ml-1 text-[var(--accent-primary)] hover:underline">
              anpatyash16@gmail.com
            </a>
            </p>

            <p>
              GitHub:
              <a href="https://github.com/YASH-ANPAT" className="ml-1 text-[var(--accent-primary)] hover:underline">
                github.com/YASH-ANPAT
              </a>
            </p>

            <p>
              LinkedIn:
              <a href="https://linkedin.com/in/yash-anpat" className="ml-1 text-[var(--accent-primary)] hover:underline">
                linkedin.com/in/yash-anpat
              </a>
            </p>

            <p>
              Wellfound:
              <a href="https://wellfound.com/u/yash-anpat" className="ml-1 text-[var(--accent-primary)] hover:underline">
                wellfound.com/u/yash-anpat
              </a>
            </p>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="relative z-10 mt-32 border-t border-[var(--border-soft)] py-12">

          <div className="mx-auto grid max-w-6xl gap-10 px-6 text-[var(--text-secondary)] md:grid-cols-3">

            {/* Brand */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Yash Anpat
              </h3>
              <p className="text-sm leading-relaxed">
                Computer Engineering student focused on building intelligent
                systems with AI and software engineering.
              </p>
            </div>


            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Navigation
              </h3>

              <ul className="space-y-2 text-sm">

                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#skills" className="hover:text-white transition">
                    Skills
                  </a>
                </li>

                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#future-projects" className="hover:text-white transition">
                    AI Lab
                  </a>
                </li>

              </ul>
            </div>


            {/* Social */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Connect
              </h3>

              <ul className="space-y-2 text-sm">

                <li>
                  <a
                    href="mailto:anpatyash16@gmail.com"
                    className="hover:text-white transition"
                  >
                    Email
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/YASH-ANPAT"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com/in/yash-anpat"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="https://wellfound.com/u/yash-anpat"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    Wellfound
                  </a>
                </li>

              </ul>
            </div>

          </div>


          {/* Bottom line */}
          <div className="mt-10 border-t border-[var(--border-soft)] pt-6 text-center text-sm text-[var(--text-muted)]">

            <p>
              © {new Date().getFullYear()} Yash Anpat · Built with React & Tailwind CSS
            </p>

            {/* 👇 VISITOR COUNTER */}
            {/* <p className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-2">

              <span className="opacity-70">👀</span>

              <span>Visitors</span>

              <span className="bg-white/10 px-2 py-1 rounded-md text-blue-400 text-xs font-medium">
                <img
                  src="https://komarev.com/ghpvc/?username=yash-anpat&color=7c3aed&label=&style=flat"
                  alt="views"
                  className="inline"
                />
              </span>

            </p> */}

          </div>


        </footer>

      </main>

    </div>
  );
}



