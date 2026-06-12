"use client";

import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useTheme, type Theme } from '@/hooks/useTheme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme, isLoaded } = useTheme();

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const value = useMemo(() => ({ theme, toggleTheme, isLoaded }), [theme, isLoaded]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}