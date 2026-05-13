"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const particles = Array.from({ length: 20 }, () => ({
  initialX: Math.random() * 100 + "%",
  initialY: Math.random() * 100 + "%",
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 5,
}));

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[#0f0b08]/60 backdrop-blur-[2px]" />
        
        {/* Animated Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: particle.initialX, 
              y: particle.initialY 
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [null, "-10%"],
              transition: {
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              }
            }}
            className="absolute w-1 h-1 bg-brand-primary rounded-full blur-[1px]"
          />
        ))}

        {/* Hero Background Image Placeholder */}
        <div 
          className="absolute inset-0 z-[-1] scale-110 blur-[1px]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-brand-primary/30"
          >
            <span className="text-brand-primary text-sm font-bold tracking-widest uppercase">
              100% Organic & Hand-Picked
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-brand-text mb-6 md:mb-8 leading-[1.1]"
          >
            MASALA<span className="text-brand-primary">GOLD</span> — <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight via-brand-text to-brand-highlight">
              Pure Indian Spices
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-brand-text/70 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >

            Experience the rich heritage of Indian kitchens with our premium, 
            traditionally ground masalas. Crafted with purity, tradition, and 
            the finest ingredients from across Bharat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-brand-bg font-bold rounded-xl hover:bg-brand-gold hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3">
              Explore Products
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass text-brand-text font-bold rounded-xl hover:bg-brand-text/10 transition-all duration-300 flex items-center justify-center gap-3 group">
              <span className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center group-hover:bg-brand-primary/40 transition-colors">
                <Play size={18} className="text-brand-primary fill-brand-primary" />
              </span>
              Contact Wholesale
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Decorative Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-x-10 inset-y-20 border border-brand-primary/10 rounded-[3rem] pointer-events-none z-0"
      />
    </section>
  );
}
