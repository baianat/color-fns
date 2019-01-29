import hexToRgb from './hexToRgb';
import rgbToCmyk from './rgbToCmyk';
import { CmykColor } from './types';

export default function hexToCmyk (hex) {
  if (!hex) {
    return new CmykColor();
  }
  return rgbToCmyk(hexToRgb(hex));
}
