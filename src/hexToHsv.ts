import { hexToRgb } from './hexToRgb';
import { rgbToHsv } from './rgbToHsv';
import { HexColor, HsvColor } from './types';

export function hexToHsv (hex: HexColor | string | null) {
  if (!hex) {
    return new HsvColor(null);
  }

  return rgbToHsv(hexToRgb(hex));
}
