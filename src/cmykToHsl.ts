import { cmykToRgb } from './cmykToRgb';
import { rgbToHsl } from './rgbToHsl';
import { CmykColor, HslColor } from './types';

export function cmykToHsl (cmyk: CmykColor | string | null): HslColor {
  if (!cmyk) {
    return new HslColor(null);
  }

  return rgbToHsl(cmykToRgb(cmyk));
}
