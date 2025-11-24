import { useEffect, useState } from 'react';

/**
 * Simple and reliable mobile scroll-to-top component
 * Covers the entire top area including iPhone notch for easy access
 */
export default function MobileTouchArea() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check if mobile device (width <= 768px) or touch device
      const isMobileWidth = window.innerWidth <= 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isMobileWidth || isTouchDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = (e) => {
    // Prevent default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Immediate scroll to top - no smooth scrolling to ensure it works
    // Use multiple methods for maximum compatibility
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force scroll after a brief delay to ensure it works
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  };

  // Only render on mobile devices
  if (!isMobile) return null;

  return (
    <>
      <div
        className="mobile-scroll-to-top"
        onClick={scrollToTop}
        onTouchStart={scrollToTop}
        onTouchEnd={(e) => {
          e.preventDefault();
          scrollToTop(e);
        }}
        aria-label="Scroll to top"
        role="button"
        tabIndex={-1}
      />
      <style jsx>{`
        .mobile-scroll-to-top {
          position: fixed !important;
          top: 0;
          left: 0;
          right: 0;
          /* Large touch area covering the entire top including notch */
          height: 150px;
          z-index: 99999;
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
            display: none !important; 
          }
        }
      `}</style>
    </>
  );
} 