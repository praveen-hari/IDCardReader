const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);

const IDCardPreviewIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white"
    strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3"/>
    <circle cx="8.5" cy="10" r="1.5"/>
    <rect x="12" y="8" width="6" height="1.5" rx=".75"/>
    <rect x="12" y="10.5" width="4.5" height="1.5" rx=".75"/>
    <rect x="12" y="13" width="5" height="1.5" rx=".75"/>
  </svg>
);

export default function Hero() {
  return (
    <header style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      padding: '100px 6% 80px',
      background: 'linear-gradient(160deg, var(--blue-lt) 0%, var(--white) 55%)',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'var(--blue-lt)', color: 'var(--blue)',
        border: '1px solid #bfdbfe', borderRadius: 999,
        padding: '.3rem .9rem', fontSize: '.8rem', fontWeight: 600,
        marginBottom: '1.5rem', letterSpacing: '.03em',
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <circle cx="6" cy="6" r="5"/>
        </svg>
        Open Source · Windows Desktop · .NET
      </div>

      <h1 style={{
        fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
        fontWeight: 800, lineHeight: 1.12, color: 'var(--gray-900)',
        maxWidth: 760, marginBottom: '1.25rem',
      }}>
        Extract Text from <span style={{ color: 'var(--blue)' }}>ID Cards</span>
        <br/>Instantly with OCR
      </h1>

      <p style={{
        fontSize: '1.15rem', color: 'var(--gray-600)',
        maxWidth: 560, marginBottom: '2.5rem',
      }}>
        IDCardReader uses OpenCV image preprocessing and Tesseract OCR to accurately read
        and extract text from any ID card image — in seconds.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#getting-started" className="btn-primary">
          <DownloadIcon />
          Download &amp; Get Started
        </a>
        <a href="#how-it-works" className="btn-secondary">
          <PlayIcon />
          See How It Works
        </a>
      </div>

      {/* App window preview */}
      <div style={{
        margin: '64px auto 0',
        maxWidth: 900, width: '90%',
        borderRadius: 16, overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,.15)',
        border: '1px solid var(--gray-200)',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'var(--gray-100)', padding: '10px 16px',
          display: 'flex', alignItems: 'center', gap: 6,
          borderBottom: '1px solid var(--gray-200)',
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }}/>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }}/>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }}/>
          <span style={{ margin: '0 auto', fontSize: '.75rem', color: 'var(--gray-600)', fontWeight: 500 }}>
            IDCardReader — Form1
          </span>
        </div>

        {/* Window body */}
        <div style={{
          background: '#1e2637', padding: '32px 28px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, minHeight: 280,
        }} className="preview-body">
          {/* Image panel */}
          <div style={{
            background: '#2a3347', borderRadius: 10, padding: 16,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ fontSize: '.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600 }}>
              Image Preview
            </div>
            <div style={{
              flex: 1, background: '#374151', borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 140,
              opacity: .4,
            }}>
              <IDCardPreviewIcon />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                background: 'var(--blue)', color: 'var(--white)',
                border: 'none', borderRadius: 6, padding: '6px 14px',
                fontSize: '.75rem', fontWeight: 600, cursor: 'pointer',
              }}>Browse Image</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                <span style={{ fontSize: '.7rem', color: '#94a3b8' }}>Threshold</span>
                <div style={{ flex: 1, height: 4, background: '#4b5563', borderRadius: 2, position: 'relative' }}>
                  <div style={{ width: '45%', height: '100%', background: 'var(--blue)', borderRadius: 2 }}/>
                  <div style={{
                    width: 12, height: 12, background: 'var(--white)', borderRadius: '50%',
                    position: 'absolute', top: '50%', transform: 'translate(-50%,-50%)', left: '45%',
                    boxShadow: '0 1px 4px rgba(0,0,0,.4)',
                  }}/>
                </div>
              </div>
            </div>
          </div>

          {/* OCR output panel */}
          <div style={{
            background: '#2a3347', borderRadius: 10, padding: 16,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ fontSize: '.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600 }}>
              Extracted Text
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { width: '100%', bg: '#374151' },
                { width: '88%',  bg: '#3b5998' },
                { width: '78%',  bg: '#374151' },
                { width: '55%',  bg: '#374151' },
                { width: '100%', bg: '#374151' },
                { width: '78%',  bg: '#374151' },
                { width: '88%',  bg: '#3b5998' },
                { width: '55%',  bg: '#374151' },
                { width: '100%', bg: '#374151' },
              ].map((line, i) => (
                <div key={i} style={{ height: 10, background: line.bg, borderRadius: 4, width: line.width }}/>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 12 }}>
              <span style={{
                background: 'var(--blue)', color: 'var(--white)',
                borderRadius: 6, padding: '6px 14px',
                fontSize: '.75rem', fontWeight: 600, display: 'inline-block',
              }}>▶ DoOCR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
