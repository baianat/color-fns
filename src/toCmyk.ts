import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
import { hsvToRgb } from './hsvToRgb';
import { parseCmyk } from './parseCmyk';
import { rgbToCmyk } from './rgbToCmyk';
import { CmykColor } from './types';
import { whichModel } from './whichModel';

export function toCmyk(color: string | null): CmykColor | null {
  const model = whichModel(color);

  if (model === 'hex') {
    return rgbToCmyk(hexToRgb(color));
  }

  if (model === 'hsl') {
    return rgbToCmyk(hslToRgb(color));
  }

  if (model === 'hsv') {
    return rgbToCmyk(hsvToRgb(color));
  }

  if (model === 'rgb') {
    return rgbToCmyk(color);
  }

  if (model === 'cmyk' && typeof color === 'string') {
    return parseCmyk(color);
  }

  return null;
}
