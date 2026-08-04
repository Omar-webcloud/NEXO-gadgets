"use client";

import { useCart } from "@/lib/cart";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, updateQuantity } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatBDT = (value: number) =>
    new Intl.NumberFormat("bn-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(value);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    const text = `Hello NEXO, I would like to place an order:\n\n` + 
      items.map(i => `- ${i.name}\n  Color: ${i.color}\n  Quantity: ${i.quantity}\n  Price: ${formatBDT(i.price * i.quantity)}`).join('\n\n') +
      `\n\nTotal: ${formatBDT(total)}`;
      
    const whatsappUrl = `https://wa.me/8801796073736?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!open) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="cart-drawer">
        <div className="drawer-head">
          <div>
            <small>YOUR BAG</small>
            <h2>Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})</h2>
          </div>
          <button onClick={onClose}><X /></button>
        </div>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={48} style={{ opacity: 0.2, margin: '0 auto' }} />
            <p>Your bag is empty.</p>
          </div>
        ) : (
          <div className="cart-items">
            {items.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <small>Color: {item.color}</small>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <strong>{formatBDT(item.price * item.quantity)}</strong>
              </div>
            ))}
          </div>
        )}
        
        {items.length > 0 && (
          <div className="drawer-footer">
            <p><span>Total</span> <span>{formatBDT(total)}</span></p>
            <button className="button button-dark" style={{ width: '100%', marginTop: '20px' }} onClick={handleCheckout}>
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
