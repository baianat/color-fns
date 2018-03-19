import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

export default function hslToHex (hsl) {
  return rgbToHex(hslToRgb(hsl)).hex;
}
