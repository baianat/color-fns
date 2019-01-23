import getColorModel from './getColorModel';
import decNumToHex from './decNumToHex';
import { RgbColor, HexColor, HslColor } from './types';
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
  return 'Invalid color';
}
