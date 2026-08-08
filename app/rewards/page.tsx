import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Rewards — Points for Coffee, Photos & Friends",
  description:
    "Super Duper Rewards: 50 points for joining, points on every order, 100 points for photo and video uploads, and send points to friends. Points = free coffee.",
};

const WAYS = [
  { icon: "👋", title: "Join the club", pts: "+50 pts", body: "Create an account and you're 50 points closer to free coffee before you've bought anything." },
  { icon: "☕", title: "Buy coffee", pts: "+1 pt / $1", body: "Every order earns points automatically. Buy coffee, earn coffee. The circle of life." },
  { icon: "📸", title: "Upload your adventures", pts: "+100 pts", body: "Post a photo or video of your Super Duper coffee in the wild and we'll load 100 points onto your account." },
  { icon: "⭐", title: "Review what you drink", pts: "+ pts", body: "Tell the world what you think — reviews earn bonus points. (Honest ones. We can take it.)" },
];

export default function Rewards() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <span className="eyebrow orange">Super Duper Rewards</span>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,64px)" }}>
            Points are just<br />coffee you haven&apos;t<br />claimed yet.
          </h1>
          <p className="lead mt-24">
            Every order, review, and adventure photo earns Super Duper points — and points spend like
            cash on anything in the shop. Here&apos;s the whole program, no fine-print archaeology required.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-4">
          {WAYS.map((w) => (
            <div className="card" key={w.title}>
              <div style={{ fontSize: 40 }}>{w.icon}</div>
              <div className="sticker mt-16">{w.pts}</div>
              <h3 className="display mt-16" style={{ fontSize: 18 }}>{w.title}</h3>
              <p className="mt-8">{w.body}</p>
            </div>
          ))}
        </div>
        <div className="wrap">
          <p className="demo-note mt-24">
            [Concept — earning rates shown match the current program where verified; review bonus is a
            proposed addition to solve the social-proof gap]
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap story-band">
          <div>
            <span className="eyebrow orange">The good part</span>
            <h2 className="display">Send points to a friend.</h2>
            <p className="lead mt-16">
              Earned a pile of points but fully stocked on coffee? Beam some to a friend so they never
              have to go without Super Duper good coffee either. It&apos;s the most caffeinated gift
              that costs you nothing.
            </p>
            <p className="mt-32">
              <Link href="/shop" className="btn primary">Start earning →</Link>
            </p>
          </div>
          <div className="day-card rotate-l" style={{ alignSelf: "center", maxWidth: 340 }}>
            <div style={{ fontSize: 44 }}>💌</div>
            <h3 className="display mt-16" style={{ fontSize: 20 }}>Points, gifted</h3>
            <p className="mt-8">Log in → Rewards → Send points. Your friend gets coffee money; you get the credit.</p>
          </div>
        </div>
      </section>

      <section className="section deep" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <h2 className="display center">Grab your first 50 points.</h2>
          <p className="lead center" style={{ margin: "14px auto 26px" }}>
            Join the list, make an account, and you&apos;re already halfway to a free pouch.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
