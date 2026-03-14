const gettingStartedSteps = [
  {
    num: 1,
    title: 'Clone the repository',
    desc: 'Use Git to download the project to your Windows machine.',
  },
  {
    num: 2,
    title: 'Open in Visual Studio',
    desc: <>Open <code>IDCardReader.sln</code> in Visual Studio 2017 or later.</>,
  },
  {
    num: 3,
    title: 'Restore NuGet Packages',
    desc: <>Visual Studio will prompt you, or run <code>nuget restore</code> from the terminal.</>,
  },
  {
    num: 4,
    title: 'Build & Run',
    desc: <>Press <strong>F5</strong> to build and launch. Load an ID card image and click <strong>DoOCR</strong>.</>,
  },
];

const codeLines = [
  { type: 'comment', text: '# 1. Clone' },
  { type: 'cmd', text: 'git ', arg: 'clone https://github.com/praveen-hari/IDCardReader.git' },
  { type: 'cmd', text: 'cd ',  arg: 'IDCardReader' },
  { type: 'empty' },
  { type: 'comment', text: '# 2. Restore packages (CLI)' },
  { type: 'cmd', text: 'nuget ', arg: 'restore IDCardReader.sln' },
  { type: 'empty' },
  { type: 'comment', text: '# 3. Build (MSBuild)' },
  { type: 'cmd', text: 'msbuild ', arg: 'IDCardReader.sln /p:Configuration=Release' },
  { type: 'empty' },
  { type: 'comment', text: '# 4. Or just open in Visual Studio and press F5!' },
];

export default function GettingStarted() {
  return (
    <section id="getting-started" style={{ padding: '96px 6%' }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--blue-lt)', color: 'var(--blue)',
        fontSize: '.75rem', fontWeight: 700, letterSpacing: '.07em',
        textTransform: 'uppercase', padding: '.3rem .8rem', borderRadius: 6,
        marginBottom: '.9rem',
      }}>Getting Started</div>

      <div style={{
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        fontWeight: 800, color: 'var(--gray-900)', maxWidth: 580,
        lineHeight: 1.2, marginBottom: '1rem',
      }}>Up and Running in Minutes</div>

      <p style={{ fontSize: '1rem', color: 'var(--gray-600)', maxWidth: 520, marginBottom: '3rem' }}>
        Clone, restore NuGet packages, and hit <strong>F5</strong> — that&apos;s all it takes.
      </p>

      <div className="gs-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start',
      }}>
        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 640 }}>
          {gettingStartedSteps.map((s) => (
            <div key={s.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 32, height: 32, flexShrink: 0,
                background: 'var(--blue)', color: 'var(--white)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '.85rem', fontWeight: 700, marginTop: 2,
              }}>
                {s.num}
              </div>
              <div>
                <h4 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.25rem', color: 'var(--gray-900)' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '.875rem', color: 'var(--gray-600)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Code block */}
        <div>
          <pre style={{
            background: 'var(--gray-900)', color: '#e2e8f0',
            borderRadius: 'var(--radius)', padding: '24px 28px',
            fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
            fontSize: '.875rem', lineHeight: 1.8,
            overflowX: 'auto', margin: 0,
            border: '1px solid #374151',
          }}>
            {codeLines.map((line, i) => {
              if (line.type === 'empty') return <br key={i} />;
              if (line.type === 'comment') return (
                <span key={i} style={{ color: '#6b7280', display: 'block' }}>{line.text}</span>
              );
              return (
                <span key={i} style={{ display: 'block' }}>
                  <span style={{ color: '#34d399' }}>{line.text}</span>
                  <span style={{ color: '#93c5fd' }}>{line.arg}</span>
                </span>
              );
            })}
          </pre>
          <p style={{ marginTop: '1rem', fontSize: '.85rem', color: 'var(--gray-600)' }}>
            <strong>Prerequisites:</strong> Windows OS · Visual Studio 2017+ · .NET Framework · NuGet
          </p>
        </div>
      </div>
    </section>
  );
}
