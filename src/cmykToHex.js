import cmykToRgb from './cmykToRgb';
import rgbToHex from './rgbToHex';
import { HexColor } from './types';

export default function cmykToHex (cmyk) {
  if (!cmyk) {
    return new HexColor();
  }
  return rgbToHex(cmykToRgb(cmyk));
}
