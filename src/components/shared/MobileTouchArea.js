import { useState, useEffect } from 'react';

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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleTouch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToTop();
  };

  const handleClick = (e) => {
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
          height: 120px;
          z-index: 9999;
          cursor: pointer;
          /* Completely invisible */
          background: transparent;
          /* Ensure it's touchable */
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          /* Ensure it's above everything */
          pointer-events: auto;
          /* Make sure it's not interfering with other elements */
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