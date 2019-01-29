import getColorModel from './getColorModel';
import parseHex from './parseHex';
import rgbToHex from './rgbToHex';
import hslToHex from './hslToHex';
import hsvToHex from './hsvToHex';
import cmykToHex from './cmykToHex';
import { HexColor } from './types';

/**
 * Parses the given color string into a Hex color object.
 *
 * @param {String} color The color to be parsed and converted.
 */
export default function toHex (color) {
  const model = getColorModel(color);

  if (model === 'rgb') {
    return rgbToHex(color);
  }

  if (model === 'hsl') {
    return hslToHex(color);
  }

  if (model === 'hsv') {
    return hsvToHex(color);
  }

  if (model === 'cmyk') {
    return cmykToHex(color);
  }

  if (model === 'hex' && typeof color === 'string') {
    return parseHex(color);
  }

  if (model === 'hex' && typeof color === 'object') {
    return color;
  }

  return new HexColor();
}
