const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="3"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Real-time Image Preview',
    desc: 'See the binarized, preprocessed image instantly as you adjust the threshold slider — no need to re-run OCR each time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Adjustable Binarization',
    desc: 'Fine-tune the black-and-white threshold (0–225) to handle different ID card backgrounds, lighting conditions, and image quality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Automatic Preprocessing',
    desc: 'Images are automatically rescaled 2× and Gaussian-blurred before OCR, ensuring Tesseract receives clean, high-DPI input.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Instant Text Extraction',
    desc: <>Click <strong>DoOCR</strong> and the full recognized text is displayed in a scrollable panel, ready to copy and use.</>,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Browse Any Image',
    desc: <>Use the <strong>BrowseImage</strong> button to load any JPG, PNG, or JPEG file from your machine — or use the included sample ID card.</>,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Open Source & Extensible',
    desc: 'The full source code is available. Add new languages, swap preprocessing pipelines, or integrate into a larger .NET workflow.',
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '96px 6%', background: 'var(--gray-50)' }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--blue-lt)', color: 'var(--blue)',
        fontSize: '.75rem', fontWeight: 700, letterSpacing: '.07em',
        textTransform: 'uppercase', padding: '.3rem .8rem', borderRadius: 6,
        marginBottom: '.9rem',
      }}>Features</div>

      <div style={{
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        fontWeight: 800, color: 'var(--gray-900)', maxWidth: 580,
        lineHeight: 1.2, marginBottom: '1rem',
      }}>Everything You Need to Read ID Cards</div>

      <p style={{ fontSize: '1rem', color: 'var(--gray-600)', maxWidth: 520, marginBottom: '3rem' }}>
        A focused desktop tool built around accuracy, simplicity, and real-time feedback.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 24,
      }}>
        {features.map((f, i) => (
          <div key={i} className="feature-card" style={{
            background: 'var(--white)', borderRadius: 'var(--radius)',
            padding: 28, border: '1px solid var(--gray-200)',
            boxShadow: 'var(--shadow)', transition: 'transform .2s, box-shadow .2s',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'var(--blue-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem',
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '.5rem', color: 'var(--gray-900)' }}>
              {f.title}
            </h3>
            <p style={{ fontSize: '.9rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
