# IDCardReader — React Landing Page

A modern React landing page for the [IDCardReader](https://github.com/praveen-hari/IDCardReader) desktop application, built with [Vite](https://vitejs.dev/) and React.

## Features

- **Navbar** — sticky navigation with smooth-scroll anchor links
- **Hero** — headline, CTA buttons, and a mock app window preview
- **Stats bar** — key metrics about the OCR pipeline
- **Features** — card grid highlighting all app capabilities
- **How It Works** — 4-step numbered pipeline explanation
- **Tech Stack** — Emgu CV, Tesseract OCR, and Windows Forms cards
- **Getting Started** — step-by-step guide with a syntax-highlighted code block
- **Footer** — logo, links, and copyright

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI library |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── TechStack.jsx
│   │   ├── GettingStarted.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
