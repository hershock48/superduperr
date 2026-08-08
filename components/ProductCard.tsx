import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductArt from "./ProductArt";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="pcard">
      <div className="pcard-badges">
        {p.sale && <span className="sticker orange">Sale</span>}
        {p.monthlyClub && <span className="sticker blue">Club</span>}
        {p.rating && <span className="sticker">★ {p.rating.stars.toFixed(1)}</span>}
      </div>
      <div className="pcard-art" style={{ background: "#f3e7d3" }}>
        <ProductArt kind={p.art} tint={p.artTint} size={120} />
      </div>
      <div className="pcard-body">
        <div className="pcard-name">{p.shortName}</div>
        <div className="pcard-tag">{p.tagline.replace("[demo] ", "")}</div>
        <div className="pcard-meta">
          <span className="pcard-price">{p.priceLabel}</span>
          {p.points > 0 && <span className="points-chip">+{p.points} pts</span>}
        </div>
      </div>
    </Link>
  );
}
