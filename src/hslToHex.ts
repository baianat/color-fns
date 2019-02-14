import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';
import { HexColor, HslColor } from './types';

export function hslToHex (hsl: HslColor | string | null): HexColor {
  if (!hsl) {
    return new HexColor(null);
  }

  return rgbToHex(hslToRgb(hsl));
}
