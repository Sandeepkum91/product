"use client";

import React from "react";
import { Facebook, Instagram, Globe, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-brand-border bg-[#0a0705]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-brand-bg text-xl">
                M
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-brand-text">
                MASALA<span className="text-brand-primary">GOLD</span>
              </span>
            </div>
            <p className="text-brand-text/50 leading-relaxed mb-8">
              Bringing the authentic taste of Indian heritage to kitchens worldwide. 
              Pure, potent, and traditionally ground spices for the modern gourmet.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Globe, Mail].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text/60 hover:bg-brand-primary hover:border-brand-primary hover:text-brand-bg transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-text font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Products", "Quality Standards", "Export Process", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-text/50 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-text font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-4">
              {["Turmeric Powder", "Red Chilli Powder", "Garam Masala", "Biryani Masala", "Chaat Masala", "Kitchen King"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-text/50 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-text font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-brand-text/50 text-sm mb-6">
              Subscribe to get latest updates, recipes and wholesale offers.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-brand-card border border-brand-border rounded-2xl focus:border-brand-primary outline-none transition-colors text-brand-text"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-brand-primary text-brand-bg font-bold rounded-xl hover:bg-brand-gold transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:row items-center justify-between gap-6 text-brand-text/30 text-sm">
          <p>© 2026 MASALA GOLD Spices Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
