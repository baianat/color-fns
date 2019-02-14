import { hexToRgb } from './hexToRgb';
import { rgbToCmyk } from './rgbToCmyk';
import { CmykColor, HexColor } from './types';

export function hexToCmyk (hex: HexColor | string | null): CmykColor {
  if (!hex) {
    return new CmykColor(null);
  }

  return rgbToCmyk(hexToRgb(hex));
}
