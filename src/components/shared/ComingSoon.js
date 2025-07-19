export default function ComingSoon({ 
  title = "Coming Soon", 
  message = "Stay tuned for updates!",
  author = "Yash Verma",
  gradientColors = ["#6a82fb", "#fc5c7d"],
  backgroundColor = "linear-gradient(135deg, #101217 0%, #181a1f 100%)"
}) {
  return (
    <>
      <div className="coming-soon-container">
        <div className="coming-soon-title">{title}</div>
        <div className="coming-soon-message">
          {message} {author && <strong>{author}</strong>}
        </div>
      </div>
      
      <style jsx global>{`
        html, body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          overflow: hidden !important;
          background: ${backgroundColor} !important;
          color: #23262e !important;
          font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif !important;
        }

        body {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          min-height: 100vh !important;
          min-width: 100vw !important;
          flex-direction: column !important;
        }
      `}</style>

      <style jsx>{`
        .coming-soon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .coming-soon-title {
          font-size: 3.2rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 18px;
          background: linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%);
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
          from { text-shadow: 0 0 8px ${gradientColors[0]}44, 0 0 24px ${gradientColors[1]}22; }
          to { text-shadow: 0 0 24px ${gradientColors[0]}88, 0 0 48px ${gradientColors[1]}44; }
        }

        @media (max-width: 600px) {
          .coming-soon-title { font-size: 2.1rem; }
          .coming-soon-message { font-size: 0.9rem; }
        }
      `}</style>
    </>
  );
} 