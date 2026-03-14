import './Stats.css';

const stats = [
  { number: '2×',   label: 'Image upscaling for better accuracy' },
  { number: '3',    label: 'Preprocessing steps (resize, blur, binarize)' },
  { number: 'LSTM', label: 'Tesseract combined OCR engine mode' },
  { number: '3',    label: 'Supported formats: JPG, PNG, JPEG' },
];

export default function Stats() {
  return (
    <div className="stats">
      {stats.map(({ number, label }) => (
        <div className="stat" key={label}>
          <div className="stat-number">{number}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
