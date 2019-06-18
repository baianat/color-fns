import { parseRgb } from './parseRgb';
import { IHexColor, IRgbColor } from './types';
import { decNumToHex } from './utils';

export function rgbToHex (rgb: IRgbColor | string | null): IHexColor | null {
  if (typeof rgb === 'string') {
    rgb = parseRgb(rgb);
  }

  if (!rgb) {
    return null
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
};
