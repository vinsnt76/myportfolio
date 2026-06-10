// src/components/Layout.tsx
export const metadata = {
  title: "Vincent Baker | Portfolio",
  description: "AI-powered automation and AEO strategies."
};

import Header from '@/components/Header.js';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({
  children,
  title = 'Vincent Baker | Portfolio',
  description = 'Portfolio showcasing projects, skills, and contact information.',
}: LayoutProps) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Vincent Baker. All rights reserved.
      </footer>
    </>
  );
}
