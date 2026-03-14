import './TechStack.css';

const techs = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="3"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Emgu CV',
    desc: '.NET wrapper for OpenCV. Handles image loading, resizing, Gaussian smoothing, and binary thresholding.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: 'Tesseract OCR',
    desc: "Google's open-source OCR engine using LSTM neural networks for high-accuracy text recognition (accessed via Emgu).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Windows Forms (.NET)',
    desc: 'Lightweight native desktop UI framework providing the form, controls, and event-driven interaction model.',
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="tech-section">
      <div className="section-tag tech-tag">Tech Stack</div>
      <h2 className="section-title tech-title">Built on Battle-Tested Libraries</h2>
      <p className="section-sub tech-sub">IDCardReader stands on proven open-source foundations for image processing and text recognition.</p>
      <div className="tech-grid">
        {techs.map(({ icon, title, desc }) => (
          <div className="tech-card" key={title}>
            <div className="tech-badge">{icon}</div>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
