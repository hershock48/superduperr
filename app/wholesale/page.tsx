import type { Metadata } from "next";
import WholesaleForm from "@/components/WholesaleForm";

export const metadata: Metadata = {
  title: "Wholesale — Stock Super Duper in Your Store",
  description:
    "Wholesale Michigan cold brew and fresh roasted coffee for grocers, cafés, gyms, and offices. 2026 Meijer Award winner, weekly freshness cycle. Apply for an account.",
};

export default function Wholesale() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow orange">Wholesale</span>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,64px)" }}>
            Put Super Duper on your shelves.
          </h1>
          <p className="lead mt-24">
            We partner with grocers, cafés, gyms, offices, and shops that want award-winning Michigan
            cold brew and fresh roasted coffee — delivered on a weekly freshness cycle, with real
            humans answering the email.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-3">
          <div className="card">
            <h3 className="display" style={{ fontSize: 19 }}>What we wholesale</h3>
            <p className="mt-8">
              Cold brew adventure pouches (grab-and-go), 50 oz tap bags (fridge and events), and fresh
              roasted 1 lb bags — plus rotating seasonal roasts.
            </p>
          </div>
          <div className="card">
            <h3 className="display" style={{ fontSize: 19 }}>Why partners like us</h3>
            <p className="mt-8">
              2026 Meijer Award winner via the MSU Product Center, a Michigan-made story your customers
              actually care about, and packaging that sells itself.
            </p>
          </div>
          <div className="card">
            <h3 className="display" style={{ fontSize: 19 }}>How it works</h3>
            <p className="mt-8">
              Apply below, get approved, and unlock wholesale pricing in your account. Order online
              anytime — subscriptions or one-time — roasted fresh for every delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section deep" style={{ paddingBottom: 84 }}>
        <div className="wrap grid-2" style={{ alignItems: "start", gap: 44 }}>
          <div>
            <h2 className="display">Apply for a wholesale account</h2>
            <p className="lead mt-16">
              Tell us about your business and we&apos;ll get right back to you with pricing, minimums,
              and a sample kit.
            </p>
            <p className="mt-16" style={{ fontWeight: 700 }}>sup@superduperdrinks.com</p>
            <p className="demo-note mt-16">[Concept — form submits to the live store in production]</p>
          </div>
          <WholesaleForm />
        </div>
      </section>
    </>
  );
}
