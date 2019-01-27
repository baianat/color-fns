import getColorModel from './getColorModel';
import parseHsl from './parseHsl';
import hexToHsl from './hexToHsl';
import rgbToHsl from './rgbToHsl';
import hsvToHsl from './hsvToHsl';
import { HslColor } from './types';

/**
 * Parses the given color string into a HSL color object.
 *
 * @param {String} color The color to be parsed and converted.
 */
export default function toHsl (color) {
  const model = getColorModel(color);

  if (model === 'hex') {
    return hexToHsl(color);
  }

  if (model === 'rgb') {
    return rgbToHsl(color);
  }

  if (model === 'hsv') {
    return hsvToHsl(color);
  }

  if (model === 'hsl' && typeof color === 'string') {
    return parseHsl(color);
  }

  if (model === 'hsl' && typeof color === 'object') {
    return color;
  }

  return new HslColor();
}
