import Head from 'next/head';

export default function SEOHead({ 
  title = "Yash Verma | Computer Science & Mathematics | AI, Software Engineering, Quantum Computing",
  description = "Yash Verma | Computer Science & Mathematics student at UTSA. AI, software engineering, and quantum computing enthusiast. Explore my projects, research, and experience.",
  canonical = "https://yash-verma.com/",
  ogImage = "https://yash-verma.com/images/acm.jpg",
  keywords = "Yash Verma, UTSA, Computer Science, Mathematics, AI, Software Engineering, Quantum Computing, Research, Resume, Portfolio",
  twitterSite = "@yashyvverma"
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="google-site-verification" content="fWH8xmeEzrfW56pmObDDENPOhvNHzvVaJUzJxGHtKW8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="author" content="Yash Verma" />
      <meta name="copyright" content="2025, Yash Verma" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.svg" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Yash Verma" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterSite} />
      
      {/* JSON-LD Person Schema for Google Knowledge Panel */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yash Verma",
          "url": "https://yash-verma.com/",
          "image": "https://yash-verma.com/images/acm.jpg",
          "jobTitle": "Student, Developer, Researcher",
          "worksFor": {
            "@type": "Organization",
            "name": "The University of Texas at San Antonio"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "The University of Texas at San Antonio"
          },
          "sameAs": [
            "https://github.com/yash-yv-verma",
            "https://www.linkedin.com/in/-yv/"
          ]
        })}
      </script>
    </Head>
  );
} 