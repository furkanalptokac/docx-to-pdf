const libre = require('libreoffice-convert');
const fs = require('fs');
const path = require('path');

const docx = 'docx';
const docxName = 'file'
const docxExt = '.docx'
const docxPath = path.join(__dirname, `/docs/${docx}/${docxName}${docxExt}`);

const pdf = 'pdf';
const pdfName = 'file';
const pdfExt = '.pdf';
const pdfPath = path.join(__dirname, `/docs/${pdf}/${pdfName}${pdfExt}`);

const convertToPDF = () => {
  const file = fs.readFileSync(docxPath);

  libre.convert(file, pdfExt, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }

    fs.writeFileSync(pdfPath, done);
  });
}

const convertToDocx = () => {
  const file = fs.readFileSync(pdfPath);

  libre.convert(file, docxExt, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }

    fs.writeFileSync(docxPath, done);
  });
}

// convertToPDF();
// convertToDocx();
