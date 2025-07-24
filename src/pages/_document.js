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
          <link rel="icon" href="/favicon.svg" />
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