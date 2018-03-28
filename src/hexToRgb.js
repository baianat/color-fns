import hexNumToDec from './hexNumToDec';
import { RgbColor } from './types';

export default function hexToRgb (hex) {
  const { red, green, blue, alpha } = hex;

  return new RgbColor({
    red: hexNumToDec(red),
    green: hexNumToDec(green),
    blue: hexNumToDec(blue),
    alpha: alpha === undefined ? 1 : Number((hexNumToDec(alpha) / 255).toFixed(2))
  });
}
