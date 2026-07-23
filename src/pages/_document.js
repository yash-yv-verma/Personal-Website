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
          
          {/* Font Awesome */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          
          {/* Meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
          {/* Do not set theme-color — iOS Safari paints it as an opaque notch bar on first load */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="preload" as="image" href="/images/homebg.jpeg" />

          <style
            dangerouslySetInnerHTML={{
              __html: `
                html, body {
                  margin: 0;
                  padding: 0;
                  background-color: #000000;
                }
                /* Full-viewport photo layer — covers notch from first paint */
                #home-viewport-bleed {
                  position: fixed !important;
                  top: 0 !important;
                  left: 0 !important;
                  right: 0 !important;
                  bottom: 0 !important;
                  width: 100% !important;
                  width: 100vw !important;
                  height: 100% !important;
                  height: 100vh !important;
                  height: 100dvh !important;
                  height: 100lvh !important;
                  height: -webkit-fill-available !important;
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
                  background: transparent;
                }
              `,
            }}
          />
        </Head>
        <body>
          {/* Inject bleed BEFORE React so notch/photo are correct on first paint */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  if (typeof window === 'undefined') return;
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  var path = window.location.pathname || '/';
                  if (path !== '/' && path !== '') return;

                  document.documentElement.classList.add('home-hero-active');
                  document.body.classList.add('home-hero-active');

                  if (!document.getElementById('home-viewport-bleed')) {
                    var el = document.createElement('div');
                    el.id = 'home-viewport-bleed';
                    el.setAttribute('aria-hidden', 'true');
                    document.body.insertBefore(el, document.body.firstChild);
                  }
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
