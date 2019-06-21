import { relativeLuminance } from './relativeLuminance';
import { RgbColor } from './types';

interface WCAGInfo {
  ratio: number;
  isAA: boolean;
  isAALarge: boolean;
  isAAA: boolean;
  isAAALarge: boolean;
  isUIAA: boolean;
}

export function contrastInfo(c1: RgbColor, c2: RgbColor): WCAGInfo {
  const L1 = relativeLuminance(c1);
  const L2 = relativeLuminance(c2);

  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

  return {
    ratio: parseFloat(ratio.toFixed(2)),
    isAA: ratio >= 4.5,
    isAALarge: ratio >= 3,
    isAAA: ratio >= 7,
    isAAALarge: ratio >= 4.5,
    isUIAA: ratio >= 3
  };
}
