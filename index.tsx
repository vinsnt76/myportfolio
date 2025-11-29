// src/pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import SEO from '../components/SEO';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <section id="home" className={styles.section}>
            <h1>Welcome to My Portfolio</h1>
            <p>Showcasing technical architecture, automation, and design.</p>
          </section>

          <section id="about" className={styles.section}>
            <h2>About Me</h2>
            <About />
          </section>

          <section id="experience" className={styles.section}>
            <h2>Experience</h2>
            <Experience />
          </section>

          <section id="skills" className={styles.section}>
            <h2>Skills</h2>
            <Skills />
          </section>

          <section id="projects" className={styles.section}>
            <h2>Projects</h2>
            <Projects />
          </section>

          <section id="contact" className={styles.section}>
            <h2>Contact</h2>
            <p>Feel free to reach out via email at <a href="mailto:vinnie.baker@example.com" className={styles.contactLink}>vinnie.baker@example.com</a>.</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;