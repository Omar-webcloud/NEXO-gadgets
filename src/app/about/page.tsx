import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const pageUrl = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: "About NEXO Gadgets | Chattogram, Bangladesh",
  description:
    "Learn about NEXO Gadgets, a Chattogram-based Bangladesh brand for mobile accessories, charging solutions, audio products, stands, and everyday technology essentials.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "About NEXO Gadgets | Chattogram, Bangladesh",
    description:
      "NEXO Gadgets is a Chattogram-based technology accessories and smart gadgets brand serving Bangladesh.",
    url: pageUrl,
    type: "website",
    siteName: "NEXO Gadgets",
    locale: "en_BD",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "About NEXO Gadgets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NEXO Gadgets | Chattogram, Bangladesh",
    description: "The NEXO Gadgets technology accessories brand based in Chattogram, Bangladesh.",
    images: ["/images/og-cover.jpg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About NEXO Gadgets",
  url: pageUrl,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function AboutPage() {
  return (
    <main className="catalog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <section className="catalog-hero section-shell">
        <span className="eyebrow"><span /> About NEXO</span>
        <h1>NEXO Gadgets in Chattogram, Bangladesh</h1>
        <p>
          NEXO is a Bangladeshi technology accessories and smart gadgets brand based in Chattogram (Chittagong).
          We curate practical products that help people stay connected, productive, and comfortable every day.
        </p>
      </section>
      <section className="section-shell">
        <h2>What NEXO offers</h2>
        <p>
          Our product range includes mobile and charging accessories, USB cables, fast chargers, power banks, wireless earbuds,
          phone and laptop stands, wearable accessories, and lifestyle technology products.
        </p>
        <p>
          NEXO serves customers in Chattogram and delivers across Bangladesh with customer support through WhatsApp, social media,
          and the <Link href="/contact">NEXO contact page</Link>.
        </p>
        <p><Link href="/products">Explore NEXO products</Link> · <Link href="/gadget-shop-chattogram">Gadget shop in Chattogram</Link></p>
      </section>
    </main>
  );
}
