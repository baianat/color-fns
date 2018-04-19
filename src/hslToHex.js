import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';
import { HexColor } from './types';

export default function hslToHex (hsl) {
  if (!hsl) {
    return new HexColor();
  }
  return rgbToHex(hslToRgb(hsl));
}
