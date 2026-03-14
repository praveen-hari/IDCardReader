import './GettingStarted.css';

const steps = [
  { num: 1, title: 'Clone the repository',   desc: 'Use Git to download the project to your Windows machine.' },
  { num: 2, title: 'Open in Visual Studio',  desc: 'Open IDCardReader.sln in Visual Studio 2017 or later.' },
  { num: 3, title: 'Restore NuGet Packages', desc: 'Visual Studio will prompt you, or run nuget restore from the terminal.' },
  { num: 4, title: 'Build & Run',            desc: 'Press F5 to build and launch. Load an ID card image and click DoOCR.' },
];

export default function GettingStarted() {
  return (
    <section id="getting-started" className="gs-section">
      <div className="section-tag">Getting Started</div>
      <h2 className="section-title">Up and Running in Minutes</h2>
      <p className="section-sub">Clone, restore NuGet packages, and hit <strong>F5</strong> — that's all it takes.</p>

      <div className="gs-grid">
        <div className="steps-list">
          {steps.map(({ num, title, desc }) => (
            <div className="gs-step" key={num}>
              <div className="gs-num">{num}</div>
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <pre className="code-block">
            <span className="comment"># 1. Clone</span>{'\n'}
            <span className="cmd">git</span> <span className="arg">clone https://github.com/your-username/IDCardReader.git</span>{'\n'}
            <span className="cmd">cd</span> <span className="arg">IDCardReader</span>{'\n\n'}
            <span className="comment"># 2. Restore packages (CLI)</span>{'\n'}
            <span className="cmd">nuget</span> <span className="arg">restore IDCardReader.sln</span>{'\n\n'}
            <span className="comment"># 3. Build (MSBuild)</span>{'\n'}
            <span className="cmd">msbuild</span> <span className="arg">IDCardReader.sln /p:Configuration=Release</span>{'\n\n'}
            <span className="comment"># 4. Or just open in Visual Studio and press F5!</span>
          </pre>
          <p className="gs-prereqs">
            <strong>Prerequisites:</strong> Windows OS · Visual Studio 2017+ · .NET Framework · NuGet
          </p>
        </div>
      </div>
    </section>
  );
}
