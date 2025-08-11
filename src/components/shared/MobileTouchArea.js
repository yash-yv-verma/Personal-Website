import { useState, useEffect } from 'react';

/**
 * MobileTopEdgeTap - Scrolls to top when user taps near the top edge on mobile
 * Uses global listeners; renders nothing to avoid layout/stacking issues
 */
export default function MobileTouchArea() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsActive(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const TOP_TAP_THRESHOLD_PX = 100;
    const scrollToTop = () => {
      // Try immediate and smooth for broader compatibility
      window.scrollTo(0, 0);
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      });
    };

    const onPointerUp = (e) => {
      const y = e.clientY ?? (e.changedTouches && e.changedTouches[0]?.clientY);
      if (typeof y === 'number' && y <= TOP_TAP_THRESHOLD_PX) {
        scrollToTop();
      }
    };

    // Use pointerup + touchend for broad device support; passive to avoid blocking
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });
    window.addEventListener('click', onPointerUp, { passive: true });

    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('click', onPointerUp);
    };
  }, [isActive]);

  return null;
} 