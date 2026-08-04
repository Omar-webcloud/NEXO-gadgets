export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
  label: string;
  colors: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specs: Array<{ label: string; value: string }>;
  seoTitle: string;
  seoDescription: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "nexo-foldable-phone-tablet-stand",
    name: "NEXO Foldable Phone & Tablet Stand | Adjustable Desk Mount",
    category: "Stands",
    price: 320,
    oldPrice: 399,
    image: "/images/hero-stand.svg",
    label: "Bestseller",
    colors: ["#3a3a38", "#d6d4cd", "#e7b676"],
    shortDescription: "Upgrade your workspace with the NEXO Foldable Phone & Tablet Stand for premium comfort and adjustable positioning.",
    description:
      "The NEXO Foldable Phone & Tablet Stand combines elegant design with functional adjustability, perfect for your desk, workspace, or travel setup.",
    features: [
      "Adjustable viewing angles for desk, bed, or travel use",
      "Compact fold-flat design that slips into bags and work setups",
      "Durable build with a soft-touch finish for daily comfort",
      "Works for smartphones, tablets, and video calls",
    ],
    specs: [
      { label: "Material", value: "Premium metal + silicone grip" },
      { label: "Weight", value: "180g" },
      { label: "Compatibility", value: "4-10 inch devices" },
      { label: "Colorways", value: "Multiple finishes" },
    ],
    seoTitle: "NEXO Foldable Phone & Tablet Stand – Adjustable Desk Mount in Bangladesh",
    seoDescription:
      "Shop the NEXO Foldable Phone & Tablet Stand by NEXO—an adjustable premium stand for desks, travel, and everyday use in Bangladesh.",
  },
  {
    id: 2,
    slug: "nexo-rotatable-magnetic-laptop-phone-stand",
    name: "NEXO Rotatable Magnetic Laptop & Phone Stand | Premium Metal",
    category: "Stands",
    price: 900,
    oldPrice: 1199,
    image: "/images/laptop-stand.svg",
    label: "New",
    colors: ["#c9c8c3", "#343536"],
    shortDescription: "Elevate your workstation with the NEXO Rotatable Magnetic Laptop & Phone Stand for premium metal construction and flexible positioning.",
    description:
      "The NEXO Rotatable Magnetic Laptop & Phone Stand keeps your devices elevated with 360-degree rotation and magnetic stability for an ergonomic workspace.",
    features: [
      "360-degree rotatable design for flexible viewing angles",
      "Magnetic attachment for secure device holding",
      "Premium metal construction for durability",
      "Ideal for home offices, desks, and professional workstations",
    ],
    specs: [
      { label: "Material", value: "Premium metal" },
      { label: "Load capacity", value: "Up to 15kg" },
      { label: "Rotation", value: "360 degrees" },
      { label: "Use case", value: "Laptop + tablet workstations" },
    ],
    seoTitle: "NEXO Rotatable Magnetic Laptop & Phone Stand – Premium Metal in Bangladesh",
    seoDescription:
      "Discover the NEXO Rotatable Magnetic Laptop & Phone Stand, a premium metal stand with 360-degree rotation for optimal workspace setup in Bangladesh.",
  },
  {
    id: 3,
    slug: "nexo-smart-head-massager",
    name: "NEXO Smart Head Massager | Hair Growth Stimulation & Scalp Care",
    category: "Wellness",
    price: 700,
    oldPrice: 899,
    image: "/images/head-massager.svg",
    label: "Trending",
    colors: ["#f0eee8", "#9b9b94"],
    shortDescription: "Relax and revitalize with the NEXO Smart Head Massager for hair growth stimulation and complete scalp care.",
    description:
      "The NEXO Smart Head Massager combines advanced massage technology with hair growth stimulation features designed to help you unwind and care for your scalp health.",
    features: [
      "Multiple massage modes for comfort and scalp stimulation",
      "Hair growth stimulation technology",
      "Portable design for home and travel use",
      "Quiet operation with a modern finish",
    ],
    specs: [
      { label: "Battery", value: "Rechargeable USB-C" },
      { label: "Modes", value: "Multiple intensity settings" },
      { label: "Use case", value: "Head, scalp, and hair care" },
      { label: "Finish", value: "Premium design" },
    ],
    seoTitle: "NEXO Smart Head Massager – Hair Growth & Scalp Care in Bangladesh",
    seoDescription:
      "Shop the NEXO Smart Head Massager by NEXO for hair growth stimulation and complete scalp care wellness in Bangladesh.",
  },
  {
    id: 4,
    slug: "breeze-mini-fan",
    name: "Breeze Mini Fan",
    category: "Lifestyle",
    price: 29,
    oldPrice: 39,
    image: "/images/mini-fan.svg",
    label: "Fan favorite",
    colors: ["#e9e7dd", "#a9c4cd", "#e7b8a7"],
    shortDescription: "A pocket-sized personal fan that keeps you cool wherever your day takes you.",
    description:
      "Breeze Mini Fan delivers everyday comfort in a compact design that fits neatly into bags, desks, and travel setups.",
    features: [
      "Portable airflow for commutes, travel, and daily errands",
      "Battery-friendly design with quiet operation",
      "Modern aesthetic with a lightweight profile",
      "Simple controls for instant cooling",
    ],
    specs: [
      { label: "Power", value: "USB rechargeable" },
      { label: "Runtime", value: "Up to 8 hours" },
      { label: "Portability", value: "Pocket-friendly size" },
      { label: "Ideal for", value: "Desk, car, and travel use" },
    ],
    seoTitle: "Breeze Mini Fan – Portable Personal Fan in Bangladesh",
    seoDescription:
      "Shop the Breeze Mini Fan by NEXO, a compact portable fan for desk, travel, and everyday personal cooling in Bangladesh.",
  },
  {
    id: 5,
    slug: "snapcharge-10k",
    name: "SnapCharge 10K",
    category: "Power",
    price: 59,
    oldPrice: 74,
    image: "/images/powerbank.svg",
    label: "Fast charge",
    colors: ["#252526", "#dedbd1"],
    shortDescription: "A dependable 10,000mAh power bank for everyday charging without the bulk.",
    description:
      "SnapCharge 10K gives you dependable portable power in a slim profile that fits easily into your daily carry and keeps your devices ready throughout the day.",
    features: [
      "10,000mAh capacity for day-long power",
      "Fast charging support for phones and accessories",
      "Slim, travel-friendly body with a premium finish",
      "Reliable output for work, study, and travel",
    ],
    specs: [
      { label: "Capacity", value: "10,000mAh" },
      { label: "Output", value: "Fast charge ready" },
      { label: "Ports", value: "USB-C + USB-A" },
      { label: "Use case", value: "Daily carry and travel" },
    ],
    seoTitle: "SnapCharge 10K Power Bank – Portable Fast Charging in Bangladesh",
    seoDescription:
      "Shop the SnapCharge 10K by NEXO, a slim 10,000mAh power bank for fast charging on the go in Bangladesh.",
  },
  {
    id: 6,
    slug: "nexo-buds-pro",
    name: "NEXO Buds Pro",
    category: "Audio",
    price: 89,
    oldPrice: 119,
    image: "/images/earbuds.svg",
    label: "Top rated",
    colors: ["#eceae4", "#2f3031", "#e5a878"],
    shortDescription: "Wireless earbuds designed for rich sound, stable connections, and long lasting daily listening.",
    description:
      "NEXO Buds Pro delivers immersive audio in a compact form, designed for calls, music, and everyday focus with reliable wireless performance.",
    features: [
      "Immersive sound with strong bass and clarity",
      "Comfortable in-ear fit for long listening sessions",
      "Reliable Bluetooth pairing with a compact charging case",
      "Smart everyday audio for music, calls, and entertainment",
    ],
    specs: [
      { label: "Sound", value: "Stereo with deep bass" },
      { label: "Connectivity", value: "Bluetooth wireless" },
      { label: "Case", value: "Compact charging case" },
      { label: "Use case", value: "Music, calls, and travel" },
    ],
    seoTitle: "NEXO Buds Pro – Wireless Earbuds in Bangladesh",
    seoDescription:
      "Discover NEXO Buds Pro, premium wireless earbuds with rich sound, comfort, and dependable everyday performance in Bangladesh.",
  },
];
