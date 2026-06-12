"use client";

import React from 'react';
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight">
          VINCENT BAKER
        </div>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <span role="img" aria-label="sun">☀️</span>
          ) : (
            <span role="img" aria-label="moon">🌙</span>
          )}
        </button>
      </nav>
    </header>
  );
}