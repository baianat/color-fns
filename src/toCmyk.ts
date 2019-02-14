import { hexToCmyk } from './hexToCmyk';
import { hslToCmyk } from './hslToCmyk';
import { hsvToCmyk } from './hsvToCmyk';
import { parseCmyk } from './parseCmyk';
import { rgbToCmyk } from './rgbToCmyk';
import { CmykColor, Color, HexColor, HslColor, HsvColor, RgbColor } from './types';
import { whichModel } from './whichModel';

export function toCmyk (color: Color | string | null): CmykColor {
  const model = whichModel(color);

  if (model === 'hex') {
    return hexToCmyk(color as HexColor);
  }

  if (model === 'hsl') {
    return hslToCmyk(color as HslColor);
  }

  if (model === 'hsv') {
    return hsvToCmyk(color as HsvColor);
  }

  if (model === 'rgb') {
    return rgbToCmyk(color as RgbColor);
  }

  if (model === 'cmyk' && typeof color === 'string') {
    return parseCmyk(color);
  }

  if (model === 'cmyk') {
    return color as CmykColor;
  }

  return new CmykColor(null);
}
