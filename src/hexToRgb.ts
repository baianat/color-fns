import { parseHex } from './parseHex';
import { HexColor, RgbColor } from './types';
import { hexNumToDec } from './utils';

export function hexToRgb(hex: HexColor | string | null): RgbColor | null {
  const normalizedValue = typeof hex === 'string' ? parseHex(hex) : hex;
  if (!normalizedValue) {
    return null;
  }

  let alpha = 1;
  if (typeof normalizedValue.alpha !== 'undefined') {
    alpha = Number((hexNumToDec(normalizedValue.alpha) / 255).toFixed(2));
  }

  return {
    alpha,
    blue: hexNumToDec(normalizedValue.blue),
    green: hexNumToDec(normalizedValue.green),
    red: hexNumToDec(normalizedValue.red)
  };
}
