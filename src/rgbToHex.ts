import { parseRgb } from './parseRgb';
import { HexColor, RgbColor } from './types';
import { decNumToHex } from './utils';

export function rgbToHex(rgb: RgbColor | string | null): HexColor | null {
  if (typeof rgb === 'string') {
    rgb = parseRgb(rgb);
  }

  if (!rgb) {
    return null;
  }

  const [rr, gg, bb, aa] = [
    decNumToHex(rgb.red),
    decNumToHex(rgb.green),
    decNumToHex(rgb.blue),
    rgb.alpha ? decNumToHex(rgb.alpha * 255) : 'ff'
  ];

  return {
    alpha: aa,
    blue: bb,
    green: gg,
    red: rr
  };
}
