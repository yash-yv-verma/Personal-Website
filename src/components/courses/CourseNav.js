import Link from 'next/link';

export default function CourseNav({ backHref, backLabel, previous, next }) {
  return (
    <>
      <nav className="course-nav" aria-label="Course navigation">
        <Link className="course-nav-arrow" href={backHref}>
          <span aria-hidden="true">←</span>
          <span>{backLabel}</span>
        </Link>
        {(previous || next) && (
          <div className="course-nav-sides">
            {previous ? (
              <Link className="course-nav-arrow" href={previous.href}>
                <span aria-hidden="true">←</span>
                <span>{previous.label}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="course-nav-arrow course-nav-next" href={next.href}>
                <span>{next.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        )}
      </nav>
      <style jsx global>{`
        .course-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 22px;
        }

        .course-nav-sides {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        a.course-nav-arrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          max-width: 100%;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none !important;
          color: #ffffff !important;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        a.course-nav-arrow:hover,
        a.course-nav-arrow:focus-visible {
          transform: translateY(-2px);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
          border-color: rgba(255, 255, 255, 0.36);
          outline: none;
        }

        a.course-nav-next {
          margin-left: auto;
        }

        @media (max-width: 640px) {
          .course-nav-sides {
            flex-direction: column;
          }

          a.course-nav-next {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
}
