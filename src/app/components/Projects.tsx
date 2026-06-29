"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TrendingUp, Code, Cpu, Layers, ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date: string;
  summary: string;
  outcomes: string[];
  value?: string;
  skills?: string[];
  imageSrc?: string;
  videoSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  summary,
  outcomes,
  value,
  skills,
  imageSrc,
  videoSrc,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-shrink-0 w-[85vw] md:w-[600px] bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-blue-500/50 flex flex-col"
    >
      {/* Media Block */}
      <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-100">
            <Layers className="w-16 h-16 text-neutral-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-40" />
      </div>

      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
        <header className="space-y-1">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
            <Cpu size={16} />
            <span>{date}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            {title}
          </h3>
        </header>

        <section className="space-y-6 flex-grow">
          <p className="text-neutral-700 leading-relaxed">
            {summary}
          </p>

          {/* Outcomes Grid */}
          {outcomes.length > 0 && (
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-200">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 text-blue-500">
                    <TrendingUp size={16} />
                    <span className="font-bold text-neutral-900">
                      {outcome.split(" ").slice(-1)}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                    {outcome.split(" ").slice(0, -1).join(" ")}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Core Value */}
          {value && (
            <div className="bg-blue-500/5 border-l-2 border-blue-600 p-4 rounded-r-xl">
              <p className="text-neutral-700 text-sm italic leading-relaxed">{value}</p>
            </div>
          )}
        </section>

        {/* Skills/Tags */}
        {skills && (
          <footer className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-1 px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-bold rounded-full uppercase tracking-tighter transition-colors group-hover:border-blue-500/30"
              >
                <Code size={10} className="text-blue-500" />
                {skill}
              </span>
            ))}
          </footer>
        )}
      </div>
    </motion.article>
  );
};

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const projects = [
    {
      title: "AEO Guide Engine: Data Object Embeddings",
      date: "Jun 2026 — Baby Bento",
      summary: "Transformed a Shopify blog post into a modular, agent‑optimised JSON data object rendered via a custom Guide Engine hook. This shift from static HTML to structured, machine‑readable content delivered measurable AEO gains.",
      outcomes: ["Organic clicks 4×", "Impressions 2×", "Avg. position 59%", "Active users 233%"],
      skills: ["Semantic Data Modelling", "AEO", "JSON Architecture", "Shopify Theme Engineering", "AI Search Optimisation"],
      videoSrc: "/videos/aeo-engine-demo.mp4",
      imageSrc: "/projects/aeo-guide.jpg"
    },
    {
      title: "AEO Measurement Dashboard",
      date: "Jan 2026 – Present",
      summary: "Designed and built a full‑stack AEO Measurement Dashboard that translates complex retrieval signals into an executive‑ready view of AEO Strategic Health, Intent Fan‑Out, Merchant POS & Model Authority, Knowledge Node Performance, and Retrieval Lift.",
      outcomes: [], // Placeholder or leave empty as per requirements
      value: "Currently ingests CSV‑based GSC data with full capability for API‑driven dynamic ingestion. Built with Next.js, Tailwind, and Vercel, fully responsive and print‑optimised.",
      skills: ["AEO", "Semantic Search", "Data Visualisation", "Next.js", "Tailwind", "Vercel"],
      videoSrc: "/videos/aeo-dashboard.mp4",
      imageSrc: "/projects/aeo-dashboard.jpg"
    }
  ];

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
              <BarChart3 size={18} />
              <span>Portfolio</span>
            </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Featured <span className="text-blue-600">Impact.</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
          </div>

          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-4 rounded-full border border-neutral-800 text-white hover:bg-neutral-900 hover:border-blue-500 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-4 rounded-full border border-neutral-800 text-white hover:bg-neutral-900 hover:border-blue-500 transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </header>
      </div>

      {/* Carousel Track */}
      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-8 px-6 md:px-[calc((100vw-1200px)/2)]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {/* Spacer for end padding */}
          <div className="flex-shrink-0 w-6 md:w-32" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;