"use client";

import { useRef, useState, type FormEvent } from "react";

const SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbz4fq3YMavPiVzHDdfPXcKKIEA8qWgS0YdOSOVltE4RWk7MUjtik-KxhuPVDPz0lFuA/exec";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState<{ text: string; error: boolean } | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<number>(undefined);

  const openToast = () => {
    setToastOpen(true);
    requestAnimationFrame(() => setToastVisible(true));
    window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(hideToast, 5000);
  };

  const hideToast = () => {
    setToastVisible(false);
    window.clearTimeout(toastTimerRef.current);
    window.setTimeout(() => setToastOpen(false), 250);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement).value;
    if (honeypot) return; // honeypot tripped, silently drop

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setSubmitting(true);
    setNote(null);
    try {
      await fetch(SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      });
      form.reset();
      openToast();
    } catch {
      setNote({
        text: "Something went wrong sending your message. Please try again or email us directly.",
        error: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form className="ctc-form" onSubmit={onSubmit}>
        <div className="ctc-row">
          <label className="ctc-field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Full Name" required />
          </label>
          <label className="ctc-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="Enter Your Email" required />
          </label>
        </div>
        <label className="ctc-field">
          <span>Company</span>
          <input type="text" name="company" placeholder="Enter your company name (optional)" />
        </label>
        <label className="ctc-field">
          <span>Message</span>
          <textarea name="message" rows={5} placeholder="Leave a message" required />
        </label>
        <input className="ctc-hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button className="abt-hero-cta" type="submit" disabled={submitting}>
          Send message
        </button>
        {note && <p className={`ctc-form-note${note.error ? " is-error is-visible" : ""}`}>{note.text}</p>}
      </form>

      <div className={`ctc-toast-backdrop${toastVisible ? " is-visible" : ""}`} hidden={!toastOpen} onClick={(e) => e.target === e.currentTarget && hideToast()}>
        <div className={`ctc-toast${toastVisible ? " is-visible" : ""}`} role="alertdialog" aria-labelledby="ctc-toast-title">
          <button className="ctc-toast-close" type="button" aria-label="Close" onClick={hideToast}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <span className="ctc-toast-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12.5l4.5 4.5L19 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h2 id="ctc-toast-title">Message sent!</h2>
          <p>Thanks for reaching out — we&rsquo;ve got your message and will reply within one business day.</p>
        </div>
      </div>
    </>
  );
}
