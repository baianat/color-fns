import { cmykToRgb } from './cmykToRgb';
import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
import { hsvToRgb } from './hsvToRgb';
import { parseRgb } from './parseRgb';
import { RgbColor } from './types';
import { whichModel } from './whichModel';

export function toRgb(color: string | null): RgbColor | null {
  const model = whichModel(color);

  if (model === 'hex') {
    return hexToRgb(color);
  }

  if (model === 'hsl') {
    return hslToRgb(color);
  }

  if (model === 'hsv') {
    return hsvToRgb(color);
  }

  if (model === 'cmyk') {
    return cmykToRgb(color);
  }

  if (model === 'rgb' && typeof color === 'string') {
    return parseRgb(color);
  }

  return null;
}
