import { hsvToRgb } from './hsvToRgb';
import { rgbToHsl } from './rgbToHsl';
import { HslColor, HsvColor } from './types';

export function hsvToHsl (hsv: HsvColor | string | null): HslColor {
  if (!hsv) {
    return new HslColor(null);
  }

  return rgbToHsl(hsvToRgb(hsv));
}
