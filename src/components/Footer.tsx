// src/components/Footer.tsx
import styles from '@/styles/Home.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Vinnie Baker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;