import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const SITE_URL = "https://nexogadgets.com";

export const metadata: Metadata = {
  title: "NEXO Bangladesh | Premium Mobile Accessories, Tech Gadgets & Smart Devices",
  description:
    "Discover premium mobile accessories, tech gadgets, charging solutions, audio accessories, smart devices, wearable accessories, and everyday tech essentials from NEXO Bangladesh. Quality products designed to keep you connected and productive.",
  keywords: [
    "NEXO Bangladesh",
    "Mobile Accessories Bangladesh",
    "Tech Gadgets Bangladesh",
    "Smart Gadgets",
    "Phone Accessories",
    "Fast Charger",
    "USB Cable",
    "Power Bank",
    "Wireless Earbuds",
    "Best Mobile Accessories Bangladesh",
    "Premium Tech Accessories",
    "Charging Accessories",
    "Audio Accessories",
    "Smart Devices",
    "Wearable Accessories",
    "Mobile Gadgets",
    "Phone Charger Bangladesh",
    "USB Type C Cable",
    "Bluetooth Speaker",
    "Wireless Charger",
    "Mobile Tech Products",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NEXO",
    title: "NEXO Bangladesh | Premium Mobile Accessories, Tech Gadgets & Smart Devices",
    description:
      "Discover premium mobile accessories, tech gadgets, charging solutions, audio accessories, smart devices, wearable accessories, and everyday tech essentials from NEXO Bangladesh.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "NEXO Bangladesh — Premium Tech Accessories" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXO Bangladesh | Premium Mobile Accessories & Tech Gadgets",
    description:
      "Premium mobile accessories, smart gadgets, and everyday tech essentials from NEXO Bangladesh.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#ff5b10",
  },
};

/* ── Structured Data (JSON-LD) ── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NEXO",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "NEXO is a Bangladeshi technology accessories and smart gadgets brand offering mobile accessories, charging solutions, audio accessories, wearable accessories, and everyday technology products.",
  sameAs: [
    "https://www.facebook.com/nexogadg3ts",
    "https://www.instagram.com/nexo_bd",
    "https://www.tiktok.com/@nexogadg3ts",
    "https://www.youtube.com/@NEXO-bd",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NEXO",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NEXO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO is a Bangladeshi technology accessories brand that offers mobile accessories, charging products, smart gadgets, wearable accessories, audio products, and everyday technology essentials.",
      },
    },
    {
      "@type": "Question",
      name: "What products does NEXO sell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO offers mobile accessories, fast chargers, charging cables, USB cables, wireless chargers, power banks, earphones, wireless earbuds, Bluetooth speakers, smart gadgets, wearable accessories, phone holders, computer accessories, and lifestyle electronics.",
      },
    },
    {
      "@type": "Question",
      name: "Is NEXO a Bangladeshi brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NEXO is a growing Bangladeshi technology accessories brand focused on delivering quality products for modern consumers.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose NEXO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO products are designed with a focus on quality, durability, performance, modern design, and affordability, making them suitable for everyday use.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy NEXO products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO products are available through authorized retailers, online marketplaces, and the official NEXO website.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="rFFlsMVXMOTWg6H0_zw9h7xy0TP_4pK0Hmwixt9Gzzo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
