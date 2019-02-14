import { decNumToHex } from './decNumToHex';
import { parseRgb } from './parseRgb';
import { HexColor, RgbColor } from './types';

export function rgbToHex (rgb: RgbColor | string | null): HexColor {
  if (!rgb) {
    return new HexColor(null);
  }

  if (typeof rgb === 'string') {
    rgb = parseRgb(rgb);
  }

  const [rr, gg, bb, aa] = [
    decNumToHex(rgb.red),
    decNumToHex(rgb.green),
    decNumToHex(rgb.blue),
    rgb.alpha ? decNumToHex(rgb.alpha * 255) : null
  ];

  return new HexColor({
    alpha: aa || 'ff',
    blue: bb,
    green: gg,
    red: rr
  });
}
