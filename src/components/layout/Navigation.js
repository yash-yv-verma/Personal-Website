import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isNavigatingRef = useRef(false);
  const navContainerRef = useRef(null);
  const horizontalScrollPositionRef = useRef(0);
  const isRouteChangingRef = useRef(false);

  const getScrollContainer = useCallback(() => navContainerRef.current, []);

  const saveHorizontalScroll = useCallback(() => {
    const container = getScrollContainer();
    if (container) {
      horizontalScrollPositionRef.current = container.scrollLeft;
    }
  }, [getScrollContainer]);

  const restoreHorizontalScroll = useCallback(() => {
    const container = getScrollContainer();
    if (!container) return;

    const savedPosition = horizontalScrollPositionRef.current;
    if (Math.abs(container.scrollLeft - savedPosition) > 1) {
      container.scrollLeft = savedPosition;
    }
  }, [getScrollContainer]);

  useLayoutEffect(() => {
    restoreHorizontalScroll();
  }, [router.pathname, restoreHorizontalScroll]);

  useEffect(() => {
    // Set mounted state immediately to prevent initial animation
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    let timeoutId;
    let scrollRestoreTimeouts = [];
    
    const scheduleScrollRestore = () => {
      restoreHorizontalScroll();
      requestAnimationFrame(restoreHorizontalScroll);
      [0, 50, 150, 300].forEach((delay) => {
        const timeout = setTimeout(restoreHorizontalScroll, delay);
        scrollRestoreTimeouts.push(timeout);
      });
    };

    // Track route changes to prevent nav visibility changes during navigation
    const handleRouteChangeStart = () => {
      isRouteChangingRef.current = true;
      isNavigatingRef.current = true;
      setIsVisible(true);
      saveHorizontalScroll();
    };
    
    const handleRouteChangeComplete = () => {
      scrollRestoreTimeouts.forEach(clearTimeout);
      scrollRestoreTimeouts = [];
      scheduleScrollRestore();

      const finalTimeout = setTimeout(() => {
        restoreHorizontalScroll();
        isRouteChangingRef.current = false;
        isNavigatingRef.current = false;
      }, 350);
      scrollRestoreTimeouts.push(finalTimeout);
    };
    
    const handleRouteChangeError = () => {
      isRouteChangingRef.current = false;
      isNavigatingRef.current = false;
      scrollRestoreTimeouts.forEach(clearTimeout);
      scrollRestoreTimeouts = [];
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);
    
    const handleScroll = () => {
      // Don't react to scroll during route changes
      if (isRouteChangingRef.current || isNavigatingRef.current) return;
      
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      
      // Clear previous timeout
      if (timeoutId) clearTimeout(timeoutId);
      
      // Show navbar after user stops scrolling
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
      if (timeoutId) clearTimeout(timeoutId);
      scrollRestoreTimeouts.forEach(clearTimeout);
      scrollRestoreTimeouts = [];
    };
  }, [lastScrollY, router.events, saveHorizontalScroll, restoreHorizontalScroll]);

  // Calculate transform - On mobile, no transform. On tablet/desktop, use translateX(-50%) for centering
  // Lock transform on mobile/tablet during navigation to prevent pulsing
  // CSS will handle 581px-768px range with media query
  const transformValue = isMobile
    ? 'none' // No transform on mobile (CSS will override for 581px-768px)
    : isTablet
    ? 'translateX(-50%)' // Always centered on tablet, no translateY animation
    : `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(20px)'}`;

  const navStyle = {
    position: 'fixed',
    bottom: isMobile
      ? 'calc(20px + env(safe-area-inset-bottom, 0px))'
      : isTablet
      ? 'calc(24px + env(safe-area-inset-bottom, 0px))'
      : '32px',
    left: isMobile ? '20px' : '50%', // Tablet and desktop centered, CSS will override for 581px-768px
    right: isMobile ? '20px' : 'auto', // Only mobile uses right, CSS will override for 581px-768px
    zIndex: 1000,
    padding: isMobile ? '8px 12px' : isTablet ? '10px 24px' : '10px 28px',
    borderRadius: '50px',
    background: 'rgba(0, 0, 0, 0.25)', // Original opacity
    backdropFilter: 'blur(20px) saturate(180%)', // Same blur as before
    WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Same blur as before
    border: '2px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
    transition: (isMounted && !isNavigatingRef.current && !isRouteChangingRef.current)
      ? (isMobile || isTablet)
        ? 'none' // NO transitions on mobile/tablet to prevent pulsing
        : 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      : 'none',
    // Note: scrollLeft is set on the container, not the nav element
    opacity: isVisible ? 1 : 0,
    transform: transformValue,
    maxWidth: isMobile ? 'calc(100vw - 40px)' : 'fit-content',
    width: isMobile ? 'auto' : 'fit-content',
    marginLeft: '0',
    marginRight: '0',
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    ...(isMobile && { 
      height: '56px',
    })
  };

  const linkStyle = (isActive) => ({
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: isMobile ? '0.9rem' : isTablet ? '1rem' : '1.1rem',
    fontWeight: isActive ? '600' : '400',
    padding: isMobile ? '8px 14px' : isTablet ? '10px 16px' : '10px 16px',
    borderRadius: '25px',
    transition: isMobile || isTablet
      ? 'none' // No transition on mobile/tablet to prevent pulsing
      : 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    letterSpacing: '0.2px',
    background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
    border: isActive ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid transparent',
    whiteSpace: 'nowrap',
    flexShrink: 0, // Prevent items from shrinking
    WebkitTapHighlightColor: 'transparent', // Prevent tap highlight
    touchAction: 'manipulation', // Prevent double-tap zoom
    ...(isMobile && {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }),
    ...((isMobile || isTablet) && {
      transform: 'none', // Ensure no transform on mobile/tablet
      willChange: 'auto' // Prevent GPU acceleration issues
    })
  });

  const handleNavLinkInteraction = () => {
    saveHorizontalScroll();
  };

  const navLinks = [
    { href: '/', label: 'Home', isActive: router.pathname === '/' },
    { href: '/blog', label: 'Blog', isActive: router.pathname.startsWith('/blog') },
    { href: '/bts', label: 'BTS', isActive: router.pathname.startsWith('/bts') },
    { href: '/research', label: 'Research', isActive: router.pathname === '/research' },
    { href: '/openlabs', label: 'OpenLabs', isActive: router.pathname === '/openlabs' },
    { href: '/resume', label: 'Resume', isActive: router.pathname === '/resume' },
  ];

  return (
    <nav 
      style={navStyle}
      data-navigating={isNavigatingRef.current || isRouteChangingRef.current}
    >
      <div 
        ref={navContainerRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '12px' : isTablet ? '20px' : '24px',
          position: 'relative',
          zIndex: 1,
          width: isMobile ? '100%' : 'fit-content',
          padding: isMobile ? '0 8px' : '0',
          overflowX: isMobile ? 'auto' : 'visible',
          overflowY: 'hidden',
          ...(isMobile && {
            minWidth: 0,
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }),
        }}
        className="nav-links-container"
        onScroll={(e) => {
          if (!isNavigatingRef.current && !isRouteChangingRef.current) {
            horizontalScrollPositionRef.current = e.currentTarget.scrollLeft;
            return;
          }

          const savedPosition = horizontalScrollPositionRef.current;
          if (Math.abs(e.currentTarget.scrollLeft - savedPosition) > 1) {
            e.currentTarget.scrollLeft = savedPosition;
          }
        }}
      >
        {navLinks.map(({ href, label, isActive }) => (
          <Link
            key={href}
            href={href}
            style={linkStyle(isActive)}
            onTouchStart={handleNavLinkInteraction}
            onMouseDown={handleNavLinkInteraction}
            onClick={handleNavLinkInteraction}
          >
            {label}
          </Link>
        ))}
      </div>
      <style jsx>{`
        .nav-links-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        /* Prevent tap highlight and active states on mobile/tablet */
        @media (max-width: 1024px) {
          nav a {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            user-select: none;
            touch-action: manipulation;
            transition: none !important;
            -webkit-transition: none !important;
            transform: none !important;
            will-change: auto !important;
            scroll-margin: 0;
          }
          
          nav a:active,
          nav a:focus,
          nav a:hover {
            transform: none !important;
            scale: none !important;
            transition: none !important;
            -webkit-transition: none !important;
          }
          
          /* Prevent nav container from resetting scroll during route changes */
          .nav-links-container {
            scroll-behavior: auto !important;
            overflow-anchor: none;
          }
        }
        
        /* Fix gap issue for 501px-768px range - ensure it fits content and is centered */
        @media (min-width: 501px) and (max-width: 768px) {
          nav {
            width: fit-content !important;
            max-width: calc(100vw - 40px) !important;
            min-width: fit-content !important;
            left: 50% !important;
            right: auto !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          nav[style*="transform"] {
            transform: translateX(-50%) !important;
          }
          
          .nav-links-container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow-x: auto !important;
          }
        }
        
        /* Fix in-between sizes (around 768-850px) */
        @media (min-width: 769px) and (max-width: 850px) {
          nav {
            width: fit-content !important;
            min-width: fit-content !important;
            max-width: fit-content !important;
            left: 50% !important;
            right: auto !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            transform: translateX(-50%) !important;
          }
          
          .nav-links-container {
            width: fit-content !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
        
        /* Tablet - ensure nav is centered and fits content exactly */
        @media (min-width: 851px) and (max-width: 1024px) {
          nav {
            width: fit-content !important;
            min-width: fit-content !important;
            max-width: fit-content !important;
            left: 50% !important;
            right: auto !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            transform: translateX(-50%) !important;
            transform-origin: center bottom;
            display: flex !important;
            justify-content: center !important;
          }
          
          .nav-links-container {
            width: fit-content !important;
            min-width: fit-content !important;
            max-width: fit-content !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
        
        /* Desktop - ensure nav fits content and is properly centered */
        @media (min-width: 1025px) {
          nav {
            width: fit-content !important;
            min-width: fit-content !important;
            max-width: fit-content !important;
            left: 50% !important;
            right: auto !important;
            transform-origin: center bottom;
          }
        }
        
        /* Prevent any initial sliding animation and stabilize rendering */
        nav {
          backface-visibility: hidden;
          perspective: 1000px;
          will-change: auto;
        }
        
        /* PERMANENTLY lock transform on mobile - never allow it to change */
        @media (max-width: 768px) {
          nav {
            transform: none !important;
            will-change: auto !important;
            transition: none !important;
            -webkit-transition: none !important;
          }
          
          /* Prevent horizontal scroll reset during route changes */
          .nav-links-container {
            width: 100% !important;
            max-width: 100% !important;
            scroll-snap-type: none !important;
            overscroll-behavior-x: contain !important;
            scroll-behavior: auto !important;
            overflow-x: auto !important;
          }
          
          /* Completely disable all transitions and transforms on nav during route changes */
          nav[data-navigating="true"] {
            transition: none !important;
            -webkit-transition: none !important;
            transform: none !important;
          }
          
          /* Lock scroll position during navigation - prevent any scroll changes */
          nav[data-navigating="true"] .nav-links-container {
            overflow-x: auto !important;
          }
        }
        
        /* Prevent any layout shifts when active state changes */
        @media (max-width: 1024px) {
          nav {
            contain: layout style paint;
          }
        }
      `}</style>
    </nav>
  );
}
