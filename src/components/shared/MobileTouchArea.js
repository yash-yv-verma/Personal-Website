import { useEffect, useState } from 'react';

/**
 * MobileTopEdgeTap - captures taps near the top edge on mobile to scroll to top
 */
export default function MobileTouchArea() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsActive(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    });
  };

  // Fallback global listeners
  useEffect(() => {
    if (!isActive) return;
    const TOP_TAP_THRESHOLD_PX = 100;
    const onPointerUp = (e) => {
      const y = e.clientY ?? (e.changedTouches && e.changedTouches[0]?.clientY);
      if (typeof y === 'number' && y <= TOP_TAP_THRESHOLD_PX) scrollToTop();
    };
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });
    window.addEventListener('click', onPointerUp, { passive: true });
    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('click', onPointerUp);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      <div
        className="mobile-top-tap-overlay"
        aria-hidden="true"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          scrollToTop();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          scrollToTop();
        }}
      />
      <style jsx>{`
        .mobile-top-tap-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: calc(env(safe-area-inset-top) + 44px);
          z-index: 10000;
          background: transparent;
          pointer-events: auto;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        @media (min-width: 769px) {
          .mobile-top-tap-overlay { display: none; }
        }
      `}</style>
    </>
  );
} 