import React from 'react';
import Welcome from '@/app/components/Welcome';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Education from '@/app/components/Education';
import Certifications from '@/app/components/Certifications';
import Contact from '@/app/components/Contact';

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