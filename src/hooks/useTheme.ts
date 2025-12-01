import { useState, useEffect, useCallback } from 'react';

/**
 * Manages the application's theme (light/dark).
 * For GDPR/ePrivacy compliance, it only persists the theme to localStorage if consent is given.
 * @param {boolean} hasConsent - Flag indicating if the user has consented to storage.
 */
export const useTheme = (hasConsent: boolean) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initialTheme = prefersDark ? 'dark' : 'light';

    if (hasConsent) {
      const storedTheme = window.localStorage.getItem('theme');
      initialTheme = storedTheme || initialTheme;
    }
    setTheme(initialTheme);
  }, [hasConsent]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (hasConsent) {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme, hasConsent]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme };
};