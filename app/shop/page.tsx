import type { Metadata } from "next";
import Link from "next/link";
import { products, categories, type Category } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop Cold Brew, Fresh Roasted Coffee & Subscriptions",
  description:
    "Shop Super Duper cold brew adventure pouches, 50 oz tap bags, fresh roasted Michigan coffee, of-the-month clubs, and gift cards. Subscribe and save 12.5%.",
};

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const active = (categories.some((c) => c.key === cat) ? cat : undefined) as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;
  const blurb = active ? categories.find((c) => c.key === active)?.blurb : "Everything we make. All of it super duper.";

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The shop</span>
          <h1 className="display" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
            {active ? categories.find((c) => c.key === active)?.label : "All the goods"}
          </h1>
          <p className="lead mt-16">{blurb}</p>
        </div>

        <div className="tabs">
          <Link href="/shop" className={`tab${!active ? " active" : ""}`}>All ({products.length})</Link>
          {categories.map((c) => (
            <Link
              key={c.key}
              href={`/shop?cat=${c.key}`}
              className={`tab${active === c.key ? " active" : ""}`}
            >
              {c.label} ({products.filter((p) => p.category === c.key).length})
            </Link>
          ))}
        </div>

        <div className="grid-3">
          {list.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>

        <div className="card mt-48" style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h3 className="display">Every order earns points.</h3>
            <p>Points add up to free coffee. Reviews and photo uploads earn extra.</p>
          </div>
          <Link href="/rewards" className="btn dark small">How rewards work →</Link>
        </div>
      </div>
    </section>
  );
}
