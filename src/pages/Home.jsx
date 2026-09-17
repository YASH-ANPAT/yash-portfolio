import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCarousel from "../components/ProjectCarousel";
import AILabs from "../components/AILabs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectCarousel />
      <AILabs />
      <Contact />
    </>
  );
}
