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
          {/* No theme-color: on iOS Safari it paints an opaque bar in the notch on first paint.
              Content only shows through after scroll. Let the page background fill that area. */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="icon" href="/favicon.svg" />

          {/* First-paint homepage: photo on <html> BEFORE React hydrates (fixes black notch) */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                html {
                  background-color: #000000;
                }
              `,
            }}
          />
          
          {/* Disable scroll restoration to ensure pages always start at top */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  if (typeof window === 'undefined') return;
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  // Homepage only: paint homebg on <html> immediately so the notch
                  // shows the photo from the first frame (not after scroll / hydration).
                  var path = window.location.pathname || '/';
                  if (path === '/' || path === '') {
                    var html = document.documentElement;
                    html.classList.add('home-hero-active');
                    html.style.backgroundColor = '#000000';
                    html.style.backgroundImage = "url('/images/homebg.jpeg')";
                    html.style.backgroundSize = 'cover';
                    html.style.backgroundPosition = 'center center';
                    html.style.backgroundRepeat = 'no-repeat';
                    if (document.body) {
                      document.body.classList.add('home-hero-active');
                      document.body.style.backgroundColor = 'transparent';
                      document.body.style.backgroundImage = 'none';
                    } else {
                      document.addEventListener('DOMContentLoaded', function () {
                        document.body.classList.add('home-hero-active');
                        document.body.style.backgroundColor = 'transparent';
                        document.body.style.backgroundImage = 'none';
                      });
                    }
                  }
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