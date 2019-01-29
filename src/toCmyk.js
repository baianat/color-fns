import getColorModel from './getColorModel';
import parseCmyk from './parseCmyk';
import hexToCmyk from './hexToCmyk';
import hslToCmyk from './hslToCmyk';
import hsvToCmyk from './hsvToCmyk';
import rgbToCmyk from './rgbToCmyk';
import { CmykColor } from './types';

/**
 * Parses the given color string into a CMYK color object.
 *
 * @param {String} color The color to be parsed and converted.
 */
export default function toCmyk (color) {
  const model = getColorModel(color);

  if (model === 'hex') {
    return hexToCmyk(color);
  }

  if (model === 'hsl') {
    return hslToCmyk(color);
  }

  if (model === 'hsv') {
    return hsvToCmyk(color);
  }

  if (model === 'rgb') {
    return rgbToCmyk(color);
  }

  if (model === 'cmyk' && typeof color === 'string') {
    return parseCmyk(color);
  }

  if (model === 'cmyk' && typeof color === 'object') {
    return color;
  }

  return new CmykColor();
}
