const FooterLogo = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="6" fill="#2563eb"/>
    <rect x="4" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.5"/>
    <circle cx="9.5" cy="13.5" r="2.5" fill="white"/>
    <rect x="13.5" y="11" width="7" height="1.5" rx=".75" fill="white" fillOpacity=".8"/>
    <rect x="13.5" y="13.5" width="5" height="1.5" rx=".75" fill="white" fillOpacity=".5"/>
  </svg>
);

const footerLinks = [
  ['#features', 'Features'],
  ['#how-it-works', 'How It Works'],
  ['#stack', 'Tech Stack'],
  ['#getting-started', 'Get Started'],
  ['https://github.com/tesseract-ocr/tesseract', 'Tesseract Docs'],
  ['http://www.emgu.com/', 'Emgu CV'],
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--gray-900)', color: '#9ca3af',
      padding: '48px 6% 36px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)',
      }}>
        <FooterLogo />
        IDCardReader
      </div>

      <div style={{ display: 'flex', gap: '2rem', fontSize: '.875rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {footerLinks.map(([href, label]) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="footer-link"
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ width: '100%', height: 1, background: '#374151' }}/>

      <p style={{ fontSize: '.8rem' }}>
        © {new Date().getFullYear()} IDCardReader. Open source under the MIT License.
      </p>
    </footer>
  );
}
