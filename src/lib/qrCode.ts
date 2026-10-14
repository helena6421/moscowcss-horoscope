/**
 * QR code generation helpers.
 * Wraps the `qrcode` npm package to generate a data URL for rendering in <img>.
 */
import QRCode from 'qrcode'

export async function generateQRDataUrl(text: string): Promise<string> {
  return QRCode.toDataURL(text, {
    width: 256,
    margin: 2,
    color: {
      dark: '#0F172A',
      light: '#FFFFFF',
    },
    errorCorrectionLevel: 'M',
  })
}
