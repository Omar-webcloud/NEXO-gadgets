import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXO — Everyday Tech, Elevated",
  description: "Thoughtfully designed gadgets for better living. Shop premium phone stands, laptop stands, smart wellness, power, audio, and more.",
  keywords: ["NEXO", "premium gadgets", "phone stand", "laptop stand", "smart accessories"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
