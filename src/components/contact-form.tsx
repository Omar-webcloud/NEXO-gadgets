"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, Send, Sparkles } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const inquiry = formData.get("inquiry") as string;
    const message = formData.get("message") as string;

    const formattedText = `*New Inquiry for NEXO Gadgets (Chittagong)*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📌 *Topic:* ${inquiry || "General Inquiry"}\n💬 *Message:*\n${message}`;

    const whatsappUrl = `https://wa.me/8801796073736?text=${encodeURIComponent(formattedText)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-success">
        <div className="success-icon-badge">
          <CheckCircle2 size={36} />
        </div>
        <h3>Thank You for Contacting NEXO!</h3>
        <p>
          Your message has been initiated via WhatsApp. Our Chittagong support team will get back to you shortly.
        </p>
        <button
          type="button"
          className="button button-outline"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-cta-form" onSubmit={handleSubmit}>
      <div className="form-field-group">
        <label htmlFor="contact-name">
          Your Full Name <span className="req">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="e.g. Tanvir Ahmed"
          required
          className="form-control-input"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="contact-phone">
          Phone or WhatsApp Number <span className="req">*</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="e.g. 017XXXXXXXX"
          required
          className="form-control-input"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="contact-inquiry">Inquiry Type</label>
        <select id="contact-inquiry" name="inquiry" className="form-control-select" defaultValue="Product Inquiry">
          <option value="Product Inquiry">Product Inquiry (Stands, Chargers, Audio)</option>
          <option value="Chittagong Delivery & Ordering">Chittagong Delivery &amp; Ordering</option>
          <option value="Bulk / Corporate Orders">Bulk / Corporate Orders</option>
          <option value="Warranty & After-Sales Support">Warranty &amp; After-Sales Support</option>
          <option value="General Question">General Question</option>
        </select>
      </div>

      <div className="form-field-group">
        <label htmlFor="contact-message">
          Your Message <span className="req">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="How can NEXO help you today? Tell us about the gadgets or service you are interested in..."
          required
          className="form-control-textarea"
        />
      </div>

      <button type="submit" className="button button-dark contact-submit-button" disabled={loading}>
        <Send size={18} />
        <span>{loading ? "Sending..." : "Submit Message (WhatsApp Direct)"}</span>
      </button>

      <p className="form-disclaimer">
        🔒 We respect your privacy. Your information will only be used to answer your inquiry.
      </p>
    </form>
  );
}
