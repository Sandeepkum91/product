"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Soup, PackageCheck } from "lucide-react";

const features = [
  {
    title: "Farm Fresh Ingredients",
    description: "Sourced directly from the spice heartlands of India, ensuring peak freshness and aroma.",
    icon: Leaf,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Hygienically Processed",
    description: "State-of-the-art facilities with zero human contact to maintain 100% purity standards.",
    icon: ShieldCheck,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Traditional Recipes",
    description: "Crafted using age-old family recipes passed down through generations of Indian chefs.",
    icon: Soup,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Export Quality Packaging",
    description: "Triple-layer moisture-proof packaging to lock in rich aroma and flavor for a longer time.",
    icon: PackageCheck,
    color: "bg-brand-primary/10 text-brand-primary",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold uppercase tracking-widest text-sm"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-brand-text mt-4 mb-6"
            >
              The Secret Behind <br /> Our <span className="text-brand-primary">Purity.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/60 leading-relaxed"
            >
              We believe that quality is the most important ingredient in any dish. 
              Our commitment to excellence ensures you get the best.
            </motion.p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(234, 179, 8, 0.4)" }}
                className="p-8 bg-brand-card border border-brand-border rounded-3xl transition-all duration-300 group hover:bg-brand-card/80"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-text/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
