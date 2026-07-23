import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';
import { useEffect } from 'react';

/**
 * Home hero — stable full-viewport photo.
 *
 * IMPORTANT (iOS Safari):
 * Do NOT resize #home when the URL bar shows/hides. That changes the box size,
 * which makes background-size:cover recalculate and looks like a zoom in/out.
 * Use 100lvh (large viewport) so height is stable and the next section never peeks.
 *
 * Notch: paint the same photo on <html> while this section is mounted so the
 * unsafe area around the notch shows the image from first paint (not only after scroll).
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
    </section>
  );
}
