import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story — Michigan-Made, Meijer Award Winner",
  description:
    "Super Duper Coffee is a Michigan small business: fresh-roasted coffee and cold brew, grown through the MSU Product Center and named a 2026 Meijer Award winner.",
};

export default function OurStory() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow orange">Our story</span>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,66px)" }}>
            Born in Michigan.<br />Brewed for everywhere.
          </h1>
          <p className="lead mt-24">
            Super Duper Coffee started with a simple grudge: coffee that sits in a warehouse for a year
            shouldn&apos;t get to call itself fresh. So we built a company around a one-week promise —
            roast it Tuesday, brew and pack it Wednesday, ship it Thursday.
          </p>
          <p className="lead mt-16">
            No warehouse naps. No mystery dates. Just super duper good coffee, made by a small Michigan
            team that would rather roast twice a week forever than cut that corner once.
          </p>
          <p className="demo-note mt-24">
            [Concept copy — founder story, names, photos and timeline to be supplied by Super Duper]
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap story-band">
          <div>
            <span className="eyebrow orange">The big moment</span>
            <h2 className="display">2026 Meijer Award Winner</h2>
            <p className="lead mt-16">
              During National Small Business Week 2026, Meijer and the Michigan State University Product
              Center selected Super Duper Cold Brew as a Meijer Award winner — recognition reserved for
              Michigan small businesses ready for the big shelves.
            </p>
            <p className="lead mt-16">
              We grew this company through the MSU Product Center the honest way, and we&apos;re proud to
              be bringing Super Duper to more of Michigan than ever.
            </p>
            <p className="mt-32">
              <Link href="/find-us" className="btn primary">Find us in stores →</Link>
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="day-card rotate-r" style={{ maxWidth: 340, padding: 36 }}>
              <div style={{ fontSize: 56, lineHeight: 1 }}>🏆</div>
              <h3 className="display mt-16" style={{ fontSize: 22 }}>Meijer Award</h3>
              <p className="mt-8">MSU Product Center · National Small Business Week 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What we believe</span>
            <h2 className="display">Three things we don&apos;t bend on</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3 className="display" style={{ fontSize: 20 }}>Fresh is a schedule</h3>
              <p className="mt-8">
                Roast Tuesday. Brew Wednesday. Ship Thursday. If it misses the window, it doesn&apos;t ship —
                it becomes office coffee. (Lucky office.)
              </p>
            </div>
            <div className="card">
              <h3 className="display" style={{ fontSize: 20 }}>Good beans, fairly bought</h3>
              <p className="mt-8">
                We source from growers in Guatemala, Colombia, and Costa Rica and roast everything
                in-house, in small batches, on purpose.
              </p>
            </div>
            <div className="card">
              <h3 className="display" style={{ fontSize: 20 }}>Coffee should travel</h3>
              <p className="mt-8">
                Recyclable pouches and tap bags that go camping, tailgating, road-tripping — anywhere a
                coffee shop isn&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section deep" style={{ paddingBottom: 84 }}>
        <div className="wrap center">
          <div style={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "flex-end" }}>
            <div className="rotate-l"><Image src="/products/cold-brew-pouch.png" alt="Super Duper Cold Brew Adventure Pouch" width={150} height={150} /></div>
            <div className="rotate-r"><Image src="/products/tap-bag.png" alt="Super Duper Cold Brew Tap Bag" width={160} height={160} /></div>
          </div>
          <h2 className="display mt-24">Taste what the fuss is about.</h2>
          <p className="mt-24">
            <Link href="/shop" className="btn primary">Shop the lineup →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
