"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Search, 
  Target, 
  Brain, 
  BarChart, 
  MousePointerClick, 
  ShoppingCart, 
  Users, 
  Zap,
  Award
} from 'lucide-react';

const Experience: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const skillItems = [
    { name: "SEO", icon: Search },
    { name: "PPC / SEM", icon: Target },
    { name: "AEO", icon: Brain },
    { name: "Campaign Management", icon: BarChart },
    { name: "CRO", icon: MousePointerClick },
    { name: "E-commerce Strategy", icon: ShoppingCart },
    { name: "Lead Generation", icon: Users },
    { name: "AI & Automation", icon: Zap },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 scroll-mt-24">
      <motion.div 
        {...fadeInUp}
        className="container mx-auto px-6 max-w-6xl bg-black text-white rounded-xl p-8 md:p-10 shadow-2xl border border-neutral-800"
      >
        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <Briefcase className="w-7 h-7 text-blue-500" />
          <h3 className="text-3xl md:text-4xl font-bold">
            Experience, Education & Skills
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Column 1: Education + Certifications */}
          <motion.div {...fadeInUp} className="space-y-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h4 className="text-xl font-semibold text-blue-400">Education</h4>
              </div>
              <ul className="space-y-4">
                <li className="border-l-2 border-neutral-800 pl-4">
                  <p className="font-bold">Diploma in Public Relations</p>
                  <p className="text-neutral-400 text-sm">Central TAFE (2004)</p>
                </li>
                <li className="border-l-2 border-neutral-800 pl-4">
                  <p className="font-bold">Cert IV Business Sales</p>
                  <p className="text-neutral-400 text-sm">William Angliss (2018)</p>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-400" />
                <h4 className="text-xl font-semibold text-blue-400">Certifications & Training</h4>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Google Ads Search & Shopping Certifications",
                  "HubSpot Digital Marketing & Sales Software",
                  "Google Analytics & Tag Manager Fundamentals",
                  "LinkedIn SEO, Email, Social Media, and Sales Foundations",
                  "Open Colleges Professional Communications"
                ].map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-neutral-300">
                    <span className="text-blue-500 mt-1.5 min-w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>

          {/* Column 2: Skills Grid */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blue-400" />
              <h4 className="text-xl font-semibold text-blue-400">Core Skills</h4>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#171717" }}
                  className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-3 transition-colors group"
                >
                  <skill.icon className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-xs font-medium leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Experience Narrative Summary */}
            <div className="mt-10 p-6 rounded-lg bg-blue-500/5 border border-blue-500/10">
              <p className="text-sm text-neutral-400 leading-relaxed italic">
                "Leveraging a background in travel-sector business development and award-winning agency experience to deliver high-performance digital architecture."
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;