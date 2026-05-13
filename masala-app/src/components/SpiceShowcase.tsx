"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80",
    title: "Aromatic Blends",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    title: "Organic Turmeric",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1599330159392-74944f388904?auto=format&fit=crop&w=800&q=80",
    title: "Fiery Chilli",
    size: "md:col-span-1 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?auto=format&fit=crop&w=800&q=80",
    title: "Fresh Harvest",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80",
    title: "Traditional Grinding",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
    title: "Spice Market",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1511229089470-90082c90538d?auto=format&fit=crop&w=800&q=80",
    title: "Gourmet Flavors",
    size: "md:col-span-1 md:row-span-1",
  },
];





export default function SpiceShowcase() {
  return (
    <section className="py-24 bg-[#0a0705]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text">
            Experience the <span className="text-brand-primary">Aroma</span>
          </h2>
          <p className="text-brand-text/60 mt-4 max-w-2xl mx-auto">
            A visual journey through our spice heritage and the craftsmanship that 
            goes into every pack of MASALA GOLD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[900px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-[2rem] group ${img.size}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-2">
                  Heritage
                </p>
                <h3 className="text-2xl font-display font-bold text-brand-text">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
