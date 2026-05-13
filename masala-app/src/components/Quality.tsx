"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const qualityStats = [
  { label: "Cities Served", value: "20+" },
  { label: "Retail Partners", value: "500+" },
  { label: "Orders Delivered", value: "50K+" },
];

const standards = [
  "Triple-layer Moisture Lock",
  "Zero Human Contact Processing",
  "Traditional Cold Grinding",
  "No Added Artificial Colors",
];

export default function Quality() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} id="quality" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
              Quality & Export
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mt-4 mb-8 leading-tight">
              Export Quality Standards, <br />
              <span className="text-brand-primary">Global Purity.</span>
            </h2>
            
            <p className="text-brand-text/60 text-lg leading-relaxed mb-10">
              Our quality assurance process is rigorous and uncompromising. We 
              adhere to international food safety standards to ensure that every 
              gram of masala you receive is pure, potent, and safe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {standards.map((std, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
                    <Check size={16} />
                  </div>
                  <span className="text-brand-text/80 font-medium">{std}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-12 border-t border-brand-border pt-12">
              {qualityStats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-display font-bold text-brand-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-brand-text/50 text-sm uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image with Parallax */}
          <div className="relative h-[350px] md:h-[500px] lg:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden">

            <motion.div 
              style={{ y }}
              className="absolute inset-0 bg-cover bg-center"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div 
                className="w-full h-[120%] bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600&auto=format&fit=crop')" 
                }}

              />
            </motion.div>
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass p-6 rounded-2xl border border-brand-primary/30"
            >
              <p className="text-brand-primary font-bold text-2xl">100%</p>
              <p className="text-brand-text/70 text-xs uppercase tracking-tighter">Certified Pure</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
