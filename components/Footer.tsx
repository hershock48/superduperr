import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              Super Duper<span className="drop">.</span>
            </div>
            <p style={{ color: "#cfc3b8", marginTop: 14, fontSize: 15 }}>
              Super duper good coffee, roasted fresh to order in Michigan.
              Never go without.
            </p>
            <p style={{ color: "#a89a8d", marginTop: 14, fontSize: 14 }}>
              sup@superduperdrinks.com
              <br />
              [Street address &amp; phone — add before launch]
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/shop?cat=cold-brew">Cold Brew</Link></li>
              <li><Link href="/shop?cat=coffee">Fresh Roasted</Link></li>
              <li><Link href="/shop?cat=subscriptions">Clubs &amp; Subscriptions</Link></li>
              <li><Link href="/product/gift-card">Gift Cards</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/find-us">Find Us in Stores</Link></li>
              <li><Link href="/wholesale">Wholesale</Link></li>
              <li><Link href="/news">Super Duper News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li><Link href="/rewards">Rewards &amp; Points</Link></li>
              <li><Link href="/contact">Shipping &amp; Refunds</Link></li>
              <li><Link href="/contact">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Super Duper Company LLC. All rights reserved.</span>
          <span>
            Concept build by <a href="https://glazedweb.com">Glazed Web</a> — demo data, not a live store.
          </span>
        </div>
      </div>
    </footer>
  );
}
