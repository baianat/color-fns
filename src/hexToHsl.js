import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';
import { HslColor } from './types';

export default function hexToHsl (hex) {
  if (!hex) {
    return new HslColor();
  }
  return rgbToHsl(hexToRgb(hex));
}
