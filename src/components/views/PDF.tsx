import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const PDF = () => {
  html2canvas(document.body).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save("dashboard.pdf");
  });
};

export default PDF;