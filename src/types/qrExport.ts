
export interface ExportOptions {
  format: 'png' | 'jpg' | 'svg' | 'pdf';
  size: number;
  quality: number;
  filename: string;
}

export interface QRAdditionalInfo {
  pukCode?: string;
  pinCode?: string;
  phoneNumber?: string;
  operator?: string;
  ssid?: string;
  security?: string;
  password?: string;
  hidden?: string;
}

export type QRType = 'wifi' | 'esim' | 'standard';
