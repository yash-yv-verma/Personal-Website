import { useEffect, useState } from 'react';

/**
 * MobileScrollToTop - provides an intuitive scroll-to-top experience on mobile devices
 * Uses industry-standard touch areas and behavior
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
    // Smooth scroll to top with fallback for older browsers
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  // Only render on mobile devices
  if (!isMobile) return null;

  return (
    <>
      <div
        className="mobile-scroll-to-top-area"
        aria-hidden="true"
        onClick={scrollToTop}
        onTouchEnd={scrollToTop}
      />
      <style jsx>{`
        .mobile-scroll-to-top-area {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          /* Industry standard: 88px touch area (44px * 2) plus safe area */
          height: calc(88px + env(safe-area-inset-top));
          z-index: 10000;
          background: transparent;
          pointer-events: auto;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          /* Ensure it's above all content but doesn't interfere with normal interactions */
          cursor: pointer;
        }
        
        /* Hide on desktop */
        @media (min-width: 769px) {
          .mobile-scroll-to-top-area { 
            display: none; 
          }
        }
        
        /* Additional touch area for iPhone status bar area */
        @media (max-width: 768px) and (max-height: 844px) {
          .mobile-scroll-to-top-area {
            height: calc(120px + env(safe-area-inset-top));
          }
        }
        
        /* Larger area for very small screens */
        @media (max-width: 375px) {
          .mobile-scroll-to-top-area {
            height: calc(100px + env(safe-area-inset-top));
          }
        }
      `}</style>
    </>
  );
} 