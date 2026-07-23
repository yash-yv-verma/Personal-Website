import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';
import { useEffect } from 'react';

/**
 * Home hero — stable full-viewport photo.
 *
 * iOS notes:
 * - Never resize #home on scroll (that caused the zoom bug).
 * - Notch fill must be painted before React hydrates (see _document.js critical CSS/script).
 * - #home is pulled into safe-area so the photo covers the notch from first paint.
 */
export default function HeroSection() {
  const { fadeInUp } = useAnimations();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.add('home-hero-active');
    body.classList.add('home-hero-active');

    return () => {
      html.classList.remove('home-hero-active');
      body.classList.remove('home-hero-active');
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
            font-size: 24px !important;
            line-height: 1.25 !important;
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
            font-size: 22px !important;
            line-height: 1.25 !important;
          }
        }
      `}</style>
    </section>
  );
}
