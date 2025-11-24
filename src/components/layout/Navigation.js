import { useState, useEffect, useRef } from 'react';
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
    let isRouteChanging = false;
    
    // Track route changes to prevent nav visibility changes during navigation
    const handleRouteChangeStart = () => {
      isRouteChanging = true;
      isNavigatingRef.current = true;
      // Keep nav visible during route changes
      setIsVisible(true);
    };
    
    const handleRouteChangeComplete = () => {
      // Small delay to let scroll-to-top complete
      setTimeout(() => {
        isRouteChanging = false;
        isNavigatingRef.current = false;
      }, 200);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    const handleScroll = () => {
      // Don't react to scroll during route changes
      if (isRouteChanging) return;
      
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
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, router.events]);

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
    bottom: isMobile ? '20px' : isTablet ? '24px' : '32px',
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
    transition: isMounted && !isNavigatingRef.current
      ? (isMobile || isTablet)
        ? 'opacity 0.3s ease' // Only opacity transition on mobile/tablet
        : 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      : 'none',
    opacity: isVisible ? 1 : 0,
    transform: transformValue,
    maxWidth: isMobile ? 'calc(100vw - 40px)' : 'fit-content',
    width: isMobile ? 'auto' : 'fit-content',
    marginLeft: '0',
    marginRight: '0',
    display: 'flex',
    alignItems: 'center',
    overflowX: isMobile ? 'auto' : 'hidden',
    overflowY: 'hidden', // Prevent vertical scrolling
    ...(isMobile && { 
      height: '56px',
      // Smooth scrolling for mobile
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      // Hide scrollbar but keep functionality
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE/Edge
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

  return (
    <nav style={navStyle}>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '12px' : isTablet ? '20px' : '24px',
          position: 'relative',
          zIndex: 1,
          width: 'fit-content',
          padding: isMobile ? '0 8px' : '0'
        }}
        className="nav-links-container"
      >
        <Link href="/" style={linkStyle(router.pathname === '/')}>
          Home
        </Link>

        <Link href="/blog" style={linkStyle(router.pathname.startsWith('/blog'))}>
          Blog
        </Link>

        <Link href="/bts" style={linkStyle(router.pathname.startsWith('/bts'))}>
          BTS
        </Link>

        <Link href="/research" style={linkStyle(router.pathname === '/research')}>
          Research
        </Link>

        <Link href="/openlabs" style={linkStyle(router.pathname === '/openlabs')}>
          OpenLabs
        </Link>

        <Link href="/resume" style={linkStyle(router.pathname === '/resume')}>
          Resume
        </Link>
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
          }
          
          nav a:active {
            transform: none !important;
            scale: none !important;
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
            width: fit-content !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
        
        /* Ensure smooth scrolling on mobile */
        @media (max-width: 768px) {
          nav {
            -webkit-overflow-scrolling: touch;
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
