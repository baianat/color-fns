import { hsvToRgb } from './hsvToRgb';
import { rgbToCmyk } from './rgbToCmyk';
import { CmykColor, HsvColor } from './types';

export function hsvToCmyk (hsv: HsvColor | string | null): CmykColor {
  if (!hsv) {
    return new CmykColor(null);
  }

  return rgbToCmyk(hsvToRgb(hsv));
}
