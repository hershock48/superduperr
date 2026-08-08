import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import EmailCapture from "@/components/EmailCapture";

const featured = [
  "super-duper-cold-brew-adventure-pouch",
  "super-duper-cold-brew-tap-bag",
  "mega-bien-blend",
  "roasters-choice-of-the-month",
];

export default function Home() {
  const picks = featured.map((s) => products.find((p) => p.slug === s)!);
  return (
    <>
      {/* ————— HERO ————— */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="award-pill">🏆 2026 Meijer Award Winner · MSU Product Center</div>
            <h1 className="display">
              Never go without <span className="hl">super&nbsp;duper</span> good coffee.
            </h1>
            <p className="lead">
              Fresh roasted to order in Michigan. Cold brewed strong and smooth. Packed in
              adventure pouches and tap bags for the trail, the campsite, and everywhere a coffee shop isn&apos;t.
            </p>
            <div className="btn-row">
              <Link href="/shop?cat=cold-brew" className="btn primary">Shop Cold Brew</Link>
              <Link href="/shop?cat=coffee" className="btn ghost">Fresh Roasted Beans</Link>
            </div>
          </div>
          <div className="hero-art">
            <Image
              src="/brand/hero-splash.png"
              alt="Super Duper Cold Brew Adventure Pouches in medium and dark roast"
              width={679}
              height={534}
              priority
            />
          </div>
        </div>
      </section>

      {/* ————— FRESHNESS CYCLE ————— */}
      <section className="section dark">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow orange">The freshness cycle</span>
            <h2 className="display">Fresh isn&apos;t a vibe.<br />It&apos;s a Tuesday.</h2>
            <p className="lead">
              Every single order runs on a one-week freshness loop. That&apos;s not a slogan. It&apos;s the schedule.
            </p>
          </div>
          <div className="timeline">
            <div className="day-card">
              <span className="day">Tuesday</span>
              <h3>We roast</h3>
              <p>Beans from Guatemala, Colombia &amp; Costa Rica, roasted fresh in-house.</p>
            </div>
            <div className="day-card">
              <span className="day">Wednesday</span>
              <h3>We brew &amp; pack</h3>
              <p>Cold extracted, pouched, tap-bagged, and sealed at peak flavor. This is when the good vibes go in.</p>
            </div>
            <div className="day-card">
              <span className="day">Thursday</span>
              <h3>We ship</h3>
              <p>Out the door and on the way to your doorstep.</p>
            </div>
            <div className="day-card">
              <span className="day">Friday-ish</span>
              <h3>You win</h3>
              <p>Coffee that was green beans a week ago. You&apos;re welcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— BEST SELLERS ————— */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Adventure fuel</span>
            <h2 className="display">Crowd favorites</h2>
          </div>
          <div className="grid-4">
            {picks.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <div className="center mt-32">
            <Link href="/shop" className="btn dark">Shop everything <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ————— REVIEW ————— */}
      <section className="section deep">
        <div className="wrap center">
          <div className="stars" role="img" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((i) => <span key={i} aria-hidden>★</span>)}
          </div>
          <p className="review-quote mt-16">
            “It&apos;s like a <span className="hl">coffee Capri&nbsp;Sun</span>, except it actually wakes you up.”
          </p>
          <p className="lead mt-16" style={{ margin: "16px auto 0" }}>
            Verified customer review, Cold Brew Adventure Pouch
          </p>
          <p className="mt-24">
            <Link href="/rewards" className="btn ghost small">Leave a review, earn points <span className="arr">→</span></Link>
          </p>
        </div>
      </section>

      {/* ————— STORY TEASER ————— */}
      <section className="section">
        <div className="wrap story-band">
          <div>
            <span className="eyebrow">Made in Michigan</span>
            <h2 className="display">
              <span className="small-co">Small company.</span>
              Big deal.
            </h2>
            <p className="lead mt-16">
              Super Duper started small in Michigan and grew the honest way: through the MSU Product
              Center, farmers-market miles, and coffee good enough to talk about. In 2026, Meijer and the
              MSU Product Center named Super Duper Cold Brew a Meijer Award winner during National Small
              Business Week.
            </p>
            <div className="stat-row">
              <div className="stat"><div className="n">2026</div><div className="l">Meijer Award winner</div></div>
              <div className="stat"><div className="n">1 week</div><div className="l">Roast-to-door cycle</div></div>
              <div className="stat"><div className="n">3</div><div className="l">Origin countries</div></div>
            </div>
            <p className="mt-32"><Link href="/our-story" className="btn primary">Read our story</Link></p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card rotate-r" style={{ maxWidth: 380, padding: 0, overflow: "hidden" }}>
              <Image
                src="/products/mega-bien.png"
                alt="Super Duper Mega Bien Coffee Blend"
                width={380}
                height={380}
                style={{ width: "100%", height: "auto", borderBottom: "1px solid var(--hairline)" }}
              />
              <div style={{ padding: "10px 30px 34px" }}>
                <h3 className="display center mt-16">From our roaster to Meijer shelves</h3>
                <p className="center mt-8">Find us in stores across Michigan, or straight from the source right here.</p>
                <p className="center mt-16"><Link href="/find-us" className="btn dark small">Find us in stores <span className="arr">→</span></Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————— CLUBS BANNER ————— */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner">
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow" style={{ background: "var(--petrol)" }}>Clubs &amp; subscriptions</span>
              <h2 className="display">
                Coffee that <span className="shows-up">shows&nbsp;up</span> before you{" "}
                <span className="run-out">run&nbsp;out.</span>
              </h2>
              <p className="mt-8">
                Of-the-month clubs from $18, or subscribe to your favorites and save 12.5% on every
                delivery: weekly, bi-weekly, or monthly. Pause or cancel anytime.
              </p>
            </div>
            <Link href="/shop?cat=subscriptions" className="btn dark">Join a club <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ————— EMAIL ————— */}
      <section className="section deep" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <h2 className="display center">Get 50 points for showing up.</h2>
          <p className="lead center mt-16" style={{ margin: "14px auto 26px" }}>
            Join the list for new roasts, member-only drops, and points toward free coffee.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
