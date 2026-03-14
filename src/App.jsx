import { FaPython, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiTensorflow } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
    });
  }, []);


  return (
    <div className="bg-black text-white min-h-screen">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-40"></div>

      <div className="fixed w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-float"></div>

      <div className="fixed w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-floatSlow"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-gray-300 backdrop-blur-md bg-black/40 z-50">

        <h1 className="text-lg font-semibold tracking-wide text-white">
          Yash Anpat
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-blue-400 transition scroll-mt-24">About</a>
          <a href="#skills" className="hover:text-blue-400 transition scroll-mt-24">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition scroll-mt-24">Projects</a>
          <a href="#future-projects" className="hover:text-blue-400 transition scroll-mt-24">AI Lab</a>
          <a href="#contact" className="hover:text-blue-400 transition scroll-mt-24">Contact</a>
        </div>

      </nav>


      <main className="relative z-10">
        {/* HERO SECTION */}
        <section data-aos="slide-down" id="hero" className="min-h-[calc(100vh-10px)] flex flex-col items-center justify-center text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Yash Anpat
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

            <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/30">
              Download Resume
            </button>

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
              development. I enjoy creating real systems — from hospital
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
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
        >

          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl">

            {/* Hospital */}
            <div data-aos="zoom-in duration:1500" className="p-8 border border-gray-700 rounded-xl hover:border-blue-400 hover:-translate-y-2 transition duration-300 text-left bg-black/40 backdrop-blur">

              <h3 className="text-2xl font-semibold mb-4">
                Hospital Management System
              </h3>

              <p className="text-gray-400 mb-4">
                A full-stack system designed to manage hospital operations including doctors, patients, and appointment scheduling.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                Tech Stack: Python · Django · HTML · CSS · Database
              </p>

              <a
                href="https://github.com/YASH-ANPAT"
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition"
              >
                View Code
              </a>

            </div>


            {/* School */}
            <div data-aos="zoom-in duration:1500" className="p-8 border border-gray-700 rounded-xl hover:border-blue-400 hover:-translate-y-2 transition duration-300 text-left bg-black/40 backdrop-blur">

              <h3 className="text-2xl font-semibold mb-4">
                School Management System
              </h3>

              <p className="text-gray-400 mb-4">
                A system designed to manage student records, staff information and administrative operations efficiently.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                Tech Stack: Python · SQL Database · HTML · CSS
              </p>

              <a
                href="https://github.com/YASH-ANPAT"
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition"
              >
                View Code
              </a>

            </div>

          </div>

        </section>


        {/* FUTURE AI LAB */}
        <section
          id="future-projects"
          data-aos="fade"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
        >

          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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

            <p>Email: <a href="mailto:yashnapat16@gmail.com" className="text-blue-400 ml-1 hover:underline">
              Send an email to yashnapat16@gmail.com
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
            © {new Date().getFullYear()} Yash Anpat · Built with React & Tailwind CSS
          </div>

        </footer>

      </main>

    </div>
  );
}