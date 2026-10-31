import { useEffect, useRef, useState } from "react";

const suggestedQuestions = [
  "Who is Yash Anpat?",
  "Tell me about his AI/ML projects.",
  "Explain the Predictive Maintenance Platform.",
  "How does his AI Document Assistant work?",
  "What technologies does he work with?",
  "What is he currently building?",
];

function Message({ message }) {
  return (
    <article className={`yash-ai-message yash-ai-message-${message.role}`}>
      <p>{message.content}</p>
      {message.sources?.length > 0 && (
        <div className="yash-ai-sources">
          {message.sources.map((source) => (
            <a key={source} href={source} target="_blank" rel="noreferrer">
              Source ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function YashAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("idle");
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousFocus = document.activeElement;
    document.body.classList.add("yash-ai-open");
    inputRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("yash-ai-open");
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  const askQuestion = async (value = question) => {
    const trimmed = value.trim();
    if (!trimmed || status === "thinking") return;
    if (trimmed.length > 600) {
      setStatus("error");
      return;
    }

    setQuestion("");
    setStatus("thinking");
    setMessages((current) => [...current, { role: "user", content: trimmed }]);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "YASH AI is unavailable.");
      setMessages((current) => [
        ...current,
        { role: "assistant", content: result.answer, sources: result.sources },
      ]);
      setStatus("idle");
    } catch (error) {
      console.error("YASH AI request failed:", error);
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "YASH AI is unavailable right now. Please try again later or contact Yash directly.",
        },
      ]);
      setStatus("error");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    askQuestion();
  };

  return (
    <>
      <button
        type="button"
        className="yash-ai-launcher"
        onClick={() => setIsOpen(true)}
        aria-label="Ask YASH AI"
        aria-expanded={isOpen}
        aria-controls="yash-ai-panel"
      >
        <span className="yash-ai-orb" aria-hidden="true" />
        <span className="yash-ai-tooltip">Ask YASH AI</span>
      </button>

      {isOpen && (
        <div
          className="yash-ai-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            id="yash-ai-panel"
            ref={panelRef}
            className="yash-ai-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="yash-ai-title"
          >
            <header className="yash-ai-header">
              <div>
                <p className="yash-ai-kicker">/ PORTFOLIO INTELLIGENCE</p>
                <h2 id="yash-ai-title">YASH AI</h2>
                <p className="yash-ai-subtitle">Ask about projects, skills and technical work.</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="yash-ai-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close YASH AI"
              >
                ×
              </button>
            </header>

            <div className="yash-ai-messages" aria-live="polite">
              {messages.length === 0 ? (
                <div className="yash-ai-welcome">
                  <p className="yash-ai-welcome-title">What would you like to know?</p>
                  <div className="yash-ai-suggestions">
                    {suggestedQuestions.map((suggestion) => (
                      <button key={suggestion} type="button" onClick={() => askQuestion(suggestion)}>
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => <Message key={`${message.role}-${index}`} message={message} />)
              )}
              {status === "thinking" && (
                <div className="yash-ai-thinking" role="status">
                  <span /> <span /> <span /> Thinking from verified records…
                </div>
              )}
              {status === "error" && question.length > 600 && (
                <p className="yash-ai-error" role="alert">Please keep your question under 600 characters.</p>
              )}
            </div>

            <form className="yash-ai-input-row" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="yash-ai-question">Ask YASH AI a question</label>
              <input
                ref={inputRef}
                id="yash-ai-question"
                value={question}
                onChange={(event) => {
                  setQuestion(event.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Ask a recruiter-focused question…"
                maxLength={600}
                disabled={status === "thinking"}
              />
              <button type="submit" disabled={!question.trim() || status === "thinking"}>
                Send
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
