import { useEffect, useState } from 'react';

/**
 * Simple and reliable mobile scroll-to-top component
 * Covers the entire top area including iPhone notch for easy access
 */
export default function MobileTouchArea() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    // Immediate scroll to top - no smooth scrolling to ensure it works
    window.scrollTo(0, 0);
  };

  // Only render on mobile devices
  if (!isMobile) return null;

  return (
    <>
      <div
        className="mobile-scroll-to-top"
        onClick={scrollToTop}
        onTouchStart={scrollToTop}
        aria-label="Scroll to top"
      />
      <style jsx>{`
        .mobile-scroll-to-top {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          /* Large touch area covering the entire top including notch */
          height: 120px;
          z-index: 9999;
          background: transparent;
          cursor: pointer;
          /* Ensure it's clickable */
          pointer-events: auto;
          /* Remove any touch highlights */
          -webkit-tap-highlight-color: transparent;
          /* Optimize for touch */
          touch-action: manipulation;
        }
        
        /* Hide on desktop */
        @media (min-width: 769px) {
          .mobile-scroll-to-top { 
            display: none; 
          }
        }
      `}</style>
    </>
  );
} 