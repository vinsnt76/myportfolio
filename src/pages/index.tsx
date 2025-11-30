import Header from '@/components/Header';
import SEO from '@/components/SEO';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ErrorBoundary from '@/components/ErrorBoundary';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <main className={styles.main} role="main">
        <ErrorBoundary>
          <div className={styles.container}>
            <section id="home" className={styles.section} aria-labelledby="home-heading">
              <h1 id="home-heading">Welcome to My Portfolio</h1>
              <p>Showcasing technical architecture, automation, and design.</p>
            </section>
            <section id="about" className={styles.section} aria-labelledby="about-heading">
              <h2 id="about-heading">About Me</h2>
              <About />
            </section>
            <section id="experience" className={styles.section} aria-labelledby="experience-heading">
              <h2 id="experience-heading">Experience</h2>
              <Experience />
            </section>
            <section id="skills" className={styles.section} aria-labelledby="skills-heading">
              <h2 id="skills-heading">Skills</h2>
              <Skills />
            </section>
            <section id="projects" className={styles.section} aria-labelledby="projects-heading">
              <h2 id="projects-heading">Projects</h2>
              <Projects />
            </section>
            <section id="contact" className={styles.section} aria-labelledby="contact-heading">
              <h2 id="contact-heading">Contact</h2>
              <p>Feel free to reach out via email at <a href="mailto:vinnie.baker@example.com" className={styles.contactLink}>vinnie.baker@example.com</a>.</p>
            </section>
          </div>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}