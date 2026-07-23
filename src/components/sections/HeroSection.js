import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';
import { useEffect } from 'react';

/**
 * Home hero.
 *
 * Notch + full-bleed photo strategy (iOS Safari):
 * 1. html.home-hero-active gets the photo in <head> BEFORE first paint
 *    (html canvas background is what fills the notch on load).
 * 2. #home-viewport-bleed is a fixed layer extended into safe-area insets.
 * 3. #home is a transparent 100lvh spacer — no visualViewport height binding
 *    (that caused the zoom bug). Body stays transparent so no black strip
 *    appears between the photo and the white #service section.
 */
export default function HeroSection() {
  const { fadeInUp } = useAnimations();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add('home-hero-active');
    body.classList.add('home-hero-active');

    // Ensure bleed exists (client navigations back to home)
    let bleed = document.getElementById('home-viewport-bleed');
    if (!bleed) {
      bleed = document.createElement('div');
      bleed.id = 'home-viewport-bleed';
      bleed.setAttribute('aria-hidden', 'true');
      body.insertBefore(bleed, body.firstChild);
    }

    return () => {
      html.classList.remove('home-hero-active');
      body.classList.remove('home-hero-active');
      const existing = document.getElementById('home-viewport-bleed');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section id="home" className="parallax-section home-hero">
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

          .home-thumb h1 {
            font-size: 20px !important;
            line-height: 1.3 !important;
            word-wrap: break-word;
          }

          .home-content {
            padding: 24px 0;
          }
        }

        @media (max-width: 480px) {
          .home-thumb {
            text-align: center;
            padding: 0 10px;
          }

          .home-thumb h1 {
            font-size: 20px !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
    </section>
  );
}
