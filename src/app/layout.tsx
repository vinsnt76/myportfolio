import React from 'react';
import './globals.css';
import { ConsentProvider } from '@/context/ConsentContext';
import Header from '@/app/components/Header';

export const metadata = {
  title: 'Vincent Baker | Portfolio',
  description: 'AI-powered automation and AEO strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100">
        <ConsentProvider>
          <Header />
          <main className="container mx-auto px-4 pt-32">{children}</main>
          <footer className="text-center py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Vincent Baker. All rights reserved.
          </footer>
        </ConsentProvider>
      </body>
    </html>
  );
}