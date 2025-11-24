import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let timeoutId;
    const handleScroll = () => {
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
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const navStyle = {
    position: 'fixed',
    bottom: isMobile ? '20px' : '32px',
    left: '50%',
    zIndex: 1000,
    padding: isMobile ? '8px 20px' : '10px 28px',
    borderRadius: '50px',
    background: 'rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isVisible ? 1 : 0,
    transform: `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(20px)'}`,
    minWidth: isMobile ? '280px' : '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...(isMobile && { height: '56px' })
  };

  const linkStyle = (isActive) => ({
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: isMobile ? '0.95rem' : '1.1rem',
    fontWeight: isActive ? '600' : '400',
    padding: isMobile ? '8px 12px' : '10px 16px',
    borderRadius: '25px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    letterSpacing: '0.2px',
    background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
    border: isActive ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid transparent',
    whiteSpace: 'nowrap',
    ...(isMobile && {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    })
  });

  return (
    <nav style={navStyle}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '16px' : '24px',
        position: 'relative',
        zIndex: 1
      }}>
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
          Open Labs
        </Link>

        <Link href="/resume" style={linkStyle(router.pathname === '/resume')}>
          Resume
        </Link>
      </div>
    </nav>
  );
}
