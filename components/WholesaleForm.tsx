"use client";

import { useState } from "react";
import { useToast } from "./DemoToast";

export default function WholesaleForm() {
  const { show, node } = useToast();
  const [sent, setSent] = useState(false);

  return (
    <div className="buybox">
      {sent ? (
        <div className="center" style={{ padding: "28px 0" }}>
          <div style={{ fontSize: 44 }}>🎉</div>
          <h3 className="display mt-16">Application received!</h3>
          <p className="mt-8" style={{ color: "var(--ink-soft)" }}>
            (Demo build. In production this lands in Super Duper&apos;s inbox.)
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            show("Wholesale application sent (demo) ✓");
          }}
        >
          <div className="grid-2" style={{ gap: 14 }}>
            <div className="field"><label>First name</label><input required placeholder="Sam" /></div>
            <div className="field"><label>Last name</label><input required placeholder="Roaster" /></div>
          </div>
          <div className="field"><label>Company name</label><input required placeholder="Your Store LLC" /></div>
          <div className="field"><label>Company address</label><input required placeholder="123 Main St, City, MI" /></div>
          <div className="grid-2" style={{ gap: 14 }}>
            <div className="field"><label>Phone</label><input required type="tel" placeholder="(555) 555-5555" /></div>
            <div className="field"><label>Email</label><input required type="email" placeholder="you@store.com" /></div>
          </div>
          <div className="field">
            <label>What are you interested in?</label>
            <select defaultValue="">
              <option value="" disabled>Pick one</option>
              <option>Cold brew pouches</option>
              <option>50 oz tap bags</option>
              <option>Fresh roasted beans</option>
              <option>All of the above (correct answer)</option>
            </select>
          </div>
          <button className="btn primary" style={{ width: "100%" }} type="submit">
            Send application →
          </button>
        </form>
      )}
      {node}
    </div>
  );
}
