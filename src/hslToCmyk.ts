import { hslToRgb } from './hslToRgb';
import { rgbToCmyk } from './rgbToCmyk';
import { CmykColor, HslColor } from './types';

export function hslToCmyk (hsl: HslColor | string | null): CmykColor {
  if (!hsl) {
    return new CmykColor(null);
  }

  return rgbToCmyk(hslToRgb(hsl));
}
