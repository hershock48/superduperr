import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section center" style={{ padding: "110px 24px" }}>
      <div className="wrap" style={{ maxWidth: 560 }}>
        <div style={{ fontSize: 60 }}>☕💨</div>
        <h1 className="display mt-24" style={{ fontSize: "clamp(34px,5vw,54px)" }}>
          This page is decaf.
        </h1>
        <p className="lead mt-16" style={{ margin: "16px auto 0" }}>
          Whatever was here is gone or never existed — but the coffee is very real and very nearby.
        </p>
        <div className="btn-row mt-32" style={{ justifyContent: "center" }}>
          <Link href="/shop" className="btn primary">Shop coffee</Link>
          <Link href="/" className="btn ghost">Go home</Link>
        </div>
      </div>
    </section>
  );
}
