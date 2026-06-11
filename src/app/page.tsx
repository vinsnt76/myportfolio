import React from 'react';
import Welcome from '@/components/Welcome.js'; // Use alias and .js extension
import About from '@/components/About.js';
import Experience from '@/components/Experience.js';
import Skills from '@/components/Skills.js';
import Projects from '@/components/Projects.js';
import Education from '@/components/Education.js';
import Certifications from '@/components/Certifications.js';
import Contact from '@/components/Contact.js';

export default function Page() { // Ensure default export is named 'Page' for App Router
  return (
    <>
      <Welcome />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}