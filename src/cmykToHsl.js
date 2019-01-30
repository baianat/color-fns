import cmykToRgb from './cmykToRgb';
import rgbToHsl from './rgbToHsl';
import { HslColor } from './types';

export default function cmykToHsl (cmyk) {
  if (!cmyk) {
    return new HslColor();
  }
  return rgbToHsl(cmykToRgb(cmyk));
}
