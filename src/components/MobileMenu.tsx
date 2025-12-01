import React from 'react';
import clsx from 'clsx';
import { navItems, scrollToSection } from './Header'; // Assuming navItems and scrollToSection are exported from Header

interface MobileMenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  closeMenu,
}) => {
  const handleLinkClick = (href: string) => {
    scrollToSection(href);
    closeMenu();
  };

  return (
    <div
      className={clsx(
        'fixed inset-0 top-0 pt-24 bg-black/50 backdrop-blur-sm z-40 lg:hidden',
        isMenuOpen ? 'block' : 'hidden'
      )}
      onClick={closeMenu}
    >
      <nav
        className={clsx(
          'bg-gray-800 p-4 mx-4 rounded-lg shadow-xl border border-gray-700/50 transform transition-transform duration-300',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col space-y-3">
          {[...navItems, { name: 'Contact', href: 'contact' }].map((item) => (
            <li key={item.name}>
              <a href={`#${item.href}`} onClick={() => handleLinkClick(item.href)} className="block text-lg text-gray-100 py-2 hover:text-blue-400 transition-colors text-center">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};