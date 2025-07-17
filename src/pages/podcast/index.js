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
        <link rel="stylesheet" href="/css/podcast.css" />
      </Head>
      <div className="coming-soon-title">Podcast</div>
      <div className="coming-soon-message">Coming Soon by <strong>Yash Verma</strong></div>
    </>
  );
} 