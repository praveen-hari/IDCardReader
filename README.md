# IDCardReader

**IDCardReader** is a Windows Forms desktop application that extracts text from ID card images using computer vision and OCR (Optical Character Recognition). It lets you load any ID card image, preprocess it (scale, blur, binarize) to maximize recognition accuracy, and then display the extracted text — all from a simple point-and-click interface.

---

## Features

- Load any ID card image (JPG, PNG, JPEG)
- Real-time image preview with adjustable binarization threshold
- Automatic image preprocessing to maximize OCR accuracy
- Displays extracted text instantly in the UI

---

## Tech Stack

| Library | Purpose |
|---|---|
| [Emgu CV](http://www.emgu.com/) (v3.3.0) | .NET wrapper for OpenCV — image processing |
| [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) | Text recognition engine (via Emgu) |
| [ZedGraph](https://github.com/ZedGraph/ZedGraph) | Charting library (included as a dependency) |
| Windows Forms (.NET Framework 4.5) | Desktop UI framework |

---

## How It Works

### 1. Load an Image
On startup, a default sample ID card (`Data/idcard.jpg`) is loaded automatically. You can also click **BrowseImage** to load your own image file.

### 2. Image Preprocessing
Before OCR is performed, the image goes through several processing steps to improve accuracy:

#### Rescaling
Tesseract performs best on images with at least 300 DPI. The image is scaled up 2× using linear interpolation:
```csharp
imgResize = sourceImage.Resize(2, Inter.Linear);
```

#### Smoothing
A Gaussian blur is applied to reduce noise:
```csharp
.SmoothGaussian(5)
```

#### Binarization (Black & White Conversion)
The image is converted to black and white using a threshold value. You can adjust this threshold using the **Threshold** trackbar in the UI to get the best result for your image:
```csharp
img_gray = imgResize.Convert<Gray, Byte>()
                    .SmoothGaussian(5)
                    .ThresholdBinary(new Gray(trackBar1.Value), new Gray(255));
```
> If the threshold is set to 0, binarization is skipped and only smoothing is applied.

For more tips on improving OCR quality, see the [Tesseract documentation](https://github.com/tesseract-ocr/tesseract/wiki/ImproveQuality).

### 3. OCR
The preprocessed image is passed to the Tesseract engine, which recognizes and returns the text:
```csharp
// Initialize
_ocr = new Tesseract(Path.GetFullPath("../../Data/"), "eng", OcrEngineMode.TesseractLstmCombined);

// Run OCR
_ocr.SetImage(img_gray);
_ocr.Recognize();
string text = _ocr.GetUTF8Text();
```
The result is displayed in the text panel on the right side of the window.

---

## UI Overview

| Control | Description |
|---|---|
| **BrowseImage** button | Opens a file dialog to load a custom image |
| **Threshold** trackbar | Adjusts the binarization threshold (0–225); preview updates in real time |
| **Image preview** | Displays the current image with the selected threshold applied |
| **DoOCR** button | Runs OCR on the current image and shows the extracted text |
| **Text panel** | Displays the raw text extracted by Tesseract |

---

## Project Structure

```
IDCardReader/
├── Data/
│   ├── idcard.jpg          # Sample ID card image
│   └── tessdata/           # Tesseract language data files (English)
├── Form1.cs                # Main form logic (image processing & OCR)
├── Form1.Designer.cs       # Auto-generated UI layout
├── Program.cs              # Application entry point
├── index.html              # Standalone project landing/demo page
├── IDCardReader.csproj     # Project file (.NET Framework 4.5)
└── packages.config         # NuGet package dependencies
```

---

## Prerequisites

- Windows OS
- Visual Studio 2017 or later
- .NET Framework 4.5
- NuGet packages (restored automatically):
  - `EMGU.CV` v3.3.0
  - `Emgu.CV.UI`
  - `ZedGraph` v5.1.5

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/praveen-hari/IDCardReader.git
   ```
2. Open `IDCardReader.sln` in Visual Studio.
3. Restore NuGet packages (Visual Studio will prompt you, or run `nuget restore`).
4. Build and run the project (`F5`).
5. Use **BrowseImage** to load an ID card image, adjust the **Threshold** slider if needed, then click **DoOCR** to extract the text.


