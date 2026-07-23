import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';
import { useState, useEffect, useCallback } from 'react';

/**
 * Largest reliable viewport height so the hero never leaves a gap above the next section.
 * Uses max(visualViewport, innerHeight, clientHeight) — critical on iOS Safari where
 * these disagree before/after the URL bar settles.
 */
function getViewportHeight() {
  if (typeof window === 'undefined') return null;
  const vv = window.visualViewport?.height || 0;
  const inner = window.innerHeight || 0;
  const client = document.documentElement?.clientHeight || 0;
  return Math.round(Math.max(vv, inner, client));
}

function applyAppHeight(height) {
  document.documentElement.style.setProperty('--app-height', `${height}px`);
}

export default function HeroSection() {
  const { fadeInUp } = useAnimations();
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(null);

  const syncViewportHeight = useCallback(() => {
    const height = getViewportHeight();
    if (height == null || height <= 0) return;
    setViewportHeight(height);
    applyAppHeight(height);
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
    // iOS often reports the correct height only after the first scroll/touch
    window.addEventListener('scroll', syncViewportHeight, { passive: true });

    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener('resize', syncViewportHeight);
      vv.addEventListener('scroll', syncViewportHeight);
    }

    // Settle passes: iOS URL bar / safe-area change after first layout
    const timers = [0, 50, 100, 250, 500, 1000].map((ms) =>
      setTimeout(syncViewportHeight, ms)
    );

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', syncViewportHeight);
      window.removeEventListener('orientationchange', syncViewportHeight);
      window.removeEventListener('scroll', syncViewportHeight);
      if (vv) {
        vv.removeEventListener('resize', syncViewportHeight);
        vv.removeEventListener('scroll', syncViewportHeight);
      }
      timers.forEach(clearTimeout);
    };
  }, [syncViewportHeight]);

  const homeStyle = viewportHeight
    ? {
        height: viewportHeight,
        minHeight: viewportHeight,
        // Paint the photo on the section itself so it shows on first paint
        // (not only after scroll), including under the notch with viewport-fit=cover.
        backgroundImage: "url('/images/homebg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000000',
      }
    : {
        backgroundImage: "url('/images/homebg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000000',
      };

  const sectionContent = (
    <>
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
        .home-content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 80px 0;
          padding-top: calc(80px + env(safe-area-inset-top, 0px));
          padding-bottom: calc(40px + env(safe-area-inset-bottom, 0px));
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
