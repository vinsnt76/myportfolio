"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, EyeOff, Clock, Globe, Briefcase, TrendingUp, ShoppingCart, Brain, Rocket, Zap, LayoutGrid, DollarSign, Search, Target } from 'lucide-react';
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
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight"
        >
          My Journey: From Global Explorer to Digital Architect
        </motion.h2>

        {/* Origin Story Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-20 leading-relaxed"
        >
          <div className="text-left space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
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
      </div>
        </motion.p>

        {/* Villains I Conquer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-12">
            The Villains I Conquer
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
              <Lightbulb size={48} className="text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Inefficiency</h4>
              <p className="text-gray-600 dark:text-gray-400">Wasted effort, missed opportunities, and outdated processes.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
              <EyeOff size={48} className="text-purple-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Invisibility</h4>
              <p className="text-gray-600 dark:text-gray-400">Brands lost in the noise, struggling to be seen by their audience.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
              <Clock size={48} className="text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Stagnation</h4>
              <p className="text-gray-600 dark:text-gray-400">Growth plateaus, static strategies, and a lack of forward momentum.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Visual Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-16">
            My Evolution: A Digital Odyssey
          </motion.h3>
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500 hidden md:block" />
            <div className="space-y-16">
              {timelineItems.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className={clsx("flex items-center", {
                    "md:justify-start": index % 2 === 0,
                    "md:justify-end": index % 2 !== 0,
                  })}
                >
                  <div className={clsx("md:w-1/2", { "md:pr-8 text-right": index % 2 === 0, "md:pl-8 text-left": index % 2 !== 0 })}>
                    <h4 className="text-xl font-semibold text-blue-500">{step.period}</h4>
                    <h5 className="text-2xl font-bold mb-2">{step.title}</h5>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <step.icon size={18} className="text-white" />
                  </div>
                  <div className={clsx("md:w-1/2", { "md:pl-8 text-left": index % 2 === 0, "md:pr-8 text-right": index % 2 !== 0 })} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default About;
