import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';

export default function hexToHsl (hex, details) {
  let [Hsl, Hue, Sat, Lgh] = rgbToHsl(hexToRgb(hex), true);

  if (details) {
    return [Hsl, Hue, Sat, Lgh];
  }
  return Hsl;
}
