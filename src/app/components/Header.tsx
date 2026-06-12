"use client";

import React from 'react';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useScrollLogic } from '@/hooks/useScrollLogic';
import { useMenuToggle } from '@/hooks/useMenuToggle';
import { MobileMenu } from './MobileMenu';
import { useScrollspy } from '@/hooks/useScrollspy';
import { useConsent } from '@/context/ConsentContext';
import { navItems, scrollToSection } from '@/app/navigation';
import clsx from 'clsx';

type NavItem = {
  name: string;
  href: string;
};

// --- Icon component for the Logo ---
const VinnieIcon = ({ className }: { className: string }) => (
  <Briefcase size={20} className={className} />
);

const Header: React.FC = () => {
  // --- State and Logic Consumption ---
  const { userHasConsented } = useConsent();
  const { theme, toggleTheme } = useTheme();
  const { isSticky } = useScrollLogic();
  const activeSection = useScrollspy(navItems.map((item: NavItem) => item.href));
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuToggle();

  // --- Class Logic Consolidation ---
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';

  return (
    <>
      <header
        className={clsx(
          'fixed top-4 left-1/2 -translate-x-1/2 p-2 px-3 lg:px-4 flex items-center justify-between z-50 transition-all duration-300 backdrop-blur-md shadow-2xl rounded-full max-w-sm lg:max-w-4xl w-full',
          theme === 'dark'
            ? 'bg-gray-800/80 border border-gray-700/50'
            : 'bg-white/90 border border-gray-200 shadow-xl',
          isSticky ? 'top-2 scale-[0.98]' : 'top-4'
        )}
      >
        {/* Logo / Brand Name */}
        <button 
          type="button"
          onClick={() => scrollToSection('welcome')} 
          className={clsx('flex items-center space-x-2 text-lg font-bold tracking-tight pr-4', textColor)}
        >
          <VinnieIcon className="text-blue-400" />
          <span>Vinnie Baker</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex grow justify-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-blue-400',
                activeSection === item.href ? 'text-blue-400' : textColor
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right-Side Controls */}
        <div className="flex items-center space-x-3">
          <button 
            type="button"
            onClick={() => scrollToSection('contact')} 
            className="bg-white text-gray-900 text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
          >
            Contact
          </button>

          <button 
            type="button"
            onClick={toggleTheme} 
            className={clsx('p-2 rounded-full transition-colors', theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100')} 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>

          <button 
            type="button"
            className={clsx('lg:hidden p-2', textColor)} 
            onClick={toggleMenu} 
            aria-expanded={isMenuOpen ? "true" : "false"} 
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Header;