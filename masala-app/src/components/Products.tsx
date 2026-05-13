"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Turmeric Powder",
    description: "Rich in Curcumin, sourced from the finest farms of Sangli.",
    image: "/images/turmeric-premium.png",
    color: "rgba(217,119,6,0.1)",
  },
  {
    name: "Red Chilli Powder",
    description: "The perfect blend of heat and vibrant red color from Guntur.",
    image: "/images/red-chilli-premium.png",
    color: "rgba(127,29,29,0.1)",
  },
  {
    name: "Coriander Powder",
    description: "Earthy and aromatic powder made from sun-dried coriander seeds.",
    image: "/images/coriander-premium.png",
    color: "rgba(22,101,52,0.1)",
  },
  {
    name: "Garam Masala",
    description: "The King of Spices, a traditional blend of 12 hand-picked spices.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
    color: "rgba(69,26,3,0.1)",
  },
  {
    name: "Chaat Masala",
    description: "Tangy and savory blend to elevate every street food experience.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    color: "rgba(101,163,13,0.1)",
  },
  {
    name: "Biryani Masala",
    description: "Authentic Nizami spice blend for the perfect royal biryani.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    color: "rgba(194,65,12,0.1)",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold uppercase tracking-widest text-sm"
          >
            The Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-text mt-4"
          >
            Our Signature <span className="text-brand-primary">Masalas</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-brand-card border border-brand-border rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/10"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-60 md:h-72 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              </div>


              {/* Card Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-brand-text mb-2 md:mb-3 group-hover:text-brand-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-brand-text/60 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-primary font-bold text-sm md:text-base">Premium Quality</span>
                  <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-brand-bg transition-all duration-300">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>


              {/* Subtle Gradient Glow */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: product.color }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 glass text-brand-text font-bold rounded-full hover:bg-brand-primary hover:text-brand-bg transition-all duration-500 flex items-center gap-3 mx-auto group">
            View All Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
