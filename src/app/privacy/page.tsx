import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NEXO Bangladesh",
  description:
    "Read the NEXO Bangladesh privacy policy, including how customer information is collected, used, protected, and shared for orders and support.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero section-shell">
        <span className="eyebrow"><span /> Privacy Policy</span>
        <h1>Privacy Policy</h1>
        <p>Last updated: August 4, 2026</p>
      </section>

      <section className="policy-content section-shell">
        <h2>Information we collect</h2>
        <p>
          NEXO may collect customer information such as name, phone number, email address, delivery address, order details, payment confirmation details, and messages sent through our website, email, WhatsApp, or social channels.
        </p>

        <h2>How we use information</h2>
        <p>
          We use customer information to process orders, arrange delivery, provide support, confirm payments, handle warranty or return requests, improve our products, and communicate important order updates.
        </p>

        <h2>Sharing information</h2>
        <p>
          We do not sell customer personal information. We may share only the information needed with delivery partners, payment processors, service providers, or legal authorities when required to complete an order, protect our business, or comply with applicable law.
        </p>

        <h2>Data security</h2>
        <p>
          We take reasonable steps to protect customer information from unauthorized access, misuse, or loss. No online system is completely risk-free, so customers should avoid sending sensitive payment credentials or passwords through chat or email.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          Our website may use cookies or analytics tools to understand site performance, improve browsing, and measure product interest. Customers can manage cookies through their browser settings.
        </p>

        <h2>Customer rights</h2>
        <p>
          Customers may request correction or deletion of personal information when legally and operationally possible. Some order records may be retained for accounting, fraud prevention, dispute handling, or legal compliance.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions, contact us at <a href="mailto:nexogadg3ts@gmail.com">nexogadg3ts@gmail.com</a> or through our <Link href="/#contact">contact section</Link>.
        </p>
      </section>
    </main>
  );
}
