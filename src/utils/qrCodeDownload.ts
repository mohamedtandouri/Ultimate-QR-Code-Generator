
import type { ExportOptions, QRAdditionalInfo, QRType } from '../types/qrExport';
import { generateQRCodeWithText, resizeCanvas } from './qrCodeCanvas';
import { downloadCanvasAsImageInternal, exportAsSVG, exportAsPDF } from './qrCodeExporters';

export const exportQRCode = async (
  canvas: HTMLCanvasElement,
  options: ExportOptions,
  qrType: QRType = 'standard',
  additionalInfo?: QRAdditionalInfo
): Promise<void> => {
  try {
    let finalCanvas = canvas;

    // Generate canvas with text if needed
    if (qrType !== 'standard' && additionalInfo) {
      finalCanvas = generateQRCodeWithText(canvas, qrType, additionalInfo);
    }

    // Resize if needed
    if (options.size !== canvas.width) {
      finalCanvas = resizeCanvas(finalCanvas, options.size);
    }

    const filename = `${options.filename}.${options.format}`;

    switch (options.format) {
      case 'png':
        await downloadCanvasAsImageInternal(finalCanvas, filename, 'image/png', options.quality);
        break;
      
      case 'jpg':
        await downloadCanvasAsImageInternal(finalCanvas, filename, 'image/jpeg', options.quality);
        break;
      
      case 'svg':
        await exportAsSVG(canvas, filename);
        break;
      
      case 'pdf':
        await exportAsPDF(finalCanvas, filename);
        break;
      
      default:
        throw new Error(`Unsupported format: ${options.format}`);
    }
  } catch (error) {
    console.error('Export failed:', error);
    throw new Error(`Failed to export as ${options.format.toUpperCase()}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Legacy function for backward compatibility
export const downloadCanvasAsImage = (canvas: HTMLCanvasElement, filename: string = 'qrcode.png') => {
  return downloadCanvasAsImageInternal(canvas, filename);
};

// Re-export types for convenience
export type { ExportOptions } from '../types/qrExport';
