import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';

export default function hexToHsl (hex) {
  return rgbToHsl(hexToRgb(hex));
}
