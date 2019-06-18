import { cmykToRgb } from './cmykToRgb';
import { hslToRgb } from './hslToRgb';
import { hsvToRgb } from './hsvToRgb';
import { parseHex } from './parseHex';
import { rgbToHex } from './rgbToHex';
import { IHexColor } from './types';
import { whichModel } from './whichModel';

export function toHex (color: string | null): IHexColor | null {
  const model = whichModel(color);

  if (model === 'rgb') {
    return rgbToHex(color);
  }

  if (model === 'hsl') {
    return rgbToHex(hslToRgb(color));
  }

  if (model === 'hsv') {
    return rgbToHex(hsvToRgb(color));
  }

  if (model === 'cmyk') {
    return rgbToHex(cmykToRgb(color));
  }

  if (model === 'hex' && typeof color === 'string') {
    return parseHex(color);
  }

  return null;
}
