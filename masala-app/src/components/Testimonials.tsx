"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    content: "The aroma of MASALA GOLD's Biryani Masala is unmatched. It has become the secret ingredient of our signature dish. Truly authentic!",
    rating: 5,
    size: "md:col-span-2",
  },
  {
    name: "Anita Sharma",
    role: "Home Chef",
    content: "Purity and color like home-ground spices. Exceptional!",
    rating: 5,
    size: "md:col-span-1",
  },
  {
    name: "Vikram Singh",
    role: "Wholesale Partner",
    content: "Exceptional quality and consistency. Highly recommended for exports.",
    rating: 5,
    size: "md:col-span-1",
  },
  {
    name: "Priya Patel",
    role: "Culinary Blogger",
    content: "Their Turmeric powder is so rich in curcumin. You can literally smell the freshness the moment you open the pack. A must-have for every kitchen.",
    rating: 5,
    size: "md:col-span-2",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0705] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-brand-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold uppercase tracking-widest text-sm"
            >
              Our Community
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-brand-text mt-4 leading-tight"
            >
              Stories of <span className="text-brand-primary italic">Flavor</span> & Trust.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4 p-6 glass rounded-2xl border border-brand-primary/20"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-bg bg-brand-card flex items-center justify-center font-bold text-xs text-brand-primary">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-brand-text font-bold">10,000+</p>
              <p className="text-brand-text/50 text-xs">Happy Kitchens</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-brand-card border border-brand-border hover:border-brand-primary/40 transition-all duration-500 overflow-hidden ${testimonial.size}`}
            >
              {/* Card Decoration */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors rotate-12" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 md:mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                
                <p className="text-brand-text/80 text-lg md:text-2xl font-medium leading-relaxed mb-8 md:mb-10 group-hover:text-brand-text transition-colors">
                  "{testimonial.content}"
                </p>

                
                <div className="flex items-center gap-4 border-t border-brand-border/50 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-brand-bg font-bold text-xl shadow-lg shadow-brand-primary/20">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-brand-text font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-brand-text/50 text-sm uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

