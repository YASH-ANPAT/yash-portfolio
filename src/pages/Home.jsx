import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCarousel from "../components/ProjectCarousel";
import AILabs from "../components/AILabs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="fixed inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,59,59,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,59,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-90"></div>
      <div className="fixed inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(255,59,59,0.02)_80%,transparent_100%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.009)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:112px_112px] opacity-50"></div>
      <div className="fixed h-[1000px] w-[1000px] rounded-full bg-[rgba(255,59,59,0.05)] opacity-15 blur-[180px] top-[-520px] left-[-520px] animate-float pointer-events-none"></div>
      <div className="fixed h-[800px] w-[800px] rounded-full bg-[rgba(255,59,59,0.04)] opacity-10 blur-[180px] bottom-[-420px] right-[-420px] animate-floatSlow pointer-events-none"></div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ProjectCarousel />
        <AILabs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
