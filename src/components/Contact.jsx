import { useState } from "react";
import EmailComposer from "./EmailComposer";

export default function Contact() {
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  return (
    <>
      <section id="contact" className="home-editorial-section home-connect-section">
        <div className="home-editorial-label">/ LET&apos;S CONNECT</div>

        <div className="home-editorial-content contact-section-content">
          <p className="contact-section-kicker">Open to thoughtful work and useful ideas.</p>
          <h2>
            Have an idea?
            <br />
            Let&apos;s <span className="contact-accent">build</span> something useful.
          </h2>

          <div className="contact-section-actions">
            <button
              type="button"
              className="crimson-button contact-open-button"
              onClick={() => setIsComposerOpen(true)}
            >
              Send me an email <span aria-hidden="true">↗</span>
            </button>
            <a className="ghost-button contact-direct-link" href="mailto:anpatyash16@gmail.com">
              anpatyash16@gmail.com
            </a>
          </div>

          <div className="home-contact-links">
            <a href="https://github.com/YASH-ANPAT" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yash-anpat" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://wellfound.com/u/yash-anpat" target="_blank" rel="noreferrer">Wellfound</a>
          </div>
        </div>
      </section>
      <EmailComposer
        isOpen={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
      />
    </>
  );
}
