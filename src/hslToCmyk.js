import hslToRgb from './hslToRgb';
import rgbToCmyk from './rgbToCmyk';
import { CmykColor } from './types';

export default function hslToCmyk (hsl) {
  if (!hsl) {
    return new CmykColor();
  }
  return rgbToCmyk(hslToRgb(hsl));
}
