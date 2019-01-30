import hsvToRgb from './hsvToRgb';
import rgbToCmyk from './rgbToCmyk';
import { CmykColor } from './types';

export default function hsvToCmyk (hsv) {
  if (!hsv) {
    return new CmykColor();
  }
  return rgbToCmyk(hsvToRgb(hsv));
}
