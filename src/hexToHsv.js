import hexToRgb from './hexToRgb';
import rgbToHsv from './rgbToHsv';
import { HsvColor } from './types';

export default function hexToHsv (hex) {
  if (!hex) {
    return new HsvColor();
  }
  return rgbToHsv(hexToRgb(hex));
}
