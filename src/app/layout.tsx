import React from 'react';
import './globals.css';
import { ConsentProvider } from '@/context/ConsentContext.js';
import Header from '@/components/Header.js';
import ErrorBoundary from '@/components/ErrorBoundary.js';

export const metadata = {
  title: "Vincent Baker | Portfolio",
  description: "AI-powered automation and AEO strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <ConsentProvider>
          <ErrorBoundary>
            <Header />
            <main className="container mx-auto px-4 pt-24">{children}</main>
            <footer className="text-center py-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Vincent Baker. All rights reserved.
            </footer>
          </ErrorBoundary>
        </ConsentProvider>
      </body>
    </html>
  );
}