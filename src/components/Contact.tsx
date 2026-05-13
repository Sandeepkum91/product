"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mt-4 mb-8">
              Let&apos;s Start a <br /> <span className="text-brand-primary">Flavorful</span> Partnership.
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-lg mb-1">Corporate Office</h4>
                  <p className="text-brand-text/60">Spice Enclave, Plot 45, Phase III,<br />Industrial Area, Jaipur, Rajasthan - 302022</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-brand-text/60">+91 98765 43210<br />+91 141 2345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-brand-text/60">info@masalagold.in<br />export@masalagold.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-lg mb-1">Business Hours</h4>
                  <p className="text-brand-text/60">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 bg-brand-card border border-brand-border rounded-[3rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-text/70 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-brand-bg border border-brand-border rounded-2xl focus:border-brand-primary outline-none transition-colors text-brand-text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-text/70 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 bg-brand-bg border border-brand-border rounded-2xl focus:border-brand-primary outline-none transition-colors text-brand-text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-text/70 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-brand-bg border border-brand-border rounded-2xl focus:border-brand-primary outline-none transition-colors text-brand-text"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-text/70 ml-1">Business Type</label>
                <select className="w-full px-6 py-4 bg-brand-bg border border-brand-border rounded-2xl focus:border-brand-primary outline-none transition-colors text-brand-text appearance-none">
                  <option>Individual / Home Chef</option>
                  <option>Restaurant / Hotel</option>
                  <option>Retailer / Distributor</option>
                  <option>Exporter</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-text/70 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-brand-bg border border-brand-border rounded-2xl focus:border-brand-primary outline-none transition-colors text-brand-text resize-none"
                />
              </div>

              <button className="w-full py-5 bg-brand-primary text-brand-bg font-bold rounded-2xl hover:bg-brand-gold transition-all duration-300 shadow-xl shadow-brand-primary/20">
                Send Enquiry
              </button>

              <button className="w-full py-4 border border-green-500/30 text-green-500 font-bold rounded-2xl hover:bg-green-500/5 transition-all duration-300 flex items-center justify-center gap-3">
                <MessageSquare size={20} />
                Chat on WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
