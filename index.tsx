// src/components/Header/index.tsx
import { useState, useEffect } from 'react';
import { useScrollspy } from '@/hooks/useScrollspy';
import { useTheme } from '@/hooks/useTheme';
import ConsentBanner from '@/components/ConsentBanner';
import styles from './Header.module.css';

const SECTIONS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Header = () => {
  const [userHasConsented, setUserHasConsented] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem('userConsent');
    setUserHasConsented(consent === 'true');
  }, []);

  const activeSection = useScrollspy(SECTIONS);
  // Pass the consent state to the useTheme hook.
  const { toggleTheme } = useTheme(userHasConsented);

  return (
    <>
      <ConsentBanner onConsent={() => setUserHasConsented(true)} />
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Vinnie Baker</div>
          <ul className={styles.navList}>
            {SECTIONS.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`${styles.navLink} ${activeSection === section ? styles.navLinkActive : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            ☀️/🌙
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;