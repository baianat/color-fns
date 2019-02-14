import { hsvToRgb } from './hsvToRgb';
import { rgbToHex } from './rgbToHex';
import { HexColor, HsvColor } from './types';

export function hsvToHex (hsv: HsvColor | string | null): HexColor {
  if (!hsv) {
    return new HexColor(null);
  }

  return rgbToHex(hsvToRgb(hsv));
}
