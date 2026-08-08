// Product catalog — prices, subscription terms, and points verified against
// superduperdrinks.com (Aug 2026 audit). Copy marked [demo] is concept copy
// for the pitch; swap for client-approved text before launch.

export type Category = "cold-brew" | "coffee" | "subscriptions" | "gift-cards";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: Category;
  price: number; // base price in USD
  priceLabel: string;
  subscription?: {
    label: string; // e.g. "12.5% off every delivery"
    frequencies: string[];
    subPrice?: number;
  };
  monthlyClub?: boolean; // coffee/cold-brew of the month style
  sale?: boolean;
  points: number; // reward points earned
  rating?: { stars: number; count: number };
  art: "pouch" | "tap" | "bag" | "gift"; // which SVG illustration
  artTint: string; // accent color for the illustration
  tagline: string;
  description: string[];
  details?: string[];
};

export const FREQUENCIES = [
  "Every month — on the 1st",
  "Every other Monday",
  "Every Monday",
];

export const products: Product[] = [
  // ————— COLD BREW —————
  {
    slug: "super-duper-cold-brew-adventure-pouch",
    name: "Super Duper Cold Brew Adventure Pouch — 6 Pack",
    shortName: "Cold Brew Adventure Pouch",
    category: "cold-brew",
    price: 24,
    priceLabel: "$24.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 21 },
    points: 24,
    rating: { stars: 5, count: 1 },
    art: "pouch",
    artTint: "#FF6B2C",
    tagline: "Ready-to-drink cold brew that goes where you go.",
    description: [
      "In your pocket, in your backpack, on the trail, on the water — six pouches of super duper strong and smooth cold brew, ready when you are.",
      "Fresh roasted in house, cold extracted, and sealed in recyclable pouches. One customer said it best: it's like a coffee Capri Sun — except it actually wakes you up.",
    ],
    details: ["6 pouches per pack", "Recyclable packaging", "No fridge required until opened"],
  },
  {
    slug: "super-dark-cold-brew-adventure-pouch",
    name: "Super Dark Roast Cold Brew Adventure Pouch — 6 Pack",
    shortName: "Super Dark Adventure Pouch",
    category: "cold-brew",
    price: 24,
    priceLabel: "$24.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 21 },
    points: 24,
    art: "pouch",
    artTint: "#3D2417",
    tagline: "[demo] The dark one. For people who mean it.",
    description: [
      "[demo] Everything you love about the Adventure Pouch, roasted darker and brewed bolder. Deep, smoky, zero bitterness — cold extraction keeps it smooth all the way down.",
    ],
    details: ["6 pouches per pack", "Dark roast", "Recyclable packaging"],
  },
  {
    slug: "super-duper-cold-brew-tap-bag",
    name: "Super Duper Cold Brew 50 oz. Tap Bag",
    shortName: "Cold Brew Tap Bag",
    category: "cold-brew",
    price: 23,
    priceLabel: "$23.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 20.13 },
    points: 23,
    art: "tap",
    artTint: "#FF6B2C",
    tagline: "50 ounces of cold brew. On tap, on demand.",
    description: [
      "Fifty ounces of ready-to-drink cold brew at your fingertips. A stand-up pouch with a handle and a tap spout — lift the nozzle, pour, conquer the morning.",
      "Beans sourced from Guatemala, Colombia, and Costa Rica, fresh roasted in house, and brewed with our own cold extraction method.",
    ],
    details: ["50 oz (1.5L) stand-up tap bag", "Fits on a fridge shelf", "Sourced from Guatemala, Colombia & Costa Rica"],
  },
  {
    slug: "super-dark-cold-brew-tap-bag",
    name: "Super Dark Roast Cold Brew 50 oz. Tap Bag",
    shortName: "Super Dark Tap Bag",
    category: "cold-brew",
    price: 23,
    priceLabel: "$23.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 20.13 },
    points: 23,
    art: "tap",
    artTint: "#3D2417",
    tagline: "[demo] The big bag, gone dark.",
    description: [
      "[demo] Our 50 oz. tap bag filled with the Super Dark roast. Rich, roasty, and dangerously easy to pour again.",
    ],
    details: ["50 oz (1.5L) stand-up tap bag", "Dark roast", "Tap spout — no tools required"],
  },

  // ————— FRESH ROASTED COFFEE —————
  {
    slug: "mega-bien-blend",
    name: "Super Duper Mega Bien Coffee Blend",
    shortName: "Mega Bien Blend",
    category: "coffee",
    price: 18,
    priceLabel: "$18.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 15.75 },
    points: 18,
    art: "bag",
    artTint: "#FF6B2C",
    tagline: "The coffiest tasting coffee ever.",
    description: [
      "This is Super Duper's main blend — medium roastiness with a balance of smooth, nutty chocolate. Roasted yesterday, on your doorstep at peak freshness.",
      "Sourced from Costa Rica, Colombia, and Guatemala. One pound of Mega Bien.",
    ],
    details: ["1 lb bag", "Medium roast", "Whole bean, medium, or coarse grind"],
  },
  {
    slug: "gnarly-and-nutty",
    name: "Gnarly & Nutty Coffee",
    shortName: "Gnarly & Nutty",
    category: "coffee",
    price: 18,
    priceLabel: "$18.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 15.75 },
    points: 18,
    art: "bag",
    artTint: "#C8871B",
    tagline: "[demo] Exactly what it says it is.",
    description: [
      "[demo] Gnarly up front, nutty all the way through. A roast with elbows — big toasted-nut flavor that stands up to cream or rides black just fine.",
    ],
    details: ["1 lb bag", "Whole bean, medium, or coarse grind", "Fresh roasted to order"],
  },
  {
    slug: "super-duper-dark-blend",
    name: "Super Duper Dark Blend",
    shortName: "Dark Blend",
    category: "coffee",
    price: 18,
    priceLabel: "$18.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 15.75 },
    points: 18,
    art: "bag",
    artTint: "#3D2417",
    tagline: "[demo] Dark, not burnt. There's a difference.",
    description: [
      "[demo] Roasted deep for people who like their coffee to sound like a decision. Smoky-sweet, heavy body, smooth landing.",
    ],
    details: ["1 lb bag", "Dark roast", "Whole bean, medium, or coarse grind"],
  },
  {
    slug: "costa-rica-honey-jaguar",
    name: "Costa Rica Honey Jaguar",
    shortName: "Honey Jaguar",
    category: "coffee",
    price: 20,
    priceLabel: "$20.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 17.5 },
    points: 20,
    art: "bag",
    artTint: "#E0A61B",
    tagline: "[demo] Single origin. Honey processed. Slightly famous.",
    description: [
      "[demo] A honey-processed single origin from Costa Rica — sweet, syrupy, and bright. The fancy one in the lineup, and it knows it.",
    ],
    details: ["1 lb bag", "Single origin — Costa Rica", "Honey process"],
  },
  {
    slug: "super-duper-decaf",
    name: "Super Duper Decaf",
    shortName: "Decaf",
    category: "coffee",
    price: 18,
    priceLabel: "$18.00",
    subscription: { label: "Subscribe & save 12.5%", frequencies: FREQUENCIES, subPrice: 15.75 },
    points: 18,
    art: "bag",
    artTint: "#7C9E6C",
    tagline: "[demo] All the flavor. None of the jitters.",
    description: [
      "[demo] Decaf that doesn't taste like a consolation prize. Fresh roasted like everything else we make, because 9pm coffee people are coffee people too.",
    ],
    details: ["1 lb bag", "Decaffeinated", "Whole bean, medium, or coarse grind"],
  },

  // ————— OF-THE-MONTH CLUBS & SUBSCRIBE-AND-SAVE —————
  {
    slug: "cold-brew-of-the-month-pouches",
    name: "Cold Brew of the Month — Adventure Pouches",
    shortName: "Cold Brew Club · Pouches",
    category: "subscriptions",
    price: 22,
    priceLabel: "From $22.00 / month",
    monthlyClub: true,
    points: 22,
    art: "pouch",
    artTint: "#7EA8D0",
    tagline: "A new cold brew adventure, delivered monthly.",
    description: [
      "Our roaster picks the month's brew, we pouch it, you drink it somewhere cool. Three-month commitment, cancel anytime after.",
    ],
    details: ["From $22/month", "3-month starter commitment", "Roaster-selected each month"],
  },
  {
    slug: "cold-brew-tap-bag-subscription",
    name: "Cold Brew of the Month — 50 oz. Tap Bag",
    shortName: "Cold Brew Club · Tap Bag",
    category: "subscriptions",
    price: 22,
    priceLabel: "From $22.00 / month",
    monthlyClub: true,
    points: 22,
    art: "tap",
    artTint: "#7EA8D0",
    tagline: "The big bag of the month, every month.",
    description: [
      "Fifty ounces of the roaster's monthly pick, on tap in your fridge. Three-month commitment, then month to month.",
    ],
    details: ["From $22/month", "3-month starter commitment", "50 oz tap bag"],
  },
  {
    slug: "roasters-choice-of-the-month",
    name: "Roaster's Choice Coffee of the Month",
    shortName: "Roaster's Choice Club",
    category: "subscriptions",
    price: 18,
    priceLabel: "From $18.00 / month",
    monthlyClub: true,
    points: 18,
    art: "bag",
    artTint: "#B05EC2",
    tagline: "Our roaster's monthly obsession, in your mailbox.",
    description: [
      "Every month our roaster picks a bean worth talking about, roasts it fresh, and ships it to you. Members vote on roast direction — lighter or darker — through the Roaster's Choice survey.",
    ],
    details: ["From $18/month", "3-month starter commitment", "Members help pick the roasts"],
  },
  {
    slug: "subscribe-save-mega-bien",
    name: "Subscribe & Save — Mega Bien Blend",
    shortName: "Mega Bien · Subscription",
    category: "subscriptions",
    price: 15.75,
    priceLabel: "From $15.75 / month",
    subscription: { label: "12.5% off every delivery", frequencies: FREQUENCIES },
    points: 16,
    art: "bag",
    artTint: "#FF6B2C",
    tagline: "Never run out of the coffiest coffee.",
    description: [
      "The Mega Bien Blend on autopilot — pick weekly, bi-weekly, or monthly delivery and lock in 12.5% off forever.",
    ],
    details: ["From $15.75/month", "Pause or cancel anytime", "12.5% subscriber discount"],
  },
  {
    slug: "subscribe-save-dark-blend",
    name: "Subscribe & Save — Super Duper Dark Blend",
    shortName: "Dark Blend · Subscription",
    category: "subscriptions",
    price: 15.75,
    priceLabel: "From $15.75 / month",
    subscription: { label: "12.5% off every delivery", frequencies: FREQUENCIES },
    sale: true,
    points: 16,
    art: "bag",
    artTint: "#3D2417",
    tagline: "The dark blend, on a schedule.",
    description: [
      "Super Duper Dark, delivered on your schedule with the subscriber discount locked in.",
    ],
    details: ["From $15.75/month", "Pause or cancel anytime", "12.5% subscriber discount"],
  },

  // ————— GIFT CARDS —————
  {
    slug: "gift-card",
    name: "Super Duper Gift Card",
    shortName: "Gift Card",
    category: "gift-cards",
    price: 25,
    priceLabel: "$25 – $100",
    points: 0,
    art: "gift",
    artTint: "#FF6B2C",
    tagline: "Send caffeine. Instantly.",
    description: [
      "An electronic gift card, straight to the inbox of your best friend, mom, dad, brother, sister, enemy — whoever. Delivered by email within minutes of purchase.",
    ],
    details: ["$25, $50, $75 or $100", "Delivered by email", "Never expires"],
  },
];

export const bySlug = (slug: string) => products.find((p) => p.slug === slug);

export const categories: { key: Category; label: string; blurb: string }[] = [
  { key: "cold-brew", label: "Cold Brew", blurb: "Pouches and tap bags — fresh roasted, cold extracted, ready anywhere." },
  { key: "coffee", label: "Fresh Roasted", blurb: "Roasted to order. Roast Tuesday, at your door by the weekend." },
  { key: "subscriptions", label: "Clubs & Subscriptions", blurb: "Of-the-month clubs and subscribe-and-save — 12.5% off, forever." },
  { key: "gift-cards", label: "Gift Cards", blurb: "Instant email delivery. $25 to $100." },
];
