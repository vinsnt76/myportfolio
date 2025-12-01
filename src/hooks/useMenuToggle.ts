import { useState, useCallback } from 'react';

/**
 * Custom hook to manage the open/closed state of the mobile menu.
 */
export const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return { isMenuOpen, toggleMenu, closeMenu };
};