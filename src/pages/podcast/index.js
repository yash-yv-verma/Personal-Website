import Head from 'next/head';

export default function Podcast() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Podcast by Yash Verma | Stay Tuned</title>
        <meta name="description" content="Podcast by Yash Verma. Stay tuned for insightful discussions, interviews, and more. Coming soon!" />
        <meta name="keywords" content="Yash Verma, Podcast, Technology, Interviews, Discussions, Coming Soon" />
        <meta name="author" content="Yash Verma" />
        <link rel="canonical" href="https://yash-verma.com/podcast/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yash-verma.com/podcast/" />
        <meta property="og:title" content="Podcast by Yash Verma | Coming Soon" />
        <meta property="og:description" content="Podcast by Yash Verma. Stay tuned for insightful discussions, interviews, and more. Coming soon!" />
        <meta property="og:image" content="https://yash-verma.com/images/homebg.jpeg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yash-verma.com/podcast/" />
        <meta property="twitter:title" content="Podcast by Yash Verma | Coming Soon" />
        <meta property="twitter:description" content="Podcast by Yash Verma. Stay tuned for insightful discussions, interviews, and more. Coming soon!" />
        <meta property="twitter:image" content="https://yash-verma.com/images/homebg.jpeg" />
        <style>{`
          /* Force rebuild for deployment sync */
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: linear-gradient(135deg, #101217 0%, #181a1f 100%);
            color: #23262e;
            font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
          }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            min-width: 100vw;
            flex-direction: column;
          }
          .coming-soon-title {
            font-size: 3.2rem;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 18px;
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            text-shadow: 0 2px 24px #0006;
            animation: glow 2s ease-in-out infinite alternate;
          }
          .coming-soon-message {
            font-size: 1.05rem;
            font-weight: 500;
            color: #b0b3ba;
            margin-bottom: 0;
            text-shadow: 0 1px 8px #0003;
            opacity: 0.85;
          }
          @keyframes glow {
            from { text-shadow: 0 0 8px #6a82fb44, 0 0 24px #fc5c7d22; }
            to { text-shadow: 0 0 24px #6a82fb88, 0 0 48px #fc5c7d44; }
          }
          @media (max-width: 600px) {
            .coming-soon-title { font-size: 2.1rem; }
            .coming-soon-message { font-size: 0.9rem; }
          }
        `}</style>
      </Head>
      <div className="coming-soon-title">Podcast</div>
      <div className="coming-soon-message">Coming Soon by <strong>Yash Verma</strong></div>
    </>
  );
} 