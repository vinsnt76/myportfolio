import { useState, useEffect } from 'react';

/**
 * Custom hook to determine if the header should be in a "sticky" state
 * based on the window's vertical scroll position.
 */
export const useScrollLogic = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isSticky };
};