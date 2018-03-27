import getColorModel from './getColorModel';
import parseHex from './parseHex';
import parseHsl from './parseHsl';
import parseRgb from './parseRgb';
import { Color } from './types';

export default function parseColor (color) {
  const model = getColorModel(color);

  if (model === 'rgb') {
    return parseRgb(color);
  }

  if (model === 'hex') {
    return parseHex(color);
  }

  if (model === 'hsl') {
    return parseHsl(color);
  }

  return new Color();
}
