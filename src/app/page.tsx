import React from 'react';
import Welcome from '@/components/Welcome.js';
import About from '@/components/About.js';
import Experience from '@/components/Experience.js';
import Skills from '@/components/Skills.js';
import Projects from '@/components/Projects.js';
import Education from '@/components/Education.js';
import Certifications from '@/components/Certifications.js';
import Contact from '@/components/Contact.js';

export default function Home() {
  return (
    <div className="space-y-12">
      <Welcome />
      <About />
      <section id="experience" className="scroll-mt-24"><Experience /></section>
      <section id="skills" className="scroll-mt-24 text-center"><Skills /></section>
      <section id="projects" className="scroll-mt-24"><Projects /></section>
      <Education />
      <Certifications />
      <section id="contact" className="py-20 flex justify-center scroll-mt-24 border-t border-gray-100 dark:border-gray-800">
        <Contact />
      </section>
    </div>
  );
}
