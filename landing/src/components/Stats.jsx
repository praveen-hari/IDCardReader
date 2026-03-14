const stats = [
  { number: '2×',  label: 'Image upscaling for better accuracy' },
  { number: '3',   label: 'Preprocessing steps (resize, blur, binarize)' },
  { number: 'LSTM',label: 'Tesseract combined OCR engine mode' },
  { number: '3',   label: 'Supported formats: JPG, PNG, JPEG' },
];

export default function Stats() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
      borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)',
    }}>
      {stats.map((s, i) => (
        <div key={i} className="stat-item" style={{
          flex: 1, minWidth: 200, padding: '2.5rem 2rem', textAlign: 'center',
          borderRight: i < stats.length - 1 ? '1px solid var(--gray-200)' : 'none',
        }}>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>
            {s.number}
          </div>
          <div style={{ fontSize: '.875rem', color: 'var(--gray-600)', marginTop: '.4rem' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
