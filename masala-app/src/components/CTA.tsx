"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, FileDown } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3.5rem] bg-brand-card overflow-hidden border border-brand-border"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-1/2 -left-1/4 w-[100%] h-[100%] bg-brand-primary/20 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute -bottom-1/2 -right-1/4 w-[100%] h-[100%] bg-brand-secondary/20 rounded-full blur-[120px]"
            />
          </div>

          <div className="relative z-10 p-8 md:p-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl font-display font-bold text-brand-text mb-6 md:mb-8 leading-tight"
            >
              Bring Authentic Indian Taste <br className="hidden sm:block" /> 
              <span className="text-brand-primary">to Every Kitchen.</span>
            </motion.h2>

            
            <p className="text-brand-text/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Whether you're a home chef, restaurant owner, or global distributor, 
              we have the perfect spice solutions for your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-brand-bg font-bold rounded-2xl hover:bg-brand-gold hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-3">
                <Send size={20} />
                Contact Wholesale
              </button>
              <button className="w-full sm:w-auto px-10 py-5 glass text-brand-text font-bold rounded-2xl hover:bg-brand-text/10 transition-all duration-300 flex items-center justify-center gap-3 group">
                <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
                Download Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
