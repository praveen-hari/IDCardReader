const techs = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="3"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    name: 'Emgu CV',
    desc: '.NET wrapper for OpenCV. Handles image loading, resizing, Gaussian smoothing, and binary thresholding.',
    href: 'http://www.emgu.com/',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    name: 'Tesseract OCR',
    desc: "Google's open-source OCR engine using LSTM neural networks for high-accuracy text recognition (accessed via Emgu).",
    href: 'https://github.com/tesseract-ocr/tesseract',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    name: 'Windows Forms (.NET)',
    desc: 'Lightweight native desktop UI framework providing the form, controls, and event-driven interaction model.',
    href: 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/',
  },
];

export default function TechStack() {
  return (
    <section id="stack" style={{
      padding: '96px 6%',
      background: 'var(--gray-900)',
      color: 'var(--white)',
    }}>
      <div style={{
        display: 'inline-block',
        background: '#1e3a8a', color: '#93c5fd',
        fontSize: '.75rem', fontWeight: 700, letterSpacing: '.07em',
        textTransform: 'uppercase', padding: '.3rem .8rem', borderRadius: 6,
        marginBottom: '.9rem',
      }}>Tech Stack</div>

      <div style={{
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        fontWeight: 800, color: 'var(--white)', maxWidth: 580,
        lineHeight: 1.2, marginBottom: '1rem',
      }}>Built on Battle-Tested Libraries</div>

      <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: 520, marginBottom: '3rem' }}>
        IDCardReader stands on proven open-source foundations for image processing and text recognition.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 20,
      }}>
        {techs.map((t) => (
          <a
            key={t.name}
            href={t.href}
            target="_blank"
            rel="noreferrer"
            className="tech-card"
            style={{
              background: '#1f2937', border: '1px solid #374151',
              borderRadius: 'var(--radius)', padding: 24,
              display: 'flex', alignItems: 'flex-start', gap: 16,
              transition: 'border-color .2s',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: '#2563eb22', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {t.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.3rem', color: 'var(--white)' }}>
                {t.name}
              </h3>
              <p style={{ fontSize: '.85rem', color: '#9ca3af', lineHeight: 1.5 }}>
                {t.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
