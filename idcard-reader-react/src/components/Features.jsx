import './Features.css';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="3"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Real-time Image Preview',
    desc: 'See the binarized, preprocessed image instantly as you adjust the threshold slider — no need to re-run OCR each time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Adjustable Binarization',
    desc: 'Fine-tune the black-and-white threshold (0–225) to handle different ID card backgrounds, lighting conditions, and image quality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Automatic Preprocessing',
    desc: 'Images are automatically rescaled 2× and Gaussian-blurred before OCR, ensuring Tesseract receives clean, high-DPI input.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Instant Text Extraction',
    desc: 'Click DoOCR and the full recognized text is displayed in a scrollable panel, ready to copy and use.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Browse Any Image',
    desc: 'Use the BrowseImage button to load any JPG, PNG, or JPEG file from your machine — or use the included sample ID card.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Open Source & Extensible',
    desc: 'The full source code is available. Add new languages, swap preprocessing pipelines, or integrate into a larger .NET workflow.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="section-tag">Features</div>
      <h2 className="section-title">Everything You Need to Read ID Cards</h2>
      <p className="section-sub">A focused desktop tool built around accuracy, simplicity, and real-time feedback.</p>
      <div className="features-grid">
        {features.map(({ icon, title, desc }) => (
          <div className="feature-card" key={title}>
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
