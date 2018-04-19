import hexNumToDec from './hexNumToDec';
import parseHex from './parseHex';
import { RgbColor } from './types';

export default function hexToRgb (hex) {
  if (!hex) {
    return new RgbColor();
  }
  const { red, green, blue, alpha } = parseHex(hex);

  return new RgbColor({
    red: hexNumToDec(red),
    green: hexNumToDec(green),
    blue: hexNumToDec(blue),
    alpha: alpha === undefined ? 1 : Number((hexNumToDec(alpha) / 255).toFixed(2))
  });
}
