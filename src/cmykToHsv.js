import cmykToRgb from './cmykToRgb';
import rgbToHsv from './rgbToHsv';
import { HsvColor } from './types';

export default function cmykToHsv (cmyk) {
  if (!cmyk) {
    return new HsvColor();
  }
  return rgbToHsv(cmykToRgb(cmyk));
}
