import { useEffect, useRef, useState } from "react";
import {
  contactInitialValues,
  createMailtoUrl,
  validateContact,
} from "../utils/contactValidation";

function FieldError({ id, message }) {
  return message ? (
    <p id={id} className="contact-field-error" role="alert">
      {message}
    </p>
  ) : null;
}

export default function EmailComposer({ isOpen, onClose }) {
  const [values, setValues] = useState(contactInitialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [failureType, setFailureType] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    document.body.classList.add("contact-modal-open");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("contact-modal-open");
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status !== "idle") {
      setStatus("idle");
      setFailureType(null);
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    setFailureType(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const error = new Error(
          result.message || "Email delivery is unavailable."
        );
        error.failureType = response.status === 503 ? "unavailable" : "provider";
        throw error;
      }

      setValues(contactInitialValues);
      setStatus("success");
    } catch (error) {
      console.error("Email delivery failed:", error);
      setFailureType(error.failureType || "network");
      setStatus("error");
    }
  };

  const statusMessage =
    status === "success"
      ? "Message sent. Thanks for reaching out."
      : failureType === "unavailable"
        ? "Direct delivery is not configured on this deployment."
        : failureType === "provider"
          ? "The delivery service could not send your message. Your draft is still here."
          : failureType === "network"
            ? "The delivery endpoint could not be reached. Your draft is still here."
            : "";

  return (
    <div
      className="contact-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="contact-composer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-composer-title"
        onKeyDown={(event) => {
          if (event.key === "Escape") onClose();
        }}
      >
        <div className="contact-composer-header">
          <div>
            <p className="contact-composer-kicker">/ SECURE CHANNEL</p>
            <h2 id="contact-composer-title">Start a conversation.</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="contact-composer-close"
            onClick={onClose}
            aria-label="Close email composer"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <form className="contact-composer-form" onSubmit={submitForm} noValidate>
          <div className="contact-form-grid">
            <label>
              <span>Name</span>
              <input
                name="name"
                value={values.name}
                onChange={updateField}
                autoComplete="name"
                maxLength={80}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              <FieldError id="contact-name-error" message={errors.name} />
            </label>

            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={updateField}
                autoComplete="email"
                maxLength={160}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              <FieldError id="contact-email-error" message={errors.email} />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input
              name="subject"
              value={values.subject}
              onChange={updateField}
              maxLength={140}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            />
            <FieldError id="contact-subject-error" message={errors.subject} />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={values.message}
              onChange={updateField}
              rows={5}
              maxLength={2000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            <FieldError id="contact-message-error" message={errors.message} />
          </label>

          <label className="contact-honeypot" aria-hidden="true">
            Company
            <input
              name="company"
              value={values.company}
              onChange={updateField}
              tabIndex="-1"
              autoComplete="off"
            />
          </label>

          {statusMessage && (
            <p
              className={`contact-form-status contact-form-status-${status}`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          )}

          <div className="contact-composer-actions">
            {status === "error" && (
              <a
                className={`contact-fallback ${
                  failureType === "unavailable" ? "crimson-button" : "ghost-button"
                }`}
                href={createMailtoUrl(values)}
              >
                Use Mail App Instead
              </a>
            )}
            {status === "success" ? (
              <button type="button" className="crimson-button" onClick={onClose}>
                Close message
              </button>
            ) : status === "error" ? (
              failureType === "unavailable" ? (
                <button type="button" className="ghost-button" onClick={onClose}>
                  Close composer
                </button>
              ) : (
                <button type="submit" className="ghost-button contact-retry">
                  Try Again
                </button>
              )
            ) : (
              <button
                type="submit"
                className="crimson-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            )}
          </div>
          <p className="contact-composer-note">
            Your message is sent through a protected server endpoint. No credentials are stored in the browser.
          </p>
        </form>
      </section>
    </div>
  );
}
