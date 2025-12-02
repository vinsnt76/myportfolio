import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/**
 * Manages the application's theme (light/dark), persisting it to localStorage.
 * @param {boolean} enabled - Flag to enable or disable the hook's effects, typically based on consent.
 */
export const useTheme = (enabled: boolean = true) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    
    // Set initial theme from localStorage or system preference
    const savedTheme = window.localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme as 'light' | 'dark');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

  }, [enabled]);

  const toggleTheme = () => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  return { theme, toggleTheme };
};