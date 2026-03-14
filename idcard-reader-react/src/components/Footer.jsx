import './Footer.css';

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="6" fill="#2563eb"/>
    <rect x="4" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.5"/>
    <circle cx="9.5" cy="13.5" r="2.5" fill="white"/>
    <rect x="13.5" y="11" width="7" height="1.5" rx=".75" fill="white" fillOpacity=".8"/>
    <rect x="13.5" y="13.5" width="5" height="1.5" rx=".75" fill="white" fillOpacity=".5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <LogoIcon />
        IDCardReader
      </div>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#stack">Tech Stack</a>
        <a href="#getting-started">Get Started</a>
        <a href="https://github.com/tesseract-ocr/tesseract" target="_blank" rel="noreferrer">Tesseract Docs</a>
        <a href="http://www.emgu.com/" target="_blank" rel="noreferrer">Emgu CV</a>
      </div>
      <div className="footer-divider" />
      <p className="footer-copy">© 2024 IDCardReader. Open source under the MIT License.</p>
    </footer>
  );
}
