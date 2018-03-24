import hexNumToDec from './hexNumToDec';
import { RgbColor } from './types';

export default function hexToRgb (hex) {
  const { red, green, blue } = hex;

  return new RgbColor({
    red: hexNumToDec(red),
    green: hexNumToDec(green),
    blue: hexNumToDec(blue)
  });
}
