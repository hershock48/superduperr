import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Super Duper Coffee in Michigan: questions, wholesale, orders, or just to talk coffee. We'll get right back to you.",
};

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: 64, paddingBottom: 84 }}>
      <div className="wrap grid-2" style={{ alignItems: "start", gap: 44 }}>
        <div>
          <span className="eyebrow orange">Say hi</span>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,60px)" }}>
            Talk to a real coffee human.
          </h1>
          <p className="lead mt-24">
            Questions about an order, a subscription, wholesale, or which roast is the most super duper?
            Drop us a line and we&apos;ll get right back to you.
          </p>
          <div className="card mt-32">
            <h3 className="display" style={{ fontSize: 18 }}>Where to find us</h3>
            <p className="mt-8" style={{ fontWeight: 700 }}>sup@superduperdrinks.com</p>
            <p className="mt-8" style={{ color: "var(--ink-soft)" }}>
              [Street address, city &amp; phone: to be added. Putting a real place on the site builds
              trust and unlocks local search.]
            </p>
          </div>
          <div className="card mt-16">
            <h3 className="display" style={{ fontSize: 18 }}>Shipping &amp; freshness</h3>
            <p className="mt-8" style={{ color: "var(--ink-soft)" }}>
              We roast Tuesdays, brew and package Wednesdays, and ship Thursdays, so everything lands
              at peak freshness. Wrong item or quantity? That would be our bad, and we&apos;ll make it right.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
