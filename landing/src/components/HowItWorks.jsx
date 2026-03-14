const steps = [
  {
    num: 1,
    title: 'Load the Image',
    desc: <>Open any JPG, PNG, or JPEG using the <strong>BrowseImage</strong> dialog. A sample ID card is loaded automatically on startup.</>,
  },
  {
    num: 2,
    title: 'Rescale & Blur',
    desc: 'The image is scaled up 2× with linear interpolation so Tesseract gets at least 300 DPI, then a Gaussian blur removes sensor noise.',
  },
  {
    num: 3,
    title: 'Binarize',
    desc: 'A configurable threshold converts the image to pure black and white, maximizing contrast between text and background.',
  },
  {
    num: 4,
    title: 'OCR & Display',
    desc: "The preprocessed image is passed to Tesseract's LSTM combined engine. The recognized UTF-8 text is rendered in the output panel.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '96px 6%' }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--blue-lt)', color: 'var(--blue)',
        fontSize: '.75rem', fontWeight: 700, letterSpacing: '.07em',
        textTransform: 'uppercase', padding: '.3rem .8rem', borderRadius: 6,
        marginBottom: '.9rem',
      }}>How It Works</div>

      <div style={{
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        fontWeight: 800, color: 'var(--gray-900)', maxWidth: 580,
        lineHeight: 1.2, marginBottom: '1rem',
      }}>From Image to Text in 4 Steps</div>

      <p style={{ fontSize: '1rem', color: 'var(--gray-600)', maxWidth: 520, marginBottom: '3rem' }}>
        Under the hood, the pipeline is straightforward — optimized for accuracy at each stage.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 32,
      }}>
        {steps.map((s) => (
          <div key={s.num}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'var(--blue)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', fontWeight: 800,
              marginBottom: '1rem',
            }}>
              {s.num}
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem', color: 'var(--gray-900)' }}>
              {s.title}
            </h3>
            <p style={{ fontSize: '.875rem', color: 'var(--gray-600)' }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
