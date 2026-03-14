import './HowItWorks.css';

const steps = [
  {
    num: 1,
    title: 'Load the Image',
    desc: 'Open any JPG, PNG, or JPEG using the BrowseImage dialog. A sample ID card is loaded automatically on startup.',
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
    <section id="how-it-works" className="how-section">
      <div className="section-tag">How It Works</div>
      <h2 className="section-title">From Image to Text in 4 Steps</h2>
      <p className="section-sub">Under the hood, the pipeline is straightforward — optimized for accuracy at each stage.</p>
      <div className="steps">
        {steps.map(({ num, title, desc }) => (
          <div className="step" key={num}>
            <div className="step-num">{num}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
