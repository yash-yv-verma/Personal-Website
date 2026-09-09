import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/linea.css" />
          <link rel="stylesheet" href="/css/ionicons.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/tooplate-style.css" />
          <link rel="stylesheet" href="/css/mobile-fixes.css" />

          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
          {/* No theme-color — iOS Safari paints it as an opaque notch bar on first load */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="preload" as="image" href="/images/homebg.jpeg" />

          {/*
            Hero photo is a single <img> inside #home (SSR).
            Do NOT also paint CSS background-image on html/#home — that doubles the banner.
          */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                html, body {
                  margin: 0;
                  padding: 0;
                  background-color: #000000;
                  background-image: none !important;
                }
                #__next {
                  background: transparent;
                }
                #home {
                  position: relative;
                  margin: 0 !important;
                  margin-top: calc(0px - env(safe-area-inset-top, 0px)) !important;
                  margin-bottom: calc(0px - env(safe-area-inset-bottom, 0px)) !important;
                  padding-top: env(safe-area-inset-top, 0px) !important;
                  padding-bottom: env(safe-area-inset-bottom, 0px) !important;
                  box-sizing: border-box !important;
                  min-height: calc(100lvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px)) !important;
                  height: calc(100lvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px)) !important;
                  background-color: #000000 !important;
                  background-image: none !important;
                  overflow: hidden !important;
                  transform: none !important;
                  will-change: auto !important;
                }
                #home .home-hero-photo {
                  position: absolute !important;
                  inset: 0 !important;
                  width: 100% !important;
                  height: 100% !important;
                  object-fit: cover !important;
                  object-position: center center !important;
                  z-index: 0 !important;
                  pointer-events: none !important;
                  transform: none !important;
                  will-change: auto !important;
                }
                #home-viewport-bleed {
                  display: none !important;
                }
                #service {
                  margin-top: 0 !important;
                  background: #ffffff !important;
                }
              `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  try {
                    if ('scrollRestoration' in history) {
                      history.scrollRestoration = 'manual';
                    }
                  } catch (e) {}
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
