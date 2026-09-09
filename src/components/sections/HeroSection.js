/**
 * Home hero — single <img> fill (not CSS background on multiple layers).
 * Avoids the double/offset banner from html + fixed bleed, and Safari
 * ghosting from will-change:transform on background-image.
 */
export default function HeroSection() {
  return (
    <section id="home" className="home-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="home-hero-photo"
        src="/images/homebg.jpeg"
        alt=""
        decoding="async"
        fetchPriority="high"
      />

      <div className="container home-content">
        <div className="row">
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="home-thumb">
              <h1>Hello, I am Yash!</h1>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #home {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          margin: 0;
          margin-top: calc(0px - env(safe-area-inset-top, 0px));
          margin-bottom: calc(0px - env(safe-area-inset-bottom, 0px));
          padding-top: env(safe-area-inset-top, 0px);
          padding-bottom: env(safe-area-inset-bottom, 0px);
          box-sizing: border-box;
          min-height: calc(100lvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px));
          height: calc(100lvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px));
          background-color: #000000;
          background-image: none;
          overflow: hidden;
          transform: none !important;
          will-change: auto !important;
        }

        .home-hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          transform: none !important;
          will-change: auto !important;
        }

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

        .home-thumb h1 {
          opacity: 1 !important;
          transform: none !important;
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
