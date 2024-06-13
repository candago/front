import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const PDF = () => {
  html2canvas(document.body).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    const canvasRatio = canvas.width / canvas.height;
    const pdfRatio = pdfWidth / pdfHeight;
    let finalWidth, finalHeight;

    if (canvasRatio > pdfRatio) {
      finalWidth = pdfWidth;
      finalHeight = finalWidth / canvasRatio;
    } else {
      finalHeight = pdfHeight;
      finalWidth = finalHeight * canvasRatio;
    }

    pdf.addImage(imgData, 'PNG', 0, 0, finalWidth, finalHeight);
    pdf.save("dashboard.pdf");
  });
};

export default PDF;