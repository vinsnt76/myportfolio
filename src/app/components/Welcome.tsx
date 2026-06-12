"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '@/app/navigation';
import clsx from 'clsx';

const Welcome: React.FC = () => {
  return (
    <section 
      id="welcome" 
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Hero Header Background Image Integration */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/profile-background-header.jpg"
          alt="Portfolio Header Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay for content readability and depth */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Optional: Animated Glows */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 blur-[160px] animate-pulse-slow rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/20 blur-[140px] animate-pulse-slower rounded-full" />
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* 1 & 3. Profile Photo Visual Anchor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 md:order-1"
        >
          {/* 4. Glow pulse identity element */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          
          <div className="group relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 ring-offset-4 ring-offset-blue-400/20">
            <img
              src="/Profile-Picture-Vinnie.png" 
              alt="Vinnie Baker"
              className="object-cover w-full h-full scale-105 transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block"
          >
             <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">
               SEO. AI. PPC + SEM
             </p>
          </motion.div>
        </motion.div>

        {/* 3 & 7. Headline & CTA Block */}
        <div className="flex-1 max-w-2xl space-y-8 order-2 md:order-2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Personal Tagline */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide border border-blue-100 dark:border-blue-800">
              AI & Digital Specialist
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Turning search campaigns & content <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                into AEO‑driven growth.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              I build campaigns and AEO strategies engineered for visibility, clarity, and measurable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <button 
              type="button"
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-2xl font-bold border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
          
          {/* 8. Social Proof / Identity Snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-6 border-t border-gray-100 dark:border-gray-800"
          >
            <p className="text-sm text-gray-400 font-medium italic">
              "Building systems that scale impact and automate revenue."
            </p>
          </motion.div>
        </div>
      </div>

      {/* 6. Scroll Cue */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-gray-400 hover:text-blue-500 transition-colors"
        aria-label="Scroll down to About section"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};
export default Welcome;