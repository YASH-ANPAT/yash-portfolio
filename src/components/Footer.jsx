import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-[var(--border-soft)] py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 text-[var(--text-secondary)] md:grid-cols-3">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Yash Anpat
          </h3>
          <p className="text-sm leading-relaxed">
            Computer Engineering student focused on building intelligent
            systems with AI and software engineering.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Navigation
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/#skills" className="hover:text-white transition">
                Skills
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/ai-labs" className="hover:text-white transition">
                AI Lab
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Connect
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:anpatyash16@gmail.com" className="hover:text-white transition">
                Email
              </a>
            </li>

            <li>
              <a href="https://github.com/YASH-ANPAT" target="_blank" rel="noreferrer" className="hover:text-white transition">
                GitHub
              </a>
            </li>

            <li>
              <a href="https://linkedin.com/in/yash-anpat" target="_blank" rel="noreferrer" className="hover:text-white transition">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://wellfound.com/u/yash-anpat" target="_blank" rel="noreferrer" className="hover:text-white transition">
                Wellfound
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-[var(--border-soft)] pt-6 text-center text-sm text-[var(--text-muted)]">
        <p>
          © {new Date().getFullYear()} Yash Anpat · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
