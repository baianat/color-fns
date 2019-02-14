import { hslToRgb } from './hslToRgb';
import { rgbToHsv } from './rgbToHsv';
import { HslColor, HsvColor } from './types';

export function hslToHsv (hsl: HslColor | string | null): HsvColor {
  if (!hsl) {
    return new HsvColor(null);
  }

  return rgbToHsv(hslToRgb(hsl));
}
