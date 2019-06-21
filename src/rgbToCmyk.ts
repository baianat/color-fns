import { parseRgb } from './parseRgb';
import { CmykColor, RgbColor } from './types';

export function rgbToCmyk(rgb: RgbColor | string | null): CmykColor | null {
  const value = typeof rgb === 'string' ? parseRgb(rgb) : rgb;
  if (!value) {
    return null;
  }

  // Convert the RGB values to the range 0-1
  const [red, green, blue, alpha] = [value.red / 255, value.green / 255, value.blue / 255, value.alpha];

  // Find the maximum value of R, G and B.
  const max = Math.max(red, green, blue);

  // Calculate the cmyk values
  let key = 1 - max;
  let cyan = (1 - red - key) / (1 - key);
  let magenta = (1 - green - key) / (1 - key);
  let yellow = (1 - blue - key) / (1 - key);

  // normalize values
  cyan = Math.floor(cyan * 100);
  magenta = Math.floor(magenta * 100);
  yellow = Math.floor(yellow * 100);
  key = Math.floor(key * 100);

  return {
    alpha: typeof alpha !== 'undefined' ? alpha : 1,
    cyan,
    key,
    magenta,
    yellow
  };
}
