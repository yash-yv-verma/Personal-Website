import Link from 'next/link';

export function CourseTileGrid({ children }) {
  return (
    <>
      <div className="course-tile-grid">{children}</div>
      <style jsx>{`
        .course-tile-grid {
          display: grid;
          width: 100%;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
        }
      `}</style>
    </>
  );
}

export default function CourseTile({ href, external = false, children }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const content = (
    <>
      <span className="course-tile-body">{children}</span>
      <span className="course-tile-cue" aria-hidden="true">Open</span>
    </>
  );

  return (
    <>
      {external ? (
        <a className="course-tile" href={href} {...linkProps}>
          {content}
        </a>
      ) : (
        <Link className="course-tile" href={href}>
          {content}
        </Link>
      )}
      <style jsx global>{`
        a.course-tile {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
          width: 100%;
          min-height: 168px;
          height: 100%;
          box-sizing: border-box;
          padding: clamp(22px, 4vw, 36px);
          border-radius: 16px;
          text-decoration: none !important;
          color: #ffffff !important;
          cursor: pointer;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
          -webkit-tap-highlight-color: transparent;
        }

        a.course-tile::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 20%, rgba(255, 255, 255, 0.16) 48%, transparent 72%);
          transform: translateX(-120%);
          transition: transform 0.45s ease;
          pointer-events: none;
        }

        a.course-tile:hover,
        a.course-tile:focus-visible {
          transform: translateY(-6px);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.06));
          border-color: rgba(255, 255, 255, 0.34);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.28);
          outline: none;
        }

        a.course-tile:hover::before,
        a.course-tile:focus-visible::before {
          transform: translateX(120%);
        }

        a.course-tile:active {
          transform: translateY(-1px) scale(0.985);
        }

        a.course-tile .course-tile-body {
          position: relative;
          z-index: 1;
        }

        a.course-tile .course-tile-cue {
          position: relative;
          z-index: 1;
          align-self: flex-start;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          transition: color 0.22s ease, transform 0.22s ease;
        }

        a.course-tile:hover .course-tile-cue,
        a.course-tile:focus-visible .course-tile-cue {
          color: #ffffff;
          transform: translateX(4px);
        }

        @media (hover: none) {
          a.course-tile:active {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.06));
            border-color: rgba(255, 255, 255, 0.34);
          }
        }
      `}</style>
    </>
  );
}
