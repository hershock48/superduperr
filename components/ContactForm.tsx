"use client";

import { useState } from "react";
import { useToast } from "./DemoToast";

export default function ContactForm() {
  const { show, node } = useToast();
  const [sent, setSent] = useState(false);

  return (
    <div className="buybox">
      {sent ? (
        <div className="center" style={{ padding: "28px 0" }}>
          <div style={{ fontSize: 44 }}>📬</div>
          <h3 className="display mt-16">Message sent!</h3>
          <p className="mt-8" style={{ color: "var(--ink-soft)" }}>
            We&apos;ll get right back to you. (Demo build.)
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            show("Message sent (demo) ✓");
          }}
        >
          <div className="field"><label>Name</label><input required placeholder="Your name" /></div>
          <div className="field"><label>Email</label><input required type="email" placeholder="you@email.com" /></div>
          <div className="field">
            <label>Message</label>
            <textarea required rows={5} placeholder="Drop us a line and we'll get right back to you." />
          </div>
          <button className="btn primary" style={{ width: "100%" }} type="submit">Send it <span className="arr">→</span></button>
        </form>
      )}
      {node}
    </div>
  );
}
