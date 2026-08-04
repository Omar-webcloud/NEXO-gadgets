import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | NEXO Bangladesh",
  description:
    "Read the NEXO Bangladesh terms and conditions, including orders, pricing, delivery, warranty, and the 3-day return policy.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero section-shell">
        <span className="eyebrow"><span /> Terms</span>
        <h1>Terms and Conditions</h1>
        <p>Last updated: August 4, 2026</p>
      </section>

      <section className="policy-content section-shell">
        <h2>Orders and availability</h2>
        <p>
          Product availability, pricing, colors, and specifications may change without prior notice. An order is confirmed only after NEXO verifies availability, payment status, customer details, and delivery information.
        </p>

        <h2>Pricing and payment</h2>
        <p>
          Prices are shown in Bangladeshi Taka unless stated otherwise. NEXO may correct pricing errors, reject suspicious transactions, or request payment confirmation before processing an order.
        </p>

        <h2>Delivery</h2>
        <p>
          Delivery times are estimates and may vary due to courier delays, location, weather, public holidays, incorrect customer information, or circumstances outside our control. Customers must provide accurate contact and delivery details.
        </p>

        <h2>3-day return policy</h2>
        <p>
          Return requests must be made within 3 days of delivery. To protect both customers and NEXO, returns are accepted only when the product is unused, undamaged, complete, and returned with original packaging, accessories, manuals, invoice, and proof of purchase.
        </p>
        <p>
          Returns may be rejected if the product is used, physically damaged, scratched, water damaged, missing parts, missing packaging, altered, repaired by a third party, or returned after the 3-day window. Return shipping or courier charges may be the customer&apos;s responsibility unless NEXO confirms that the wrong or defective product was delivered.
        </p>

        <h2>Warranty support</h2>
        <p>
          Warranty support applies only to eligible manufacturing defects and may vary by product. Warranty does not cover misuse, accidental damage, water damage, unauthorized repair, normal wear, cosmetic damage, or damage caused by incompatible devices, chargers, cables, or accessories.
        </p>

        <h2>Refunds and replacements</h2>
        <p>
          Approved returns may be resolved through replacement, repair, store credit, or refund at NEXO&apos;s discretion after inspection. Refund timing may vary depending on payment method and service provider processing times.
        </p>

        <h2>Product use</h2>
        <p>
          Customers are responsible for using products safely and according to product instructions. NEXO is not responsible for damage caused by misuse, incompatible devices, improper installation, or failure to follow safety guidance.
        </p>

        <h2>Contact</h2>
        <p>
          For order, warranty, or return questions, contact us at <a href="mailto:nexogadg3ts@gmail.com">nexogadg3ts@gmail.com</a> or through our <Link href="/#contact">contact section</Link>.
        </p>
      </section>
    </main>
  );
}
