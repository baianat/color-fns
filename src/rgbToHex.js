import decNumToHex from './decNumToHex';
import { HexColor } from './types';

export default function rgbToHex (rgb) {
  const [rr, gg, bb, aa] = [decNumToHex(rgb.red), decNumToHex(rgb.green), decNumToHex(rgb.blue), rgb.alpha ? decNumToHex(rgb.alpha * 255) : null];

  return new HexColor({
    red: rr,
    green: gg,
    blue: bb,
    alpha: aa || 1
  });
}
