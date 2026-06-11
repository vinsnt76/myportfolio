import React from 'react';
import './globals.css';

import { ConsentProvider } from '@/context/ConsentContext.js';
import Header from '@/components/Header.js';

export const metadata = {
  title: 'Vinnie Baker — Portfolio',
  description: 'AI-powered automation, UX strategy, and digital systems engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <ConsentProvider>
          <Header />
          <main className="pt-24">{children}</main>
        </ConsentProvider>
      </body>
    </html>
  );
}
