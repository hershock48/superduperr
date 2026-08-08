import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find Us in Stores",
  description:
    "Find Super Duper Coffee cold brew and fresh roasted coffee in stores across Michigan, including Meijer, or order direct with free reward points.",
};

const DEMO_STORES = [
  { name: "Meijer", area: "Locations rolling out across Michigan", tag: "New!" },
  { name: "[Local grocer: client to supply]", area: "City, MI", tag: "" },
  { name: "[Coffee shop partner: client to supply]", area: "City, MI", tag: "" },
  { name: "[Farmers market: client to supply]", area: "Seasonal", tag: "" },
];

export default function FindUs() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow orange">Find us</span>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,64px)" }}>
            On a shelf near you.
          </h1>
          <p className="lead mt-24">
            Big news: as a 2026 Meijer Award winner, Super Duper Cold Brew is headed to Meijer stores.
            Here&apos;s where to grab a pouch in the wild. If your favorite store doesn&apos;t carry
            us yet, tell them (or tell us, and we&apos;ll do the asking).
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-2">
            {DEMO_STORES.map((s) => (
              <div className="card" key={s.name} style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: 19 }}>{s.name}</h3>
                  <p style={{ fontSize: 14.5 }}>{s.area}</p>
                </div>
                {s.tag && <span className="sticker orange">{s.tag}</span>}
              </div>
            ))}
          </div>
          <p className="demo-note mt-24">
            [Concept: store list and map to be populated with Super Duper&apos;s actual retail partners]
          </p>
        </div>
      </section>

      <section className="section deep">
        <div className="wrap grid-2" style={{ alignItems: "center" }}>
          <div>
            <h2 className="display">Want Super Duper in your store?</h2>
            <p className="lead mt-16">
              We wholesale pouches, tap bags, and fresh roasted beans to grocers, cafés, gyms, and
              offices, all on the same one-week freshness cycle.
            </p>
            <p className="mt-24"><Link href="/wholesale" className="btn dark">Wholesale info →</Link></p>
          </div>
          <div className="banner" style={{ background: "var(--yellow)", color: "var(--ink)" }}>
            <div>
              <h3 className="display" style={{ color: "var(--ink)", textShadow: "none" }}>Can&apos;t find us? Order direct.</h3>
              <p style={{ color: "var(--ink)", marginTop: 8 }}>
                Straight from the roaster, points on every order.
              </p>
              <p className="mt-16"><Link href="/shop" className="btn primary small">Shop online →</Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
