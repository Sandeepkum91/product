import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MASALA GOLD — Pure Indian Spices & Authentic Blends",
  description: "Experience the rich heritage of Indian kitchens with MASALA GOLD. Traditionally ground, 100% organic spices sourced directly from the finest farms of Bharat.",
  keywords: "Indian spices, organic masala, turmeric powder, red chilli powder, garam masala, premium spices, authentic Indian flavors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-brand-bg text-brand-text`}>
        {children}
      </body>
    </html>
  );
}

