"use client";
import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  // Initialize as null to prevent hydration mismatch (Server vs Client)
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // On mount, check localStorage then system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    
    // Sync with DOM and Persistence
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Default to 'light' for the UI but logic ensures actual theme follows state
  return { theme: theme || 'light', toggleTheme, isLoaded: theme !== null };
};