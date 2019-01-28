import hslToRgb from './hslToRgb';
import rgbToHsv from './rgbToHsv';
import { HsvColor } from './types';

export default function hexToHsv (hsl) {
  if (!hsl) {
    return new HsvColor();
  }
  return rgbToHsv(hslToRgb(hsl));
}
