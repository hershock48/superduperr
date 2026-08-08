import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="pcard">
      <div className="pcard-badges">
        {p.sale && <span className="sticker orange">Sale</span>}
        {p.monthlyClub && <span className="sticker blue">Club</span>}
        {p.rating && <span className="sticker">★ {p.rating.stars.toFixed(1)}</span>}
      </div>
      <div className={`pcard-art${p.imageFull ? " full" : ""}`}>
        <Image src={p.image} alt={p.name} width={400} height={400} />
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
