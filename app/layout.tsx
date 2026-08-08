import type { Metadata } from "next";
import "@fontsource/archivo-black";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://superduperdrinks.com"),
  title: {
    default: "Super Duper Coffee — Fresh Roasted Coffee & Cold Brew, Made in Michigan",
    template: "%s · Super Duper Coffee",
  },
  description:
    "Super duper good coffee, roasted fresh to order in Michigan. Cold brew adventure pouches, 50 oz tap bags, fresh roasted beans, and coffee subscriptions — 2026 Meijer Award winner.",
  openGraph: {
    siteName: "Super Duper Coffee",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
