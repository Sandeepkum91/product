"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Premium Products", value: 25, suffix: "+" },
  { label: "Happy Customers", value: 10, suffix: "K+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Pure Ingredients", value: 100, suffix: "%" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 md:p-8 rounded-3xl bg-brand-card border border-brand-border hover:border-brand-primary/50 transition-colors duration-300 group"
              >
                <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-1 md:mb-2">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-brand-text/60 text-sm md:text-base font-medium group-hover:text-brand-text/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>


          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mt-4 mb-6 leading-tight">
                Authentic Indian Flavors, <br />
                <span className="text-brand-primary">Traditional Craftsmanship.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-text/70 text-lg leading-relaxed">
              <p>
                Founded on the principles of purity and tradition, MASALA GOLD brings 
                the soul of Indian cuisine to kitchens worldwide. Our journey started 
                with a simple mission: to preserve the authentic taste of Indian spices 
                that are often lost in modern processing.
              </p>
              <p>
                We source our ingredients directly from the finest spice farms across 
                India, ensuring they are hand-picked at their peak aroma and potency. 
                Using traditional cold-grinding methods, we ensure that the natural 
                oils and rich flavors of each spice are perfectly preserved.
              </p>
              <div className="pt-4">
                <button className="px-8 py-3 rounded-full border border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-brand-bg transition-all duration-300">
                  Read Full Heritage
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
