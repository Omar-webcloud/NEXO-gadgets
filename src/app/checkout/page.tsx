"use client";

import { useCart } from "@/lib/cart";
import { BANGLADESH_DIVISIONS, getDeliveryFee } from "@/lib/location-data";
import { formatColorName } from "@/lib/products";
import { ArrowLeft, CheckCircle2, MapPin, MessageCircle, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { items } = useCart();
  const [mounted, setMounted] = useState(false);

  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  // Validation State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="checkout-page text-center py-20">
        <p>Loading checkout...</p>
      </main>
    );
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = getDeliveryFee(district);
  const total = subtotal + deliveryFee;

  const isChittagong = district.trim().toLowerCase() === "chattogram" || district.trim().toLowerCase() === "chittagong";

  const formatBDT = (value: number) =>
    new Intl.NumberFormat("bn-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(value);

  // When division changes, update or filter available districts
  const selectedDivisionObj = BANGLADESH_DIVISIONS.find((d) => d.name === division || d.id === division);
  const availableDistricts = selectedDivisionObj
    ? selectedDivisionObj.districts
    : BANGLADESH_DIVISIONS.flatMap((d) => d.districts).sort();

  const handleDivisionChange = (newDivision: string) => {
    setDivision(newDivision);
    const divObj = BANGLADESH_DIVISIONS.find((d) => d.name === newDivision);
    if (divObj && district && !divObj.districts.includes(district)) {
      setDistrict("");
    }
  };

  const handleDistrictChange = (newDistrict: string) => {
    setDistrict(newDistrict);
    const parentDiv = BANGLADESH_DIVISIONS.find((d) => d.districts.includes(newDistrict));
    if (parentDiv && parentDiv.name !== division) {
      setDivision(parentDiv.name);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number (e.g., 01700000000)";
    }
    
    if (!division) newErrors.division = "Please select your division";
    if (!district) newErrors.district = "Please select your district";
    if (!address.trim()) newErrors.address = "Detailed address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to first error on mobile
      const firstError = document.querySelector(".input-error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const deliveryNoteText = isChittagong ? "Inside Chittagong (100 Tk)" : "Outside Chittagong (160 Tk)";

    const textItems = items
      .map(
        (i, index) =>
          `${index + 1}. *${i.name}*\n   Color: ${formatColorName(i.color)} | Qty: ${i.quantity} | Price: ${formatBDT(i.price * i.quantity)}`
      )
      .join("\n\n");

    const messageText =
      `🛒 *NEW ORDER - NEXO GADGETS*\n` +
      `───────────────────────\n` +
      `👤 *CUSTOMER DETAILS*\n` +
      `• *Name:* ${fullName.trim()}\n` +
      `• *Phone:* ${phone.trim()}\n` +
      `• *Division:* ${division}\n` +
      `• *District:* ${district}\n` +
      `• *Detailed Address:* ${address.trim()}\n` +
      (note.trim() ? `• *Order Note:* ${note.trim()}\n` : "") +
      `───────────────────────\n` +
      `📦 *ORDERED ITEMS*\n` +
      `${textItems}\n` +
      `───────────────────────\n` +
      `💵 *PAYMENT SUMMARY*\n` +
      `• *Subtotal:* ${formatBDT(subtotal)}\n` +
      `• *Delivery Fee:* ${formatBDT(deliveryFee)} (${deliveryNoteText})\n` +
      `• *Total Amount:* *${formatBDT(total)}*\n` +
      `───────────────────────\n` +
      `Please confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/8801796073736?text=${encodeURIComponent(messageText)}`;
    
    // Direct navigation fallback to ensure launch on mobile & desktop
    const win = window.open(whatsappUrl, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <main className="checkout-page">
      <div className="checkout-header-bar">
        <Link href="/" className="back-link">
          <ArrowLeft size={18} /> Back to Shop
        </Link>
        <h1>Checkout</h1>
      </div>

      {items.length === 0 ? (
        <div className="empty-checkout-card">
          <ShoppingBag size={56} className="empty-icon" />
          <h2>Your cart is currently empty</h2>
          <p>Add some awesome NEXO gadgets to your cart before checking out!</p>
          <Link href="/products" className="button button-dark">
            Explore Products
          </Link>
        </div>
      ) : (
        <form onSubmit={handlePlaceOrder} noValidate>
          <div className="checkout-grid">
            {/* Left Column: Customer Details & Shipping */}
            <div className="checkout-form-section">
              {/* Contact Information */}
              <div className="form-card">
                <div className="form-card-title">
                  <CheckCircle2 className="title-icon" size={20} />
                  <h2>1. Contact Details</h2>
                </div>

                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Tanvir Hossain"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={errors.fullName ? "input-error" : ""}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="017XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              {/* Shipping Location & Address */}
              <div className="form-card">
                <div className="form-card-title">
                  <MapPin className="title-icon" size={20} />
                  <h2>2. Shipping Location & Address</h2>
                </div>

                <div className="form-row-2">
                  {/* Division */}
                  <div className="form-group">
                    <label htmlFor="division">Division *</label>
                    <select
                      id="division"
                      value={division}
                      onChange={(e) => handleDivisionChange(e.target.value)}
                      className={errors.division ? "input-error" : ""}
                    >
                      <option value="">Select Division</option>
                      {BANGLADESH_DIVISIONS.map((div) => (
                        <option key={div.id} value={div.name}>
                          {div.name}
                        </option>
                      ))}
                    </select>
                    {errors.division && <span className="error-text">{errors.division}</span>}
                  </div>

                  {/* District */}
                  <div className="form-group">
                    <label htmlFor="district">District (64 Districts of BD) *</label>
                    <select
                      id="district"
                      value={district}
                      onChange={(e) => handleDistrictChange(e.target.value)}
                      className={errors.district ? "input-error" : ""}
                    >
                      <option value="">Select District</option>
                      {division ? (
                        availableDistricts.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))
                      ) : (
                        BANGLADESH_DIVISIONS.map((div) => (
                          <optgroup label={div.name} key={div.id}>
                            {div.districts.map((dist) => (
                              <option key={dist} value={dist}>
                                {dist}
                              </option>
                            ))}
                          </optgroup>
                        ))
                      )}
                    </select>
                    {errors.district && <span className="error-text">{errors.district}</span>}
                  </div>
                </div>

                {/* Delivery Charge Indicator Badge */}
                <div className={`delivery-badge ${isChittagong ? "inside-ctg" : "outside-ctg"}`}>
                  <Truck size={18} />
                  <div>
                    {district ? (
                      isChittagong ? (
                        <span>
                          <strong>Inside Chittagong District:</strong> Delivery Fee 100 Tk
                        </span>
                      ) : (
                        <span>
                          <strong>Outside Chittagong District:</strong> Delivery Fee 160 Tk
                        </span>
                      )
                    ) : (
                      <span>
                        Select your district to calculate dynamic delivery fee (Inside Chittagong: 100 Tk | Outside Chittagong: 160 Tk)
                      </span>
                    )}
                  </div>
                </div>

                {/* Detailed Address */}
                <div className="form-group">
                  <label htmlFor="address">Detailed Address (House/Road/Thana/Area) *</label>
                  <textarea
                    id="address"
                    rows={3}
                    placeholder="e.g. House #12, Road #4, Agrabad Commercial Area, Chittagong Sadar, Chittagong"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={errors.address ? "input-error" : ""}
                  />
                  {errors.address && <span className="error-text">{errors.address}</span>}
                </div>

                {/* Order Note */}
                <div className="form-group">
                  <label htmlFor="note">Special Delivery Instructions (Optional)</label>
                  <input
                    id="note"
                    type="text"
                    placeholder="e.g. Call before delivery, deliver in afternoon"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="checkout-summary-section">
              <div className="summary-card">
                <h2>Order Summary ({items.reduce((acc, i) => acc + i.quantity, 0)} items)</h2>

                <div className="summary-items-list">
                  {items.map((item) => (
                    <div className="summary-item" key={item.id}>
                      <img src={item.image} alt={item.name} className="item-thumb" />
                      <div className="item-info">
                        <h3>{item.name}</h3>
                        <p className="item-variant">Color: {formatColorName(item.color)}</p>
                        <p className="item-qty-price">
                          {item.quantity} × {formatBDT(item.price)}
                        </p>
                      </div>
                      <div className="item-total">{formatBDT(item.price * item.quantity)}</div>
                    </div>
                  ))}
                </div>

                <div className="summary-pricing">
                  <div className="pricing-row">
                    <span>Subtotal</span>
                    <span>{formatBDT(subtotal)}</span>
                  </div>

                  <div className="pricing-row">
                    <span>
                      Delivery Charge{" "}
                      <small className="fee-tag">
                        {district ? (isChittagong ? "Inside CTG" : "Outside CTG") : "Dynamic"}
                      </small>
                    </span>
                    <span>{formatBDT(deliveryFee)}</span>
                  </div>

                  <div className="pricing-row total-row">
                    <span>Total Amount</span>
                    <span>{formatBDT(total)}</span>
                  </div>
                </div>

                {/* Submit button on Desktop / Summary view */}
                <div className="order-submit-wrapper">
                  <button type="submit" className="button order-submit-btn">
                    <MessageCircle size={22} />
                    <span>Confirm Order via WhatsApp</span>
                  </button>
                </div>

                <div className="guarantee-box">
                  <div className="guarantee-item">
                    <ShieldCheck size={18} />
                    <span>100% Genuine & Brand New Gadgets</span>
                  </div>
                  <div className="guarantee-item">
                    <Truck size={18} />
                    <span>Fast Nationwide Courier Delivery</span>
                  </div>
                  <div className="guarantee-item">
                    <MessageCircle size={18} />
                    <span>Instant Order Confirmation on WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </main>
  );
}
