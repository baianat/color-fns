import { cmykToRgb } from './cmykToRgb';
import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
import { hsvToRgb } from './hsvToRgb';
import { parseRgb } from './parseRgb';
import { CmykColor, Color, HexColor, HslColor, HsvColor, RgbColor } from './types';
import { whichModel } from './whichModel';

export function toRgb (color: Color | string | null): RgbColor {
  const model = whichModel(color);

  if (model === 'hex') {
    return hexToRgb(color as HexColor);
  }

  if (model === 'hsl') {
    return hslToRgb(color as HslColor);
  }

  if (model === 'hsv') {
    return hsvToRgb(color as HsvColor);
  }

  if (model === 'cmyk') {
    return cmykToRgb(color as CmykColor);
  }

  if (model === 'rgb' && typeof color === 'string') {
    return parseRgb(color);
  }

  if (model === 'rgb' && typeof color === 'object') {
    return color as RgbColor;
  }

  return new RgbColor(null);
}
