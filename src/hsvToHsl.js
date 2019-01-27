import hsvToRgb from './hsvToRgb';
import rgbToHsl from './rgbToHsl';
import { HslColor } from './types';

export default function hexToHsv (hsv) {
  if (!hsv) {
    return new HslColor();
  }
  return rgbToHsl(hsvToRgb(hsv));
}
