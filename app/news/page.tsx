import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Super Duper News",
  description:
    "News from the roastery: new beans, roaster's choice picks, award announcements, and what's brewing at Super Duper Coffee in Michigan.",
};

type Post = {
  title: string;
  date: string;
  blurb: string;
  tag: string;
  concept?: boolean;
};

const POSTS: Post[] = [
  {
    title: "We won a Meijer Award (and we're still grinning)",
    date: "May 2026",
    tag: "Big news",
    blurb:
      "During National Small Business Week, Meijer and the MSU Product Center named Super Duper Cold Brew a 2026 Meijer Award winner. Here's what that means, and where you'll find us next.",
    concept: true,
  },
  {
    title: "What Roast Tuesday actually looks like",
    date: "April 2026",
    tag: "Behind the scenes",
    blurb:
      "A photo tour of the one-week freshness cycle: green beans in, roaster running, pouches sealed, boxes out the door by Thursday.",
    concept: true,
  },
  {
    title: "New Beans Who Dis",
    date: "March 2025",
    tag: "New roasts",
    blurb: "Excited for some new freshness 😎. Fresh arrivals hitting the roaster this month.",
  },
  {
    title: "February Roaster's Choice: Sumatra Mandheling",
    date: "February 2024",
    tag: "Roaster's choice",
    blurb: "This month's members-only pick: a big, earthy Sumatra Mandheling, roasted the Super Duper way.",
  },
  {
    title: "It's like a Super Duper Coffee Club",
    date: "July 2023",
    tag: "Clubs",
    blurb: "Everything you need to know about the of-the-month clubs, and how members steer the roasts.",
  },
];

export default function News() {
  return (
    <section className="section" style={{ paddingTop: 64, paddingBottom: 84 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Super Duper news</span>
          <h1 className="display" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
            Fresh off the roaster.
          </h1>
          <p className="lead mt-16">
            New beans, member picks, award news, and the occasional coffee opinion nobody asked for.
          </p>
        </div>
        <div className="grid-2">
          {POSTS.map((p) => (
            <article className="card" key={p.title}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                <span className="sticker" style={{ transform: "none" }}>{p.tag}</span>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink-soft)" }}>{p.date}</span>
                {p.concept && <span className="demo-note" style={{ padding: "2px 8px" }}>concept post</span>}
              </div>
              <h3 className="display" style={{ fontSize: 20 }}>{p.title}</h3>
              <p className="mt-8">{p.blurb}</p>
            </article>
          ))}
        </div>
        <div className="banner mt-48" style={{ background: "var(--ink)" }}>
          <div style={{ maxWidth: 560 }}>
            <h2 className="display" style={{ fontSize: 26 }}>Never miss a drop.</h2>
            <p style={{ color: "#cfc3b8", marginTop: 6 }}>
              New roasts and news, straight to your inbox, plus 50 points for joining.
            </p>
          </div>
          <Link href="/rewards" className="btn primary">Join the list <span className="arr">→</span></Link>
        </div>
      </div>
    </section>
  );
}
