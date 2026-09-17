export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 [perspective:1200px]">
      <div className="group relative flex items-center justify-between overflow-hidden rounded-full bg-white/[0.045] px-10 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.44),inset_0_1px_1px_rgba(255,255,255,0.11),inset_0_-10px_24px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition duration-500 [transform-style:preserve-3d] hover:-translate-y-0.5 hover:bg-white/[0.055] hover:shadow-[0_22px_54px_rgba(0,0,0,0.5),0_0_30px_rgba(255,59,59,0.08),inset_0_1px_1px_rgba(255,255,255,0.13),inset_0_-10px_24px_rgba(0,0,0,0.2)]">
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

        <h1 className="group/logo relative z-10 cursor-default text-base font-semibold tracking-wide text-white drop-shadow-[0_1px_10px_rgba(255,255,255,0.12)]">
          <span className="absolute -inset-x-4 -inset-y-2 rounded-full bg-[radial-gradient(circle,rgba(255,59,59,0.42),transparent_58%)] opacity-0 blur-xl transition duration-500 group-hover/logo:opacity-80"></span>
          <span className="relative bg-[linear-gradient(90deg,#ffffff,#ffffff)] bg-clip-text text-transparent transition duration-500 group-hover/logo:animate-pulse group-hover/logo:bg-[linear-gradient(90deg,#f5f5f5,#ff3b3b,#f5f5f5)] group-hover/logo:drop-shadow-[0_0_16px_rgba(255,59,59,0.55)]">
            Yash Anpat
          </span>
        </h1>

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
  );
}
