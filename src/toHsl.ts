import { cmykToHsl } from './cmykToHsl';
import { hexToHsl } from './hexToHsl';
import { hsvToHsl } from './hsvToHsl';
import { parseHsl } from './parseHsl';
import { rgbToHsl } from './rgbToHsl';
import { CmykColor, Color, HexColor, HslColor, HsvColor, RgbColor } from './types';
import { whichModel } from './whichModel';

export function toHsl (color: Color | string | null): HslColor {
  const model = whichModel(color);

  if (model === 'hex') {
    return hexToHsl(color as HexColor);
  }

  if (model === 'rgb') {
    return rgbToHsl(color as RgbColor);
  }

  if (model === 'hsv') {
    return hsvToHsl(color as HsvColor);
  }

  if (model === 'cmyk') {
    return cmykToHsl(color as CmykColor);
  }

  if (model === 'hsl' && typeof color === 'string') {
    return parseHsl(color);
  }

  if (model === 'hsl' && typeof color === 'object') {
    return color as HslColor;
  }

  return new HslColor(null);
}
