import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';
import { useState, useEffect, useCallback } from 'react';

/**
 * Measure the real visible viewport height (handles iOS Safari chrome + notch).
 * Prefer visualViewport when available; fall back to innerHeight.
 */
function getViewportHeight() {
  if (typeof window === 'undefined') return null;
  const vv = window.visualViewport;
  if (vv && vv.height) {
    return Math.round(vv.height);
  }
  return Math.round(window.innerHeight);
}

export default function HeroSection() {
  const { fadeInUp } = useAnimations();
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(null);

  const syncViewportHeight = useCallback(() => {
    const height = getViewportHeight();
    if (height == null) return;

    setViewportHeight(height);
    // Drive CSS everywhere (including !important rules) via a shared custom property
    document.documentElement.style.setProperty('--app-height', `${height}px`);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    syncViewportHeight();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', syncViewportHeight);
    window.addEventListener('orientationchange', syncViewportHeight);

    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener('resize', syncViewportHeight);
      vv.addEventListener('scroll', syncViewportHeight);
    }

    // Re-measure after paint / URL bar settle on iOS
    const t1 = setTimeout(syncViewportHeight, 50);
    const t2 = setTimeout(syncViewportHeight, 300);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', syncViewportHeight);
      window.removeEventListener('orientationchange', syncViewportHeight);
      if (vv) {
        vv.removeEventListener('resize', syncViewportHeight);
        vv.removeEventListener('scroll', syncViewportHeight);
      }
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [syncViewportHeight]);

  const homeStyle = viewportHeight
    ? { height: viewportHeight, minHeight: viewportHeight }
    : undefined;

  const sectionContent = (
    <>
      {/* Full-bleed background — extends into notch / home-indicator */}
      <div className="home-bg" aria-hidden="true" />

      <div className="container home-content">
        <div className="row">
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="home-thumb">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                Hello, I am Yash!
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-bg {
          position: absolute;
          top: calc(-1 * env(safe-area-inset-top, 0px));
          right: calc(-1 * env(safe-area-inset-right, 0px));
          bottom: calc(-1 * env(safe-area-inset-bottom, 0px));
          left: calc(-1 * env(safe-area-inset-left, 0px));
          background: url('/images/homebg.jpeg') center center / cover no-repeat;
          z-index: 0;
          pointer-events: none;
        }

        .home-content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 80px 0;
          padding-top: calc(80px + env(safe-area-inset-top, 0px));
          padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
          padding-left: 0 !important;
          min-height: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .row {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .home-thumb {
          margin-top: 0;
          position: relative;
          padding-left: 0;
          margin-left: -40px;
        }

        @media (max-width: 768px) {
          .home-thumb {
            margin-left: 0;
            text-align: center;
            padding: 0 20px;
          }

          .home-content {
            padding: 40px 0;
            padding-top: calc(40px + env(safe-area-inset-top, 0px));
            padding-bottom: calc(40px + env(safe-area-inset-bottom, 0px));
          }
        }

        @media (max-width: 480px) {
          .home-thumb {
            text-align: center;
            padding: 0 10px;
          }

          .home-thumb h1 {
            font-size: 32px;
            line-height: 1.2;
            word-wrap: break-word;
          }
        }
      `}</style>
    </>
  );

  if (isMobile) {
    return (
      <section id="home" className="parallax-section" style={homeStyle}>
        {sectionContent}
      </section>
    );
  }

  return (
    <Parallax
      y={[-5, 5]}
      tagouter="section"
      id="home"
      className="parallax-section"
      style={homeStyle}
    >
      {sectionContent}
    </Parallax>
  );
}
