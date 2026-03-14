import './Hero.css';

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);

const IDCardPlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3"/>
    <circle cx="8.5" cy="10" r="1.5"/>
    <rect x="12" y="8" width="6" height="1.5" rx=".75"/>
    <rect x="12" y="10.5" width="4.5" height="1.5" rx=".75"/>
    <rect x="12" y="13" width="5" height="1.5" rx=".75"/>
  </svg>
);

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-badge">
        <svg width="8" height="8" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="5"/></svg>
        Open Source · Windows Desktop · .NET
      </div>

      <h1>Extract Text from <span>ID Cards</span><br/>Instantly with OCR</h1>

      <p>
        IDCardReader uses OpenCV image preprocessing and Tesseract OCR to accurately
        read and extract text from any ID card image — in seconds.
      </p>

      <div className="hero-actions">
        <a className="btn-primary" href="#getting-started">
          <DownloadIcon /> Download &amp; Get Started
        </a>
        <a className="btn-secondary" href="#how-it-works">
          <PlayIcon /> See How It Works
        </a>
      </div>

      {/* App window mockup */}
      <div className="preview-wrap">
        <div className="preview-bar">
          <span className="dot r" />
          <span className="dot y" />
          <span className="dot g" />
          <span className="preview-title">IDCardReader — Form1</span>
        </div>
        <div className="preview-body">
          {/* Left: image panel */}
          <div className="preview-panel">
            <div className="preview-label">Image Preview</div>
            <div className="preview-img-placeholder">
              <IDCardPlaceholder />
            </div>
            <div className="preview-controls">
              <span className="preview-btn">Browse Image</span>
              <div className="preview-slider-wrap">
                <span className="preview-slider-label">Threshold</span>
                <div className="preview-slider">
                  <div className="preview-slider-fill" />
                  <div className="preview-slider-thumb" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: OCR output panel */}
          <div className="preview-panel">
            <div className="preview-label">Extracted Text</div>
            <div className="preview-text-lines">
              {['full','highlight','medium','short','full','medium','highlight','short','full'].map((cls, i) => (
                <div key={i} className={`preview-line ${cls}`} />
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 12 }}>
              <span className="preview-btn">▶ DoOCR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
