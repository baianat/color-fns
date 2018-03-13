import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

export default function hslToHex(hex, details) {
  let [Hex, Red, Green, Blue] = rgbToHex(hslToRgb(hex), true);

  if (details) {
    return [Hex, Red, Green, Blue];
  }
  return Hex;
}
