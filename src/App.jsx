import { FaPython, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiTensorflow } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";



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
      title: "Hunt the Wumpus (AI Game Web App)",
      desc: "An interactive AI-based grid game inspired by the Wumpus World problem, where an agent navigates a partially observable environment using percepts like Breeze, Stench, and Glitter to locate gold while avoiding hazards. Built with a dynamic Flask backend and an enhanced responsive UI.",
      tech: "Python · Flask · HTML · CSS · JavaScript · AI Concepts",
      link: "https://github.com/YASH-ANPAT/wumpus-game-ai-agent-project",
      demo: "https://wumpus-and-gold.onrender.com/"
    },
    {
      title: "Food Delivery Time Prediction (ML Web App)",
      desc: "A machine learning-based web application that predicts food delivery time using ultiple Regression, with real-world location input handled via OpenCage API and a user-friendly Flask interface.",
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
      accent: "from-blue-500/35 via-cyan-400/10 to-purple-500/35",
      label: "AI Game",
      image: "/project-images/wumpus-game.jpeg",
      techItems: ["Python", "Flask", "HTML", "CSS", "JavaScript", "AI Concepts"],
    },
    {
      accent: "from-emerald-500/30 via-blue-400/10 to-sky-500/30",
      label: "ML App",
      image: "/project-images/food-delivery.png",
      techItems: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML", "CSS", "REST API"],
    },
    {
      accent: "from-purple-500/35 via-fuchsia-400/10 to-blue-500/30",
      label: "News API",
      image: "/project-images/newshub.jpeg",
      techItems: ["Python", "Flask", "HTML", "CSS", "REST API"],
    },
    {
      accent: "from-rose-500/30 via-purple-400/10 to-blue-500/30",
      label: "Django",
      image: "/project-images/medikeeps.jpeg",
      techItems: ["Python", "Django", "HTML", "CSS", "Database"],
    },
    {
      accent: "from-amber-500/25 via-blue-400/10 to-indigo-500/30",
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
    <div className=" overflow-x-hidden bg-black text-white min-h-screen">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-40"></div>

      <div className="fixed w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-float"></div>

      <div className="fixed w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-floatSlow"></div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">

        <div className="relative flex items-center justify-between px-10 py-4 rounded-full 
  bg-white/3 backdrop-blur-2xl 
  border border-white/10 
  shadow-[0_8px_30px_rgba(0,0,0,0.3)]">

          {/*  Glass reflection layer */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-transparent to-white/10 pointer-events-none"></div>

          {/* Logo */}
          <h1 className="text-base font-semibold tracking-wide text-white relative z-10">
            Yash Anpat
          </h1>

          {/* Links */}
          <div className="flex gap-8 text-sm text-gray-300 relative z-10">

            <a href="#hero" className="hover:text-blue-400 hover:scale-105 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400 hover:scale-105 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 hover:scale-105 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 hover:scale-105 transition">
              Projects
            </a>

            <a href="#future-projects" className="hover:text-blue-400 hover:scale-105 transition">
              AI Lab
            </a>

            <a href="#contact" className="hover:text-blue-400 hover:scale-105 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>


      <main className="relative z-10">
        {/* HERO SECTION */}
        <section data-aos="slide-down" id="hero" className="min-h-[calc(100vh-10px)] flex flex-col items-center justify-center text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-normal bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2">
            Hello, I'm Yash Anpat
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
            AI & Software Engineer in Training
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl">
            I build software that thinks. Currently mastering AI & Machine
            Learning to engineer the next generation of intelligent systems.
          </p>

          <div className="mt-8 flex gap-4">

            <a href="#projects">
              <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/30">
                View Projects
              </button>
            </a>

            <a
              href="/Yash_Anpat_Resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white hover:scale-105 transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </section>


        {/* ABOUT SECTION */}
        <section
          id="about"
          data-aos="fade"
          className="min-h-screen flex items-center justify-center text-center px-6 relative z-10"
        >

          <div className="max-w-3xl">

            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm Yash, a Computer Engineering student at Savitribai Phule Pune
              University, passionate about building intelligent systems and
              bridging the gap between software engineering and artificial
              intelligence.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              My main tools are Python, Machine Learning, and full-stack
              development. I enjoy creating real systems, from hospital
              management platforms to data-driven applications.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              My goal is to engineer intelligent software that solves real-world
              problems and pushes the boundaries of AI technology.
            </p>

          </div>

        </section>


        {/* SKILLS SECTION */}
        <section
          id="skills"
          data-aos="fade"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
        >

          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <FaPython size={28} />
              Python
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <SiCplusplus size={28} />
              C++
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <SiTensorflow size={28} />
              Machine Learning
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <SiDjango size={28} />
              Django
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <BsCodeSlash size={28} />
              Data Structures
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <AiOutlineApi size={28} />
              APIs
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
              <FaGitAlt size={28} />
              Git
            </div>

            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-400 hover:scale-105 transition flex flex-col items-center gap-3">
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

          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-1">
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
              className="hidden sm:flex absolute left-2 lg:left-8 top-[calc(50%-1rem)] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gray-100 shadow-[0_12px_34px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-80 hover:-translate-y-[calc(50%+2px)] hover:border-blue-400/70 hover:bg-blue-500/15 hover:text-white hover:shadow-[0_0_32px_rgba(59,130,246,0.45)]"
            >
              <FiChevronLeft className="relative z-10 h-6 w-6" strokeWidth={2.6} />
            </button>

            {/* CARDS */}
            <div className="overflow-hidden py-6 [perspective:1400px]">

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
                      className={`group mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/45 text-left backdrop-blur-2xl shadow-2xl shadow-black/40 transition duration-500 ease-out hover:-translate-y-2 hover:border-blue-400/60 hover:bg-black/55 hover:shadow-blue-500/25 md:min-h-[350px] md:grid-cols-[0.9fr_1.1fr]
        ${index === currentProject
                        ? "border-blue-400/70 shadow-blue-500/20"
                        : "opacity-70"
                      }`}
                    >

                      <div className={`relative min-h-[190px] overflow-hidden bg-gradient-to-br ${project.accent}`}>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
                              {project.label}
                            </div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.24),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]"></div>
                        <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                          Featured Project
                        </div>
                      </div>

                      <div className="flex min-h-[330px] flex-col p-6 md:min-h-0 md:p-8">
                    <h3 className="text-2xl font-semibold leading-snug text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-gray-400 md:[display:-webkit-box] md:[-webkit-line-clamp:4] md:[-webkit-box-orient:vertical] md:overflow-hidden">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techItems.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
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
                        className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600 hover:-translate-y-0.5"
                      >
                        View Code
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition hover:bg-purple-600 hover:-translate-y-0.5"
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
              className="hidden sm:flex absolute right-2 lg:right-8 top-[calc(50%-1rem)] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gray-100 shadow-[0_12px_34px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-80 hover:-translate-y-[calc(50%+2px)] hover:border-blue-400/70 hover:bg-blue-500/15 hover:text-white hover:shadow-[0_0_32px_rgba(59,130,246,0.45)]"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gray-100 shadow-lg shadow-black/25 backdrop-blur-xl transition hover:border-blue-400/70 hover:bg-blue-500/15 hover:text-white sm:hidden"
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
                    ? "w-8 bg-blue-400"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gray-100 shadow-lg shadow-black/25 backdrop-blur-xl transition hover:border-blue-400/70 hover:bg-blue-500/15 hover:text-white sm:hidden"
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

          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-1">
            AI Project Lab
          </h2>

          <p className="text-gray-400 max-w-2xl mb-12">
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
                className="p-8 border border-gray-700 rounded-xl hover:border-purple-400 hover:-translate-y-2 transition duration-300 text-left bg-black/40 backdrop-blur"
              >
                <h3 className="text-2xl font-semibold mb-4">{project}</h3>

                <p className="text-gray-400">
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

          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </h2>

          <p className="text-gray-400 mb-10 max-w-xl">
            Whether you want to collaborate on an AI project, discuss engineering,
            or just connect — my inbox is open.
          </p>

          <div className="flex flex-col gap-4 text-gray-300">

            <p>Email: <a href="mailto:yashanpat16@gmail.com" className="text-blue-400 ml-1 hover:underline">
              yashanpat16@gmail.com
            </a>
            </p>

            <p>
              GitHub:
              <a href="https://github.com/YASH-ANPAT" className="text-blue-400 ml-1 hover:underline">
                github.com/YASH-ANPAT
              </a>
            </p>

            <p>
              LinkedIn:
              <a href="https://linkedin.com/in/yash-anpat" className="text-blue-400 ml-1 hover:underline">
                linkedin.com/in/yash-anpat
              </a>
            </p>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 mt-32 py-12 relative z-10">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-gray-400">

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
                    href="mailto:yashanpat16@gmail.com"
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

              </ul>
            </div>

          </div>


          {/* Bottom line */}
          <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">

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
