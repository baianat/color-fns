import { cmykToHex } from './cmykToHex';
import { getColorModel } from './getColorModel';
import { hslToHex } from './hslToHex';
import { hsvToHex } from './hsvToHex';
import { parseHex } from './parseHex';
import { rgbToHex } from './rgbToHex';
import { CmykColor, Color, HexColor, HslColor, HsvColor, RgbColor } from './types';

export function toHex (color: Color | string | null): HexColor {
  const model = getColorModel(color);

  if (model === 'rgb') {
    return rgbToHex(color as RgbColor);
  }

  if (model === 'hsl') {
    return hslToHex(color as HslColor);
  }

  if (model === 'hsv') {
    return hsvToHex(color as HsvColor);
  }

  if (model === 'cmyk') {
    return cmykToHex(color as CmykColor);
  }

  if (model === 'hex' && typeof color === 'string') {
    return parseHex(color);
  }

  if (model === 'hex' && typeof color === 'object') {
    return color as HexColor;
  }

  return new HexColor(null);
}
