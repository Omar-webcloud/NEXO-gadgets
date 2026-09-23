import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_COUNTRY, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: "NEXO Gadgets | Best Gadget Shop in Chittagong & Mobile Accessories Bangladesh",
  description:
    "NEXO Gadgets is your premier gadget shop in Chittagong (Chattogram), Bangladesh. Discover premium mobile accessories, phone stands, fast chargers, wireless earbuds, power banks, smart devices, and lifestyle tech gadgets with fast delivery across Bangladesh.",
  keywords: [
    "NEXO gadgets",
    "gadget shop in chittagong",
    "gadget shop in chattogram",
    "Gadgets in chittagong",
    "Gadgets in chattogram",
    "best gadget shop in chittagong",
    "chittagong gadget shop",
    "chattogram gadget store",
    "mobile accessories chittagong",
    "NEXO Bangladesh",
    "Mobile Accessories Bangladesh",
    "Tech Gadgets Bangladesh",
    "Smart Gadgets Chittagong",
    "Phone Accessories Chattogram",
    "Fast Charger Bangladesh",
    "USB Cable",
    "Power Bank Chittagong",
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
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "NEXO Gadgets | Best Gadget Shop in Chittagong & Bangladesh",
    description:
      "Looking for the best gadgets in Chittagong? NEXO Gadgets offers premium mobile accessories, fast chargers, wireless audio, smart stands, and everyday tech essentials with fast home delivery in Chattogram and all over Bangladesh.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "NEXO Gadgets - Premier Gadget Shop in Chittagong, Bangladesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXO Gadgets | Gadget Shop in Chittagong, Bangladesh",
    description:
      "Premium mobile accessories, smart gadgets, and everyday tech essentials from NEXO Gadgets in Chittagong (Chattogram), Bangladesh.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "theme-color": "#ff5b10",
    "geo.region": "BD-13",
    "geo.placename": "Chittagong, Chattogram, Bangladesh",
    "geo.position": "22.3681;91.8085",
    ICBM: "22.3681, 91.8085",
  },
};

/* Structured Data (JSON-LD) */
const socialProfiles = [
  "https://www.facebook.com/nexogadg3ts",
  "https://www.instagram.com/nexo_bd",
  "https://www.tiktok.com/@nexogadg3ts",
  "https://www.youtube.com/@NEXO-bd",
  "https://wa.me/8801796073736",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ElectronicsStore", "LocalBusiness", "Store"],
  "@id": `${SITE_URL}/#store`,
  name: "NEXO Gadgets",
  alternateName: ["NEXO", "NEXO Bangladesh", "NEXO Chittagong", "NEXO Chattogram Gadgets"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-cover.jpg`,
  description:
    "NEXO Gadgets is a premier gadget shop in Chittagong (Chattogram), Bangladesh, offering top-tier mobile accessories, charging solutions, audio accessories, smart phone stands, and modern tech lifestyle products.",
  telephone: "+8801796073736",
  email: "nexogadg3ts@gmail.com",
  priceRange: "৳৳",
  currenciesAccepted: "BDT",
  paymentAccepted: "Cash on Delivery, bKash, Nagad, Mobile Banking",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chittagong",
    addressLocality: "Chittagong",
    addressRegion: "Chattogram",
    postalCode: "4000",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.368111,
    longitude: 91.8084865,
  },
  hasMap:
    "https://www.google.com/maps/place/NEXO/@22.368111,91.8084865,14z/data=!4m6!3m5!1s0x30acd900557f4431:0x80c153a7c03c1ceb!8m2!3d22.368111!4d91.8084865",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "22:00",
    },
  ],
  sameAs: socialProfiles,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NEXO Gadgets",
  alternateName: "NEXO",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "NEXO is a Bangladeshi technology accessories and smart gadgets brand based in Chittagong offering mobile accessories, charging solutions, audio accessories, wearable accessories, and everyday technology products.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+8801796073736",
    contactType: "customer service",
    areaServed: "BD",
    availableLanguage: ["English", "Bengali"],
  },
  sameAs: socialProfiles,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NEXO Gadgets",
  alternateName: ["NEXO", "NEXO Bangladesh", "NEXO Chittagong"],
  url: SITE_URL,
  sameAs: socialProfiles,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/products?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is NEXO gadget shop located in Chittagong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO is based in Chittagong (Chattogram), Bangladesh. We serve customers in Chittagong with fast local delivery and ship our premium tech gadgets and mobile accessories nationwide across Bangladesh.",
      },
    },
    {
      "@type": "Question",
      name: "What products does NEXO Gadgets sell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO Gadgets offers premium phone and tablet stands, rotatable magnetic laptop stands, fast chargers, charging cables, power banks, wireless earbuds, smart scalp massagers, mini portable fans, and everyday lifestyle tech accessories.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy gadgets in Chittagong / Chattogram from NEXO with Cash on Delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! NEXO provides fast delivery with Cash on Delivery (COD) throughout Chittagong and all divisions of Bangladesh.",
      },
    },
    {
      "@type": "Question",
      name: "What are NEXO official social media links?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can follow and contact NEXO on Facebook (https://www.facebook.com/nexogadg3ts), Instagram (https://www.instagram.com/nexo_bd), TikTok (https://www.tiktok.com/@nexogadg3ts), YouTube (https://www.youtube.com/@NEXO-bd), and WhatsApp at +8801796073736.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose NEXO Gadgets in Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NEXO products are designed with a focus on premium build quality, durability, modern ergonomic design, reliable warranty support, and affordable pricing.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-BD">
      <head>
        <meta name="google-site-verification" content="AProJEuc056711v17-vX-ITQusdcNFOchItLKFqPNY0" />
        <meta property="og:see_also" content="https://www.facebook.com/nexogadg3ts" />
        <meta property="og:see_also" content="https://www.instagram.com/nexo_bd" />
        <meta property="og:see_also" content="https://www.tiktok.com/@nexogadg3ts" />
        <meta property="og:see_also" content="https://www.youtube.com/@NEXO-bd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
