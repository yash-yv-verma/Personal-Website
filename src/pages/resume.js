import Head from 'next/head';
import Link from 'next/link';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Yash Verma</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '32px 0' }}>
        <div style={{ width: '100%', maxWidth: 1000, background: '#fff', borderRadius: 16, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', padding: '24px 2vw', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: 100, 
              height: 100, 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: 16, 
              boxShadow: '0 2px 12px #6a82fb22',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 4px 20px #6a82fb44';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 2px 12px #6a82fb22';
            }}
            >
              YV
            </div>
          </Link>
          <h1 style={{ fontWeight: 800, fontSize: '2rem', margin: 0, marginBottom: 6, textAlign: 'center' }}>Yash Verma</h1>
          <div style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: 10, textAlign: 'center' }}>
            Computer Science & Mathematics of Data & Computing<br />
            UTSA Honors College, Class of 2026
          </div>
          <div style={{ width: '100%', marginBottom: 10, textAlign: 'center' }}>
            <a href="mailto:yashs.mbp@gmail.com" style={{ color: '#6a82fb', textDecoration: 'none', fontWeight: 500 }}>yashs.mbp@gmail.com</a> &nbsp;|&nbsp; Austin, TX, USA
          </div>
          <div style={{ width: '100%', marginBottom: 10, textAlign: 'center' }}>
            <a href="https://yash-verma.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fc5c7d', textDecoration: 'none', fontWeight: 500 }}>Website</a> &nbsp;|&nbsp;
            <a href="https://github.com/yash-yv-verma" target="_blank" rel="noopener noreferrer" style={{ color: '#6a82fb', textDecoration: 'none', fontWeight: 500 }}>GitHub</a> &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/-yv/" target="_blank" rel="noopener noreferrer" style={{ color: '#6a82fb', textDecoration: 'none', fontWeight: 500 }}>LinkedIn</a>
          </div>
          <div style={{ width: '100%', marginBottom: 18, textAlign: 'center' }}>
            <div style={{ fontWeight: 600, color: '#334155', marginBottom: 4 }}>Key Skills</div>
            <div style={{ color: '#64748b', fontSize: '0.98rem', display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
              <span style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 10px', margin: '2px 2px' }}>Microservices</span>
              <span style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 10px', margin: '2px 2px' }}>Cloud Computing</span>
              <span style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 10px', margin: '2px 2px' }}>AI/ML</span>
              <span style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 10px', margin: '2px 2px' }}>Quantum Computing</span>
              <span style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 10px', margin: '2px 2px' }}>Research</span>
            </div>
          </div>
          <p style={{ color: '#64748b', marginBottom: 18, fontSize: '1.08rem', textAlign: 'center', maxWidth: 500 }}>
            Welcome! You can view or download my latest resume below. If you have any questions or would like to connect, please reach out via email or LinkedIn.
          </p>
          <a
            href="/images/Resume.pdf"
            download="Yash_Verma_Resume.pdf"
            style={{
              background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)',
              color: '#fff',
              padding: '10px 28px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              marginBottom: 24,
              boxShadow: '0 2px 8px #6a82fb22',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
          >
            Download PDF
          </a>
          <div style={{ width: '100%', minHeight: 600, borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px #0001', background: '#f1f5f9', marginBottom: 8 }}>
            <iframe
              src="/images/Resume.pdf"
              style={{ width: '100%', height: '80vh', minHeight: 600, border: 'none', background: '#f1f5f9' }}
              title="Yash Verma Resume"
            />
            <div style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginTop: 12 }}>
              <noscript>
                PDF preview requires JavaScript. <a href="/images/Resume.pdf" download>Download the PDF</a>.
              </noscript>
              <span style={{ display: 'none' }}>
                If the PDF does not display, <a href="/images/Resume.pdf" download>download it here</a>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 