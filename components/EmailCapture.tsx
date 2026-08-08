"use client";

import { useState } from "react";
import { useToast } from "./DemoToast";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const { show, node } = useToast();
  return (
    <>
      <form
        className="email-row"
        onSubmit={(e) => {
          e.preventDefault();
          if (email.trim()) {
            show("You're on the list. +50 points at signup (demo) ✓");
            setEmail("");
          }
        }}
      >
        <input
          type="email"
          required
          placeholder="you@coffeeperson.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button className="btn dark" type="submit">Get 50 points <span className="arr">→</span></button>
      </form>
      {node}
    </>
  );
}
