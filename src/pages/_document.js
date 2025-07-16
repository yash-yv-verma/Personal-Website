import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Global Stylesheets */}
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/linea.css" />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/tooplate-style.css" />
        <link rel="stylesheet" href="/css/mobile-fixes.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 