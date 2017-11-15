using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Emgu.CV;
using Emgu.CV.CvEnum;
using Emgu.CV.Structure;
using Emgu.CV.UI;
using Emgu.CV.OCR;
using Emgu.Util;

using System.IO;

namespace IDCardReader
{
    public partial class Form1 : Form
    {

        string fileName = Path.GetFullPath("../../Data/idcard.jpg");
        Image<Gray, Byte> sourceImage;
        Image<Gray, Byte> imgResize;
        Image<Gray, Byte> img_gray;
        private Tesseract _ocr;
        public Form1()
        {
            InitializeComponent();
            _ocr = new Tesseract(Path.GetFullPath("../../Data/"), "eng", OcrEngineMode.TesseractLstmCombined);
            sourceImage = new Image<Gray, Byte>(fileName);
            Bitmap bit = sourceImage.Resize(pictureBox1.Width, pictureBox1.Height, Inter.Linear).ToBitmap();
            pictureBox1.Image = bit;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            richTextBox1.Clear();
            //Resize the image to higherquality
          
            imgResize = sourceImage.Resize(2, Inter.Linear);
          

            if (trackBar1.Value > 0)
                //applying smooth and converting to binary
                img_gray = imgResize.Convert<Gray, Byte>().SmoothGaussian(5).ThresholdBinary(new Gray(trackBar1.Value), new Gray(255));
            else
                img_gray = imgResize.Convert<Gray, Byte>().SmoothGaussian(5);

            _ocr.SetImage(img_gray);
            _ocr.Recognize();

            richTextBox1.Text = _ocr.GetUTF8Text();
            img_gray.Dispose();
            imgResize.Dispose();
          
        }

        private void trackBar1_Scroll(object sender, EventArgs e)
        {
            if(pictureBox1.Image!=null)
            pictureBox1.Image.Dispose();
            if (sourceImage != null)
            {
                img_gray = sourceImage.Convert<Gray, Byte>().SmoothGaussian(5).ThresholdBinary(new Gray((sender as TrackBar).Value), new Gray(255));
                Bitmap image = img_gray.Resize(pictureBox1.Width, pictureBox1.Height, Inter.Linear).ToBitmap();
                pictureBox1.Image = image;
                img_gray.Dispose();
            }

        }

        private void button2_Click(object sender, EventArgs e)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter = "Images(*.jpg,*.png,*.jpeg)|*.jpg;*.png;*.jpeg";
           if(dialog.ShowDialog()==DialogResult.OK)
            {
                fileName = dialog.FileName;
                sourceImage = new Image<Gray, Byte>(fileName);
            }
            trackBar1.Value = 0;
           
            Bitmap bit = sourceImage.Resize(pictureBox1.Width, pictureBox1.Height, Inter.Linear).ToBitmap();
            pictureBox1.Image = bit;
        }
    }
 }


