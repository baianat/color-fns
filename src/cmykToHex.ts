import { cmykToRgb } from './cmykToRgb';
import { rgbToHex } from './rgbToHex';
import { CmykColor, HexColor } from './types';

export function cmykToHex (cmyk: CmykColor | string | null): HexColor {
  if (!cmyk) {
    return new HexColor(null);
  }

  return rgbToHex(cmykToRgb(cmyk));
}
