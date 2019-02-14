import { parseRgb } from './parseRgb';
import { CmykColor, RgbColor } from './types';

export function rgbToCmyk (rgb: RgbColor | string | null) {
  if (!rgb) {
    return new CmykColor(null);
  }

  if (typeof rgb === 'string') {
    rgb = parseRgb(rgb);
  }

  // Convert the RGB values to the range 0-1
  const [red, green, blue, alpha] = [rgb.red / 255, rgb.green / 255, rgb.blue / 255, rgb.alpha];

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

  return new CmykColor({
    alpha,
    cyan,
    key,
    magenta,
    yellow
  });
}
