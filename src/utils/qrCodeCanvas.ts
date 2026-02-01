
import type { QRAdditionalInfo, QRType } from '../types/qrExport';

export const generateQRCodeWithText = (
  canvas: HTMLCanvasElement,
  qrType: QRType = 'standard',
  additionalInfo?: QRAdditionalInfo
): HTMLCanvasElement => {
  const originalWidth = canvas.width;
  const originalHeight = canvas.height;
  
  // Calculate new canvas dimensions to accommodate text
  const padding = 20;
  const lineHeight = 24;
  const headerHeight = 40;
  const textLines = [];
  
  // Add QR type specific information
  if (qrType === 'esim') {
    if (additionalInfo?.pukCode) {
      textLines.push(`PUK Code : ${additionalInfo.pukCode}`);
    }
    if (additionalInfo?.pinCode) {
      textLines.push(`PIN Code : ${additionalInfo.pinCode}`);
    }
    if (additionalInfo?.phoneNumber) {
      textLines.push(`Phone Number : ${additionalInfo.phoneNumber}`);
    }
    if (additionalInfo?.operator) {
      textLines.push(`Operator : ${additionalInfo.operator}`);
    }
  } else if (qrType === 'wifi') {
    if (additionalInfo?.ssid) {
      textLines.push(`SSID : ${additionalInfo.ssid}`);
    }
    if (additionalInfo?.security) {
      textLines.push(`Security : ${additionalInfo.security}`);
    }
    if (additionalInfo?.password) {
      textLines.push(`Password : ${additionalInfo.password}`);
    }
    if (additionalInfo?.hidden) {
      textLines.push(`Hidden : ${additionalInfo.hidden}`);
    }
  }
  
  const textAreaHeight = textLines.length > 0 ? headerHeight + (textLines.length * lineHeight) + (padding * 2) : 0;
  const newHeight = originalHeight + textAreaHeight;
  
  // Create new canvas with rounded corners background
  const newCanvas = document.createElement('canvas');
  newCanvas.width = Math.max(originalWidth, 400);
  newCanvas.height = newHeight + 40; // Extra space for rounded container
  
  const ctx = newCanvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Draw rounded rectangle background
  const cornerRadius = 20;
  const bgX = 10;
  const bgY = 10;
  const bgWidth = newCanvas.width - 20;
  const bgHeight = newCanvas.height - 20;
  
  ctx.fillStyle = '#f8f9fa';
  ctx.beginPath();
  ctx.moveTo(bgX + cornerRadius, bgY);
  ctx.lineTo(bgX + bgWidth - cornerRadius, bgY);
  ctx.quadraticCurveTo(bgX + bgWidth, bgY, bgX + bgWidth, bgY + cornerRadius);
  ctx.lineTo(bgX + bgWidth, bgY + bgHeight - cornerRadius);
  ctx.quadraticCurveTo(bgX + bgWidth, bgY + bgHeight, bgX + bgWidth - cornerRadius, bgY + bgHeight);
  ctx.lineTo(bgX + cornerRadius, bgY + bgHeight);
  ctx.quadraticCurveTo(bgX, bgY + bgHeight, bgX, bgY + bgHeight - cornerRadius);
  ctx.lineTo(bgX, bgY + cornerRadius);
  ctx.quadraticCurveTo(bgX, bgY, bgX + cornerRadius, bgY);
  ctx.closePath();
  ctx.fill();
  
  // Draw QR code centered
  const qrX = (newCanvas.width - originalWidth) / 2;
  const qrY = 30;
  ctx.drawImage(canvas, qrX, qrY);
  
  // Draw "QR Code Info" header
  if (textLines.length > 0) {
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.textAlign = 'center';
    
    const headerY = originalHeight + qrY + 40;
    ctx.fillText('QR Code Info', newCanvas.width / 2, headerY);
    
    // Draw text lines
    ctx.font = '16px Arial, sans-serif';
    ctx.textAlign = 'center';
    
    const textStartY = headerY + 30;
    
    textLines.forEach((line, index) => {
      ctx.fillText(line, newCanvas.width / 2, textStartY + (index * lineHeight));
    });
  }
  
  return newCanvas;
};

export const resizeCanvas = (originalCanvas: HTMLCanvasElement, targetSize: number): HTMLCanvasElement => {
  const newCanvas = document.createElement('canvas');
  const ctx = newCanvas.getContext('2d');
  if (!ctx) return originalCanvas;

  const scale = targetSize / Math.max(originalCanvas.width, originalCanvas.height);
  newCanvas.width = originalCanvas.width * scale;
  newCanvas.height = originalCanvas.height * scale;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(originalCanvas, 0, 0, newCanvas.width, newCanvas.height);

  return newCanvas;
};
