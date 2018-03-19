import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';

export default function hexToHsl (hex, details) {
  return rgbToHsl(hexToRgb(hex));
}
