import getColorModel from './getColorModel';
import parseRgb from './parseRgb';
import hexToRgb from './hexToRgb';
import hslToRgb from './hslToRgb';
import hsvToRgb from './hsvToRgb';
import cmykToRgb from './cmykToRgb';
import { RgbColor } from './types';

/**
 * Parses the given color string into a RGB color object.
 *
 * @param {String} color The color to be parsed and converted.
 */
export default function toRgb (color) {
  const model = getColorModel(color);

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

  if (model === 'rgb' && typeof color === 'object') {
    return color;
  }

  return new RgbColor();
}
