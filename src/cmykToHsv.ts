import { cmykToRgb } from './cmykToRgb';
import { rgbToHsv } from './rgbToHsv';
import { CmykColor, HsvColor } from './types';

export function cmykToHsv (cmyk: CmykColor | string | null): HsvColor {
  if (!cmyk) {
    return new HsvColor(null);
  }

  return rgbToHsv(cmykToRgb(cmyk));
}
