import { parseCmyk } from './parseCmyk';
import { parseHex } from './parseHex';
import { parseHsl } from './parseHsl';
import { parseHsv } from './parseHsv';
import { parseRgb } from './parseRgb';
import { whichModel } from './whichModel';

/**
 * Checks if the given color string is valid (parsable).
 *
 * @param {String} color The color string to be checked.
 */
export function isValidColor (color: string | null): boolean {
  const model = whichModel(color);

  if (model === 'rgb') {
    return !parseRgb(color).invalid;
  }

  if (model === 'hex') {
    return !parseHex(color).invalid;
  }

  if (model === 'hsl') {
    return !parseHsl(color).invalid;
  }

  if (model === 'hsv') {
    return !parseHsv(color).invalid;
  }

  if (model === 'cmyk') {
    return !parseCmyk(color).invalid;
  }

  return false;
}
