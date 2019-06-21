import { parseRgb } from './parseRgb';
import { RgbColor } from './types';
import { isBetween } from './utils';

export function isValidRgb(value: RgbColor | string | null) {
  const rgb = typeof value === 'string' ? parseRgb(value) : value;
  // Handle null values.
  if (!rgb) {
    return false;
  }

  const isInAlphaRange = isBetween(0, 1);
  if (typeof rgb.alpha !== 'undefined' && !isInAlphaRange(rgb.alpha)) {
    return false;
  }

  const isInRange = isBetween(0, 255);
  const { red, green, blue } = rgb;

  return isInRange(red) && isInRange(green) && isInRange(blue);
}
