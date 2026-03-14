const IDCardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="6" fill="#2563eb"/>
    <rect x="4" y="7" width="20" height="14" rx="3" fill="white" fillOpacity=".2"/>
    <rect x="4" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.5"/>
    <circle cx="9.5" cy="13.5" r="2.5" fill="white"/>
    <rect x="13.5" y="11" width="7" height="1.5" rx=".75" fill="white" fillOpacity=".8"/>
    <rect x="13.5" y="13.5" width="5" height="1.5" rx=".75" fill="white" fillOpacity=".5"/>
    <rect x="13.5" y="16" width="6" height="1.5" rx=".75" fill="white" fillOpacity=".5"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633
      17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838
      1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3
      1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
      3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805
      5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0
      .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 6%', height: 64,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--gray-200)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: '1.15rem', fontWeight: 700, color: 'var(--gray-900)',
      }}>
        <IDCardIcon />
        IDCardReader
      </div>

      <div style={{
        display: 'flex', gap: '2rem', fontSize: '.9rem', color: 'var(--gray-600)',
      }} className="nav-links">
        {[
          ['#features', 'Features'],
          ['#how-it-works', 'How It Works'],
          ['#stack', 'Tech Stack'],
          ['#getting-started', 'Get Started'],
        ].map(([href, label]) => (
          <a key={href} href={href} className="nav-link">{label}</a>
        ))}
      </div>

      <a
        href="https://github.com/praveen-hari/IDCardReader"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--blue)', color: 'var(--white)',
          padding: '.45rem 1.1rem', borderRadius: 8,
          fontSize: '.875rem', fontWeight: 600,
          transition: 'background .2s',
        }}
        className="nav-cta"
      >
        <GitHubIcon />
        View on GitHub
      </a>
    </nav>
  );
}
