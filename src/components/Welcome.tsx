import React from 'react';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className={styles.welcome}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Welcome to My Portfolio</h1>
        <p className={styles.intro}>
          As a Technical Architect, Automation Consultant, and Designer, I specialize in creating robust, scalable solutions that drive efficiency and innovation. Explore my work to see how I can bring value to your team.
        </p>
        <a href="#projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Welcome;