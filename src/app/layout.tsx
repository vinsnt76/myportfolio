import React from 'react';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/app/components/Header';

export const metadata = {
  title: 'Vincent Baker | Portfolio',
  description: 'AI-powered automation and AEO strategies.',
};

const themeScript = `
  (function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    
    root.style.colorScheme = theme;
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100">
        <ThemeProvider>
          <Header />
          <main className="container mx-auto px-4 pt-32">{children}</main>
          <footer className="text-center py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Vincent Baker. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}