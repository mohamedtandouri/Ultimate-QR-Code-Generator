
import jsPDF from 'jspdf';

export const downloadCanvasAsImageInternal = (
  canvas: HTMLCanvasElement, 
  filename: string, 
  mimeType: string = 'image/png',
  quality: number = 0.92
): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(blob => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          resolve();
        } else {
          reject(new Error('Failed to create blob'));
        }
      }, mimeType, quality);
    } catch (error) {
      reject(error);
    }
  });
};

export const exportAsSVG = async (canvas: HTMLCanvasElement, filename: string): Promise<void> => {
  try {
    // Try to find the SVG element in the DOM
    const qrContainer = document.querySelector('[data-qr-container]');
    const svgElement = qrContainer?.querySelector('svg') || document.querySelector('#qr-code')?.nextElementSibling?.querySelector('svg');
    
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      // Fallback to PNG if SVG is not available
      await downloadCanvasAsImageInternal(canvas, filename.replace('.svg', '.png'));
    }
  } catch (error) {
    throw new Error('Failed to export as SVG');
  }
};

export const exportAsPDF = async (canvas: HTMLCanvasElement, filename: string): Promise<void> => {
  try {
    const pdf = new jsPDF();
    const imgData = canvas.toDataURL('image/png');
    
    // Calculate dimensions to fit the page
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const canvasAspectRatio = canvas.width / canvas.height;
    
    let imgWidth = pdfWidth - 20; // 10mm margin on each side
    let imgHeight = imgWidth / canvasAspectRatio;
    
    if (imgHeight > pdfHeight - 20) {
      imgHeight = pdfHeight - 20;
      imgWidth = imgHeight * canvasAspectRatio;
    }
    
    const x = (pdfWidth - imgWidth) / 2;
    const y = (pdfHeight - imgHeight) / 2;
    
    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save(filename);
  } catch (error) {
    throw new Error('Failed to export as PDF');
  }
};
