import { useEffect, useState } from 'react';

/**
 * Simple and reliable mobile scroll-to-top component
 * Covers the entire top area including iPhone notch for easy access
 */
export default function MobileTouchArea() {
  const [isMobile, setIsMobile] = useState(false);
  const touchStartRef = { y: null, time: null };

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
    
    // Detect iOS - improved detection
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    // Smooth scroll function that works on all platforms
    const performSmoothScroll = () => {
      const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (startPosition === 0) return; // Already at top
      
      const duration = 400; // 400ms for smooth but responsive scroll
      const startTime = performance.now();
      
      // Easing function for smooth animation
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        const currentPosition = startPosition * (1 - ease);
        
        // Scroll all possible scroll containers
        window.scrollTo(0, currentPosition);
        document.documentElement.scrollTop = currentPosition;
        document.body.scrollTop = currentPosition;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure we're exactly at the top
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      };
      
      requestAnimationFrame(animate);
    };
    
    // For iOS, ensure immediate response then smooth scroll
    if (isIOS) {
      // First, ensure immediate response
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Then apply smooth scroll on next frame
      requestAnimationFrame(() => {
        performSmoothScroll();
      });
    } else {
      // For Android and other browsers, use smooth scroll directly
      performSmoothScroll();
    }
  };
  
  // Track touch start for better gesture detection
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.y = touch.clientY;
    touchStartRef.time = Date.now();
  };
  
  const handleTouchEnd = (e) => {
    if (!touchStartRef.y) return;
    
    const touch = e.changedTouches[0];
    const deltaY = Math.abs(touch.clientY - touchStartRef.y);
    const deltaTime = Date.now() - touchStartRef.time;
    
    // If it's a quick tap (small movement, short time), trigger scroll
    if (deltaY < 15 && deltaTime < 300) {
      e.preventDefault();
      scrollToTop(e);
    }
    
    // Reset
    touchStartRef.y = null;
    touchStartRef.time = null;
  };

  // Only render on mobile devices
  if (!isMobile) return null;

  return (
    <>
      <div
        className="mobile-scroll-to-top"
        onClick={scrollToTop}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
          /* Optimize for touch - use manipulation for better iOS support */
          touch-action: manipulation;
          /* Prevent text selection */
          user-select: none;
          -webkit-user-select: none;
          /* Better touch handling for iOS */
          -webkit-touch-callout: none;
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