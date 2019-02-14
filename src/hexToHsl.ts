import { hexToRgb } from './hexToRgb';
import { rgbToHsl } from './rgbToHsl';
import { HexColor, HslColor } from './types';

export function hexToHsl (hex: HexColor | string | null): HslColor {
  if (!hex) {
    return new HslColor(null);
  }

  return rgbToHsl(hexToRgb(hex));
}
