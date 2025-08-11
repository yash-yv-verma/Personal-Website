import { useEffect, useState, useMemo } from 'react';

export function useAnimations() {
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mqMobile = window.matchMedia('(max-width: 768px)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setIsMobile(mqMobile.matches);
      setReduced(mqReduced.matches);
    };

    update();
    mqMobile.addEventListener?.('change', update);
    mqReduced.addEventListener?.('change', update);

    return () => {
      mqMobile.removeEventListener?.('change', update);
      mqReduced.removeEventListener?.('change', update);
    };
  }, []);

  const settings = useMemo(() => {
    if (reduced) {
      return { distance: 0, duration: 0.0, ease: [0.25, 0.46, 0.45, 0.94] };
    }
    if (isMobile) {
      return { distance: 12, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] };
    }
    return { distance: 30, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] };
  }, [isMobile, reduced]);

  const fadeInUp = {
    hidden: { opacity: 0, y: settings.distance },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: settings.duration,
        ease: settings.ease,
      },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: settings.duration,
        ease: settings.ease,
      },
    }),
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -settings.distance },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: settings.duration,
        ease: settings.ease,
      },
    }),
  };

  const slideInRight = {
    hidden: { opacity: 0, x: settings.distance },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: settings.duration,
        ease: settings.ease,
      },
    }),
  };

  return {
    fadeInUp,
    fadeIn,
    slideInLeft,
    slideInRight,
  };
} 