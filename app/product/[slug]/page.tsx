import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { products, bySlug, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import BuyBox from "@/components/BuyBox";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.tagline.replace("[demo] ", "")} ${p.priceLabel}. Fresh from Super Duper Coffee in Michigan.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();

  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  const catLabel = categories.find((c) => c.key === p.category)?.label;

  return (
    <>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <p style={{ marginBottom: 26, fontWeight: 700, fontSize: 14 }}>
            <Link href="/shop" style={{ textDecoration: "none", color: "var(--ink-soft)" }}>Shop</Link>
            {" / "}
            <Link href={`/shop?cat=${p.category}`} style={{ textDecoration: "none", color: "var(--ink-soft)" }}>{catLabel}</Link>
            {" / "}
            <strong>{p.shortName}</strong>
          </p>
          <div className="grid-2" style={{ gap: 44, alignItems: "start" }}>
            <div className={`pphoto${p.imageFull ? "" : " pad"}`}>
              <Image src={p.image} alt={p.name} width={640} height={640} priority />
            </div>
            <div>
              {p.rating ? (
                <p style={{ marginBottom: 10 }}>
                  <span className="stars" role="img" aria-label={`${p.rating.stars.toFixed(1)} out of 5 stars`}>
                    {Array.from({ length: Math.round(p.rating.stars) }).map((_, i) => (
                      <span key={i} aria-hidden>★</span>
                    ))}
                  </span>{" "}
                  <strong>{p.rating.stars.toFixed(1)}</strong>{" "}
                  <span style={{ color: "var(--ink-soft)" }}>({p.rating.count} review{p.rating.count > 1 ? "s" : ""})</span>
                </p>
              ) : (
                <p style={{ marginBottom: 10, color: "var(--ink-soft)", fontWeight: 700, fontSize: 14 }}>
                  Be the first review and earn bonus points ⭐
                </p>
              )}
              <h1 className="display" style={{ fontSize: "clamp(28px,4vw,44px)" }}>{p.name}</h1>
              <p className="lead mt-16">{p.tagline.replace("[demo] ", "")}</p>
              <div className="mt-24">
                <BuyBox p={p} />
              </div>
            </div>
          </div>

          <div className="grid-2 mt-48" style={{ alignItems: "start" }}>
            <div>
              <h3 className="display">The details</h3>
              {p.description.map((d, i) => (
                <p key={i} className="mt-16" style={{ color: "var(--ink-soft)" }}>
                  {d.replace("[demo] ", "")}
                </p>
              ))}
            </div>
            {p.details && (
              <div className="card">
                <h3 className="display" style={{ fontSize: 18 }}>Quick facts</h3>
                <ul style={{ marginTop: 12, marginLeft: 20 }}>
                  {p.details.map((d) => (
                    <li key={d} style={{ marginBottom: 8, color: "var(--ink-soft)" }}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section deep" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <div className="wrap">
            <h2 className="display" style={{ marginBottom: 28 }}>Goes great with</h2>
            <div className="grid-3">
              {related.map((r) => <ProductCard key={r.slug} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
