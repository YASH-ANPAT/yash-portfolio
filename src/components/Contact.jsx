export default function Contact() {
  return (
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
  );
}
