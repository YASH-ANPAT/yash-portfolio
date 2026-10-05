import { FaPython, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiTensorflow } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";

export default function Skills() {
  return (
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
  );
}
