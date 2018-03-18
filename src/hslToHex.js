import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

export default function hslToHex (hsl, details) {
  let [Hex, Red, Green, Blue] = rgbToHex(hslToRgb(hsl), true);

  if (details) {
    return [Hex, Red, Green, Blue];
  }
  return Hex;
}
