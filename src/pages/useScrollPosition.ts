import { useState, useEffect } from 'react';

/**
 * A custom hook that returns true if the user has scrolled past a certain threshold.
 * @param threshold The scroll threshold in pixels. Defaults to 0.
 * @returns `true` if window.scrollY is greater than the threshold, otherwise `false`.
 */
export function useScrollPosition(threshold: number = 0): boolean {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastThreshold(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPastThreshold;
}
