"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span key={i}>
              <span className="spark">★</span> 2026 Meijer Award Winner
              <span className="spark"> ★ </span> Roasted Tuesday · Brewed Wednesday · Shipped Thursday
              <span className="spark"> ★ </span> Free points with every order
              <span className="spark"> ★ </span> Made in Michigan
              <span className="spark"> ★ </span> No bulk · No brewing · No mess · All adventure
              <span className="spark"> ★ </span> Subscribe &amp; save 12.5%
            </span>
          ))}
        </div>
      </div>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo" onClick={close}>
            <Image src="/brand/logo.png" alt="Super Duper Coffee" width={46} height={46} priority />
            <span>Coffee<span className="drop">.</span></span>
          </Link>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "Close ✕" : "Menu ☰"}
          </button>
          <div className={`nav-links${open ? " open" : ""}`}>
            <Link href="/shop" onClick={close}>Shop</Link>
            <Link href="/shop?cat=subscriptions" onClick={close}>Clubs</Link>
            <Link href="/our-story" onClick={close}>Our Story</Link>
            <Link href="/find-us" onClick={close}>Find Us</Link>
            <Link href="/rewards" onClick={close}>Rewards</Link>
            <Link href="/wholesale" onClick={close}>Wholesale</Link>
            <Link href="/shop" className="nav-cta" onClick={close}>Get Coffee →</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
