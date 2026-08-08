"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useToast } from "./DemoToast";

const fmt = (n: number) => `$${n.toFixed(2)}`;

export default function BuyBox({ p }: { p: Product }) {
  const hasSub = !!p.subscription;
  const [mode, setMode] = useState<"once" | "sub">(hasSub && p.category === "subscriptions" ? "sub" : "once");
  const [freq, setFreq] = useState(0);
  const { show, node } = useToast();

  const subPrice = p.subscription?.subPrice ?? Math.round(p.price * 0.875 * 100) / 100;
  const showing = mode === "sub" ? subPrice : p.price;

  return (
    <div className="buybox">
      {p.monthlyClub ? (
        <>
          <div className="buy-option active">
            <div>
              <div className="opt-title">Monthly club membership</div>
              <div className="opt-sub">3-month starter commitment, then month-to-month. Cancel anytime after.</div>
            </div>
          </div>
          <div className="buy-price">{p.priceLabel}</div>
        </>
      ) : hasSub ? (
        <>
          <label className={`buy-option${mode === "once" ? " active" : ""}`}>
            <input type="radio" name="mode" checked={mode === "once"} onChange={() => setMode("once")} />
            <div>
              <div className="opt-title">One-time purchase</div>
              <div className="opt-sub">Just this once (we get it, commitment is hard)</div>
            </div>
          </label>
          <label className={`buy-option${mode === "sub" ? " active" : ""}`}>
            <input type="radio" name="mode" checked={mode === "sub"} onChange={() => setMode("sub")} />
            <div>
              <div className="opt-title">Subscribe &amp; save 12.5%: {fmt(subPrice)}</div>
              <div className="opt-sub">Pause, skip, or cancel anytime. Points on every delivery.</div>
            </div>
          </label>
          {mode === "sub" && (
            <div className="field" style={{ marginTop: 4 }}>
              <label htmlFor="freq">Delivery schedule</label>
              <select id="freq" value={freq} onChange={(e) => setFreq(Number(e.target.value))}>
                {p.subscription!.frequencies.map((f, i) => (
                  <option key={f} value={i}>{f}</option>
                ))}
              </select>
            </div>
          )}
          <div className="buy-price">
            {fmt(showing)}
            {mode === "sub" && <span className="was">{fmt(p.price)}</span>}
          </div>
        </>
      ) : (
        <div className="buy-price">{p.priceLabel}</div>
      )}

      <button
        className="btn primary"
        style={{ width: "100%" }}
        onClick={() =>
          show(mode === "sub" || p.monthlyClub ? "Subscription added (demo build) ✓" : "Added to cart (demo build) ✓")
        }
      >
        {p.monthlyClub ? "Join the club" : mode === "sub" ? "Start subscription" : "Add to cart"} →
      </button>
      {p.points > 0 && (
        <p className="form-note center" style={{ marginTop: 12 }}>
          ☕ Earns <strong>{p.points} Super Duper points</strong> (points = free coffee)
        </p>
      )}
      <p className="form-note center" style={{ marginTop: 6 }}>
        Concept build. Checkout connects to the live store in production.
      </p>
      {node}
    </div>
  );
}
