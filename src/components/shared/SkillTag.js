export default function SkillTag({ skill }) {
  return (
    <button className="skill">
      <h6>{skill}</h6>
      <style jsx>{`
        .skill {
          background: #f0f6ff;
          color: #303F9F;
          border: 1px solid #dbeafe;
          border-radius: 2em;
          font-size: 0.95em;
          padding: 2px 12px;
          margin: 0;
          font-weight: 600;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .skill:hover {
          background: #303F9F;
          color: #fff;
          border-color: #303F9F;
        }
        .skill h6 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
      `}</style>
    </button>
  );
} 