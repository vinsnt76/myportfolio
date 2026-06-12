"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, TrendingUp, ShoppingCart, Brain, Search, Target, LayoutGrid, DollarSign, Compass } from 'lucide-react';
import { scrollToSection } from '@/app/navigation.js';
import clsx from 'clsx';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const timelineItems = [
    {
      icon: Globe,
      title: "The Explorer",
      period: "Early Years",
      description: "My story began far from the digital realm, backpacking across continents, fueling a deep curiosity for diverse cultures and problem-solving.",
    },
    {
      icon: Briefcase,
      title: "Business Development",
      period: "2010s",
      description: "Landing in the dynamic world of business development, I honed my skills in strategy, negotiation, and understanding market needs.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Pivot",
      period: "COVID-19 Era",
      description: "When the world shifted during COVID-19, I saw an opportunity, diving deep into digital marketing, mastering SEO and campaign strategies at an award-winning agency.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Builder",
      period: "Post-Pandemic",
      description: "Applying my newfound expertise, I even built a thriving e-commerce venture with my partner, experiencing the challenges and triumphs of online business firsthand.",
    },
    {
      icon: Brain,
      title: "AI & Automation Era",
      period: "Today",
      description: "Today, my focus is sharper: harnessing the power of AI and automation to build high-performance campaigns and AEO strategies.",
    },
  ];

  const superpowers = [
    { icon: Search, name: "SEO Mastery" },
    { icon: Target, name: "Campaign Management" },
    { icon: Brain, name: "AI & Automation" },
    { icon: LayoutGrid, name: "CRO Strategy" },
    { icon: ShoppingCart, name: "E-commerce Strategy" },
    { icon: DollarSign, name: "Lead Generation" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 max-w-6xl bg-white dark:bg-neutral-100 text-neutral-900 rounded-xl p-8 md:p-10 shadow-lg"
      >
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start mb-16"
        >
          <Compass className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-left">
            From Traveller to Digital Architect
          </h3>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Origin Story Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-700 leading-relaxed space-y-6 text-left" // Left-aligned, spacing, and text color
          >
            <p>
              My story began far from the digital world, travelling across continents and
              fueling a deep curiosity for diverse cultures and problem‑solving.
            </p>
            <p>
              This led me to the dynamic world of business development in the travel
              industry, where I honed my skills in strategy, negotiation, and understanding
              market needs.
            </p>
            <p>
              I later built a thriving e‑commerce venture with my partner, experiencing the
              challenges and triumphs of online business firsthand.
            </p>
            <p>
              When the world shifted during COVID‑19, I saw an opportunity and dove deep
              into digital marketing, mastering SEO and campaign strategy at an
              award‑winning agency.
            </p>
            <p>
              Today, my focus is sharper: harnessing the power of digital to build
              high‑performance campaigns and AEO strategies that generate leads, increase
              purchases, and scale impact.
            </p>
          </motion.div>

          {/* Right Column: Visual Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-left">My Evolution: A Digital Odyssey</h3>
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500 hidden md:block" />
            <div className="space-y-12 pl-8 md:pl-0"> 
              {timelineItems.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative flex items-start" // Use items-start for consistent top alignment
                >
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-neutral-900 absolute -left-4 top-0 items-center justify-center"> {/* Adjusted left */}
                    <step.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 md:ml-8"> {/* Add margin to content */}
                    <h4 className="text-xl font-semibold text-blue-500">{step.period}</h4>
                    <h5 className="text-2xl font-bold mb-2">{step.title}</h5>
                    <p className="text-neutral-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Superpowers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-12">
            My Superpowers for Your Growth
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-neutral-900">
            {superpowers.map((power) => (
              <motion.div variants={itemVariants} key={power.name} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                <power.icon size={48} className="text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold">{power.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-24 text-center"
        >
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            See My Impact
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
