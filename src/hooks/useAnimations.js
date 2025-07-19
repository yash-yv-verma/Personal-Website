export function useAnimations() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.22,
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: {
        delay: i * 0.22,
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.22,
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.22,
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  return {
    fadeInUp,
    fadeIn,
    slideInLeft,
    slideInRight
  };
} 