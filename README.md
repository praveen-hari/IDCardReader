# IDCardReader
ID Card reader using Emgu and Tesseract OCR engine.

# Image processing:

We need to apply some image processing to the image before OCR the image, please refer the below link to improve the OCR accuracy by applying the image processing to the input image.
https://github.com/tesseract-ocr/tesseract/wiki/ImproveQuality

I am going to use the .Net library Emgu to apply image processing to the image, Emgu is a cross platform .Net wrapper to the OpenCV.
# Rescaling:

Tesseract works best on images which have a DPI of at least 300 dpi, so we need to rescale input image to get the accurate result.
imgResize = sourceImage.Resize(2, Inter.Linear);
Binarisation:


This is converting an image to black and white
img_gray = imgResize.Convert<Gray, Byte>().SmoothGaussian(5).ThresholdBinary(new Gray(trackBar1.Value), new Gray(255));


After Binarisation


# OCR the Image:

The Emgu has the built it API to call the tesseract OCR, so here I have utilized the API to apply the OCR to the image.

using Emgu.CV.OCR;

Initialize the OCR

_ocr = new Tesseract(Path.GetFullPath("../../Data/"), "eng", OcrEngineMode.TesseractLstmCombined);

Applying the OCR:

_ocr.SetImage(img_gray);
_ocr.Recognize();
string text = _ocr.GetUTF8Text();


