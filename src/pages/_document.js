import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Stylesheets */}
          <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/linea.css" />
          <link rel="stylesheet" href="/css/ionicons.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/tooplate-style.css" />
          <link rel="stylesheet" href="/css/mobile-fixes.css" />

          {/* Google Fonts */}
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
          {/* No theme-color — iOS paints it as an opaque notch bar on first load */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="preload" as="image" href="/images/homebg.jpeg" />

          {/*
            Critical first-paint CSS.
            The html.home-hero-active background is what fills the iOS notch on load
            (fixed layers alone often stay black until the user scrolls).
          */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                html, body {
                  margin: 0;
                  padding: 0;
                  background-color: #000000;
                }
                html.home-hero-active {
                  background-color: #000000 !important;
                  background-image: url('/images/homebg.jpeg') !important;
                  background-size: cover !important;
                  background-position: center center !important;
                  background-repeat: no-repeat !important;
                  background-attachment: scroll !important;
                }
                body.home-hero-active {
                  background-color: transparent !important;
                  background-image: none !important;
                }
                /* Fixed layer: extend INTO safe areas (notch + home indicator) */
                #home-viewport-bleed {
                  position: fixed !important;
                  top: calc(-1 * env(safe-area-inset-top, 0px) - 2px) !important;
                  right: calc(-1 * env(safe-area-inset-right, 0px) - 2px) !important;
                  bottom: calc(-1 * env(safe-area-inset-bottom, 0px) - 2px) !important;
                  left: calc(-1 * env(safe-area-inset-left, 0px) - 2px) !important;
                  width: auto !important;
                  height: auto !important;
                  min-width: 100vw !important;
                  min-height: calc(100lvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px) + 4px) !important;
                  z-index: 0 !important;
                  pointer-events: none !important;
                  background-color: #000000 !important;
                  background-image: url('/images/homebg.jpeg') !important;
                  background-size: cover !important;
                  background-position: center center !important;
                  background-repeat: no-repeat !important;
                  transform: none !important;
                }
                #__next {
                  position: relative;
                  z-index: 1;
                  background: transparent !important;
                }
                /* Hero spacer: transparent, flush into next section (no black gap) */
                #home {
                  background: transparent !important;
                  background-image: none !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  min-height: 100svh !important;
                  min-height: 100dvh !important;
                  min-height: 100lvh !important;
                  height: 100svh !important;
                  height: 100dvh !important;
                  height: 100lvh !important;
                }
                #service {
                  margin-top: 0 !important;
                  background: #ffffff !important;
                }
              `,
            }}
          />

          {/* MUST run in <head> so html.home-hero-active exists before first paint */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  try {
                    if (typeof location === 'undefined') return;
                    if ('scrollRestoration' in history) {
                      history.scrollRestoration = 'manual';
                    }
                    var path = location.pathname || '/';
                    if (path !== '/' && path !== '') return;
                    document.documentElement.classList.add('home-hero-active');
                  } catch (e) {}
                })();
              `,
            }}
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  try {
                    var path = location.pathname || '/';
                    if (path !== '/' && path !== '') return;
                    document.body.classList.add('home-hero-active');
                    if (!document.getElementById('home-viewport-bleed')) {
                      var el = document.createElement('div');
                      el.id = 'home-viewport-bleed';
                      el.setAttribute('aria-hidden', 'true');
                      document.body.insertBefore(el, document.body.firstChild);
                    }
                  } catch (e) {}
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
