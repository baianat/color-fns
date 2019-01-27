import getColorModel from './getColorModel';
import hexToHsv from './hexToHsv';
import parseHsv from './parseHsv';
import rgbToHsv from './rgbToHsv';
import hslToHsv from './hslToHsv';
import { HsvColor } from './types';

/**
 * Parses the given color string into a HSL color object.
 *
 * @param {String} color The color to be parsed and converted.
 */
export default function toHsl (color) {
  const model = getColorModel(color);

  if (model === 'hex') {
    return hexToHsv(color);
  }

  if (model === 'rgb') {
    return rgbToHsv(color);
  }

  if (model === 'hsl') {
    return hslToHsv(color);
  }

  if (model === 'hsv' && typeof color === 'string') {
    return parseHsv(color);
  }

  if (model === 'hsv' && typeof color === 'object') {
    return color;
  }

  return new HsvColor();
}
