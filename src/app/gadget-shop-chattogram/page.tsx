import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const pageUrl = `${SITE_URL}/gadget-shop-chattogram`;
const mapsUrl =
  "https://www.google.com/maps/place/NEXO/@22.368111,91.8084865,14z/data=!4m6!3m5!1s0x30acd900557f4431:0x80c153a7c03c1ceb!8m2!3d22.368111!4d91.8084865";

export const metadata: Metadata = {
  title: "Gadget Shop in Chattogram | NEXO Gadgets Bangladesh",
  description:
    "NEXO Gadgets is a Chattogram-based gadget shop offering mobile accessories, charging products, stands, audio gadgets, power banks, and everyday tech essentials across Bangladesh.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Gadget Shop in Chattogram | NEXO Gadgets",
    description:
      "Shop NEXO mobile accessories, charging products, stands, audio gadgets, and everyday tech essentials from Chattogram, Bangladesh.",
    url: pageUrl,
    type: "website",
    siteName: "NEXO Gadgets",
    locale: "en_BD",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "NEXO Gadgets in Chattogram" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gadget Shop in Chattogram | NEXO Gadgets",
    description: "NEXO Gadgets serves Chattogram and delivers tech accessories across Bangladesh.",
    images: ["/images/og-cover.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectronicsStore"],
  "@id": `${SITE_URL}/#store`,
  name: "NEXO Gadgets",
  url: pageUrl,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-cover.jpg`,
  telephone: "+8801796073736",
  email: "nexogadg3ts@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chittagong",
    addressLocality: "Chittagong",
    addressRegion: "Chattogram",
    postalCode: "4000",
    addressCountry: "BD",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.368111, longitude: 91.8084865 },
  hasMap: mapsUrl,
  areaServed: ["Chittagong", "Chattogram", "Bangladesh"],
  sameAs: [
    "https://www.facebook.com/nexogadg3ts",
    "https://www.instagram.com/nexo_bd",
    "https://www.tiktok.com/@nexogadg3ts",
    "https://www.youtube.com/@NEXO-bd",
    "https://wa.me/8801796073736",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Gadget Shop in Chattogram", item: pageUrl },
  ],
};

export default function GadgetShopChattogramPage() {
  return (
    <main className="catalog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="catalog-hero section-shell">
        <span className="eyebrow"><span /> Local gadget shop</span>
        <h1>Gadget Shop in Chattogram</h1>
        <p>
          NEXO Gadgets is a Chattogram-based technology accessories brand serving customers in Chittagong and across Bangladesh.
          We offer mobile accessories, charging solutions, phone and laptop stands, wireless audio, power banks, and practical everyday tech.
        </p>
      </section>
      <section className="section-shell">
        <h2>Shop NEXO Gadgets in Chittagong</h2>
        <p>
          Customers can browse NEXO products online, order by WhatsApp, and receive delivery in Chattogram or nationwide through Bangladesh.
          Cash on Delivery is available for eligible orders.
        </p>
        <p>
          NEXO Gadgets, Chittagong, Bangladesh<br />
          Phone: <a href="tel:+8801796073736">+880 1796-073736</a><br />
          Email: <a href="mailto:nexogadg3ts@gmail.com">nexogadg3ts@gmail.com</a>
        </p>
        <p><a href={mapsUrl}>View NEXO on Google Maps</a></p>
        <p><Link href="/products">Browse all NEXO products</Link> · <Link href="/contact">Contact NEXO</Link></p>
      </section>
    </main>
  );
}
