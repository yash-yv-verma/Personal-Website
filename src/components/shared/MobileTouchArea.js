import { useState, useEffect } from 'react';

/**
 * MobileTouchArea - Provides invisible touch area at top of screen for scroll-to-top functionality
 * Only active on mobile devices (≤768px width)
 */
export default function MobileTouchArea() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Set back to mobile-only threshold
      const isMobile = window.innerWidth <= 768;
      setIsVisible(isMobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global top-edge tap listener as a fallback (in case overlay is not hit)
  useEffect(() => {
    if (!isVisible) return;

    const TOP_TAP_THRESHOLD_PX = 80; // area near top of viewport

    const handleGlobalTouchStart = (e) => {
      const touch = e.touches && e.touches[0];
      if (!touch) return;
      if (touch.clientY <= TOP_TAP_THRESHOLD_PX) {
        scrollToTop();
      }
    };

    const handleGlobalClick = (e) => {
      if (e.clientY <= TOP_TAP_THRESHOLD_PX) {
        scrollToTop();
      }
    };

    window.addEventListener('touchstart', handleGlobalTouchStart, { passive: true });
    window.addEventListener('click', handleGlobalClick, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleGlobalTouchStart);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [isVisible]);

  const handleTouch = () => {
    // Do not preventDefault; just trigger scroll
    scrollToTop();
  };

  const handleClick = () => {
    scrollToTop();
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="mobile-touch-area"
        onClick={handleClick}
        onTouchStart={handleTouch}
        onTouchEnd={handleTouch}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
      />
      
      <style jsx>{`
        .mobile-touch-area {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: calc(env(safe-area-inset-top) + 64px);
          z-index: 9999;
          cursor: pointer;
          /* Completely invisible */
          background: transparent;
          /* Ensure it's touchable */
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          /* Ensure it's above everything */
          pointer-events: auto;
          /* Make sure it's not interfering with selection */
          user-select: none;
          -webkit-user-select: none;
          /* Ensure it stays fixed to viewport */
          transform: translateZ(0);
        }
        
        /* Hide on larger screens */
        @media (min-width: 769px) {
          .mobile-touch-area {
            display: none;
          }
        }
      `}</style>
    </>
  );
} 