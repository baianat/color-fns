import { IRgbColor } from "./types/rgb";

interface IWCAGInfo {
  ratio: number;
  isAA: boolean;
  isAALarge: boolean;
  isAAA: boolean;
  isAAALarge: boolean;
  isUIAA: boolean;
}

/**
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
function calculateRelativeLuminance (value: IRgbColor): number {
  const sR = value.red / 255;
  const sG = value.green / 255;
  const sB = value.blue / 255;

  const R = sR <= 0.03928 ? (sR / 12.92) : ((( sR + 0.055) / 1.055) ** 2.4);
  const G = sG <= 0.03928 ? (sG / 12.92) : ((( sG + 0.055) / 1.055) ** 2.4);
  const B = sB <= 0.03928 ? (sB / 12.92) : ((( sB + 0.055) / 1.055) ** 2.4);


  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function contrastInfo(c1: IRgbColor | null, c2: IRgbColor | null): IWCAGInfo {
  if (!c1 || !c2) {
    throw new Error('You must provide two valid HSL colors.');
  }

  const L1 = calculateRelativeLuminance(c1);
  const L2 = calculateRelativeLuminance(c2);

  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

  return {
    ratio: parseFloat(ratio.toFixed(2)),
    isAA: ratio >= 4.5,
    isAALarge: ratio >= 3,
    isAAA: ratio >= 7,
    isAAALarge: ratio >= 4.5,
    isUIAA: ratio >= 3
  }
};
