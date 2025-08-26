import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Yash Verma</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        <div style={{ 
          background: 'linear-gradient(180deg, #312e81 0%, #1e1b4b 0%, #0a0a0a 100%)',
          padding: '40px 0 35px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "'Orbitron', 'Space Grotesk', monospace",
              fontWeight: 700,
              fontSize: "2.5rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              margin: 0,
              textAlign: "center"
            }}>Resume</h1>
          </div>
        </div>
        
        <div style={{ padding: '40px 20px 120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <iframe
            src="/images/Resume.pdf"
            style={{
              width: '100%',
              height: '1200px',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              border: '1px solid #2a2a2a',
              backgroundColor: '#000000'
            }}
            title="Resume PDF"
          />
        </div>
      </div>
    </>
  );
} 