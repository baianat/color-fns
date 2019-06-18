import { cmykToRgb } from './cmykToRgb';
import { hexToRgb } from './hexToRgb';
import { hsvToRgb } from './hsvToRgb';
import { parseHsl } from './parseHsl';
import { rgbToHsl } from './rgbToHsl';
import { IHslColor } from './types';
import { whichModel } from './whichModel';

export function toHsl (color: string | null): IHslColor | null {
  const model = whichModel(color);

  if (model === 'hex') {
    return rgbToHsl(hexToRgb(color));
  }

  if (model === 'rgb') {
    return rgbToHsl(color);
  }

  if (model === 'hsv') {
    return rgbToHsl(hsvToRgb(color));
  }

  if (model === 'cmyk') {
    return rgbToHsl(cmykToRgb(color));
  }

  if (model === 'hsl' && typeof color === 'string') {
    return parseHsl(color);
  }

  return null;
}
