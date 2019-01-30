import getColorModel from './getColorModel';
import decNumToHex from './decNumToHex';
import { RgbColor, HexColor, HslColor, HsvColor, CmykColor } from './types';
import { isValidAlpha } from './utils';

export default function alpha (color, alpha) {
  alpha = Number(alpha);
  if (!isValidAlpha(alpha)) {
    return 'Invalid alpha';
  }

  const model = getColorModel(color);

  if (model === 'rgb') {
    const { red, green, blue } = color;
    return new RgbColor({ red, green, blue, alpha });
  }
  if (model === 'hex') {
    const { red, green, blue } = color;
    return new HexColor({ red, green, blue, alpha: decNumToHex(alpha * 255) });
  }
  if (model === 'hsl') {
    const { hue, sat, lum } = color;
    return new HslColor({ hue, sat, lum, alpha });
  }
  if (model === 'hsv') {
    const { hue, sat, val } = color;
    return new HsvColor({ hue, sat, val, alpha });
  }
  if (model === 'cmyk') {
    const { cyan, magenta, yellow, key } = color;
    return new CmykColor({ cyan, magenta, yellow, key, alpha });
  }
  return 'Invalid color';
}
