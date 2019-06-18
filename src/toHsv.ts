import { cmykToRgb } from './cmykToRgb';
import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
import { parseHsv } from './parseHsv';
import { rgbToHsv } from './rgbToHsv';
import { IHsvColor } from './types';
import { whichModel} from './whichModel';

export function toHsv (color: string | null): IHsvColor | null {
  const model = whichModel(color);

  if (model === 'hex') {
    return rgbToHsv(hexToRgb(color));
  }

  if (model === 'rgb') {
    return rgbToHsv(color);
  }

  if (model === 'cmyk') {
    return rgbToHsv(cmykToRgb(color));
  }

  if (model === 'hsl') {
    return rgbToHsv(hslToRgb(color));
  }

  if (model === 'hsv' && typeof color === 'string') {
    return parseHsv(color);
  }

  return null;
}
