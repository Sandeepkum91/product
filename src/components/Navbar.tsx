"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Quality", href: "#quality" },
  { name: "Export", href: "#export" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-brand-bg text-xl shadow-lg shadow-brand-primary/20">
            M
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-brand-text">
            MASALA<span className="text-brand-primary">GOLD</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2.5 bg-brand-primary text-brand-bg font-bold rounded-full hover:bg-brand-gold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-brand-primary/20 flex items-center gap-2">
            <ShoppingBag size={18} />
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-text p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-text/90 hover:text-brand-primary py-2 border-b border-brand-border/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-brand-primary text-brand-bg font-bold rounded-xl flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
