 import { useState, useEffect } from 'react';
 
 /**
  * A custom hook to track which section is currently visible in the viewport.
  * @param sectionIds - An array of element IDs to track.
  * @param options - IntersectionObserver options (rootMargin, threshold).
  * @returns The ID of the currently active section.
  */
 const useScrollspy = (
   sectionIds: string[],
   options?: IntersectionObserverInit
 ): string => {
   const [activeSection, setActiveSection] = useState<string>('');
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setActiveSection(entry.target.id);
           }
         });
       },
       {
         rootMargin: '-50% 0px -50% 0px', // Triggers when the section is in the middle of the screen
         threshold: 0,
         ...options,
       }
     );
 
     sectionIds.forEach((id) => {
       const element = document.getElementById(id);
       if (element) {
         observer.observe(element);
       }
     });
 
     return () => {
       sectionIds.forEach((id) => {
         const element = document.getElementById(id);
         if (element) {
           observer.unobserve(element);
         }
       });
     };
   }, [sectionIds, options]);
 
   return activeSection;
 };
 
 export default useScrollspy;