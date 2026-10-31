import { useEffect, useRef, useState } from "react";

const suggestedQuestions = [
  "Who is Yash Anpat?",
  "Tell me about his AI/ML projects.",
  "Explain the Predictive Maintenance Platform.",
  "How does his AI Document Assistant work?",
  "What technologies does he work with?",
  "What is he currently building?",
];

function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

function renderInlineMarkdown(text, keyPrefix) {
  const tokenPattern = /(\*\*[^*\n]+\*\*|`[^`\n]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\)|<https?:\/\/[^>\s]+>)/g;
  const parts = [];
  let lastIndex = 0;

  for (const match of text.matchAll(tokenPattern)) {
    const [token] = match;
    const index = match.index ?? 0;
    if (index > lastIndex) parts.push(text.slice(lastIndex, index));

    if (token.startsWith("**")) {
      parts.push(<strong key={`${keyPrefix}-bold-${index}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      parts.push(<code key={`${keyPrefix}-code-${index}`}>{token.slice(1, -1)}</code>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/)
        || token.match(/^<(https?:\/\/[^>\s]+)>$/);
      const href = safeUrl(linkMatch?.[2] || linkMatch?.[1]);
      if (href) {
        parts.push(
          <a key={`${keyPrefix}-link-${index}`} href={href} target="_blank" rel="noreferrer">
            {linkMatch?.[2] ? linkMatch[1] : href}
          </a>
        );
      } else {
        parts.push(token);
      }
    }

    lastIndex = index + token.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function MarkdownContent({ content }) {
  const lines = content.split(/\r?\n/);
  const blocks = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`list-${blocks.length}`}>
        {listItems.map((item, index) => (
          <li key={`item-${index}`}>{renderInlineMarkdown(item, `list-${index}`)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const listMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (listMatch) {
      listItems.push(listMatch[1]);
      return;
    }

    flushList();
    if (!trimmed) {
      blocks.push(<div className="yash-ai-markdown-break" key={`break-${index}`} />);
      return;
    }

    const headingMatch = trimmed.match(/^#{1,3}\s+(.+)$/);
    if (headingMatch) {
      blocks.push(
        <h3 key={`heading-${index}`}>{renderInlineMarkdown(headingMatch[1], `heading-${index}`)}</h3>
      );
      return;
    }

    blocks.push(
      <p key={`paragraph-${index}`}>{renderInlineMarkdown(trimmed, `paragraph-${index}`)}</p>
    );
  });

  flushList();
  return <div className="yash-ai-markdown">{blocks}</div>;
}

function Message({ message, onRetry }) {
  return (
    <article className={`yash-ai-message yash-ai-message-${message.role}`}>
      <MarkdownContent content={message.content} />
      {message.sources?.length > 0 && (
        <div className="yash-ai-sources">
          {message.sources.map((source) => (
            <a key={source} href={source} target="_blank" rel="noreferrer">
              Source ↗
            </a>
          ))}
        </div>
      )}
      {message.retryQuestion && (
        <button
          type="button"
          className="yash-ai-retry"
          onClick={() => onRetry(message.retryQuestion)}
        >
          Try again
        </button>
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
  const messagesRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const messagesContainer = messagesRef.current;
    if (!messagesContainer) return;
    const behavior = messages.length > 1 || status === "thinking" ? "smooth" : "auto";
    messagesContainer.scrollTo({
      top: messagesContainer.scrollHeight,
      behavior,
    });
  }, [isOpen, messages, status]);

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
      if (!response.ok) {
        const error = new Error(
          result.message || "YASH AI could not answer right now. Please try again."
        );
        error.isServerMessage = Boolean(result.message);
        throw error;
      }
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
          content: error.isServerMessage
            ? error.message
            : "YASH AI could not be reached. Please check your connection and try again.",
          retryQuestion: trimmed,
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

            <div ref={messagesRef} className="yash-ai-messages" aria-live="polite">
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
                messages.map((message, index) => (
                  <Message
                    key={`${message.role}-${index}`}
                    message={message}
                    onRetry={askQuestion}
                  />
                ))
              )}
              {status === "thinking" && (
                <div className="yash-ai-thinking" role="status">
                  <span /> <span /> <span /> Thinking from verified records…
                </div>
              )}
              {status === "error" && question.length > 600 && (
                <p className="yash-ai-error" role="alert">Please keep your question under 600 characters.</p>
              )}
              <div ref={messagesEndRef} aria-hidden="true" />
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
