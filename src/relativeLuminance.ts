import { IRgbColor } from "./types/rgb";

/**
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export function relativeLuminance(value: IRgbColor): number {
  const sR = value.red / 255;
  const sG = value.green / 255;
  const sB = value.blue / 255;

  const R = sR <= 0.03928 ? (sR / 12.92) : (((sR + 0.055) / 1.055) ** 2.4);
  const G = sG <= 0.03928 ? (sG / 12.92) : (((sG + 0.055) / 1.055) ** 2.4);
  const B = sB <= 0.03928 ? (sB / 12.92) : (((sB + 0.055) / 1.055) ** 2.4);


  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
