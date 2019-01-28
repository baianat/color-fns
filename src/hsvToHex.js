import hsvToRgb from './hsvToRgb';
import rgbToHex from './rgbToHex';
import { HexColor } from './types';

export default function hsvToHex (hsv) {
  if (!hsv) {
    return new HexColor();
  }
  return rgbToHex(hsvToRgb(hsv));
}
