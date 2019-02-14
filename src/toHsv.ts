import { cmykToHsv } from './cmykToHsv';
import { getColorModel} from './getColorModel';
import { hexToHsv } from './hexToHsv';
import { hslToHsv } from './hslToHsv';
import { parseHsv } from './parseHsv';
import { rgbToHsv } from './rgbToHsv';
import { CmykColor, Color, HexColor, HslColor, HsvColor, RgbColor } from './types';

export function toHsv (color: Color | string | null): HsvColor {
  const model = getColorModel(color);

  if (model === 'hex') {
    return hexToHsv(color as HexColor);
  }

  if (model === 'rgb') {
    return rgbToHsv(color as RgbColor);
  }

  if (model === 'cmyk') {
    return cmykToHsv(color as CmykColor);
  }

  if (model === 'hsl') {
    return hslToHsv(color as HslColor);
  }

  if (model === 'hsv' && typeof color === 'string') {
    return parseHsv(color);
  }

  if (model === 'hsv' && typeof color === 'object') {
    return color as HsvColor;
  }

  return new HsvColor(null);
}
