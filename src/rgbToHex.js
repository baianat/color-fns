import decNumToHex from './decNumToHex';
import parseRgb from './parseRgb';
import { HexColor } from './types';

export default function rgbToHex (rgb) {
  if (!rgb) {
    return new HexColor();
  }
  rgb = parseRgb(rgb);
  const [rr, gg, bb, aa] = [decNumToHex(rgb.red), decNumToHex(rgb.green), decNumToHex(rgb.blue), rgb.alpha ? decNumToHex(rgb.alpha * 255) : null];

  return new HexColor({
    red: rr,
    green: gg,
    blue: bb,
    alpha: aa || decNumToHex(255)
  }); 
}
