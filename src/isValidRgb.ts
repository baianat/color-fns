import { parseRgb } from './parseRgb';
import { RgbColor } from './types/rgb';
import { isBetween, isValidAlpha } from './utils';

export function isValidRgb (value: string | null) {
  // Handle null values.
  if (!value) {
    return false;
  }

  const rgb: RgbColor = parseRgb(value);
  if (rgb.invalid) {
    return false;
  }

  const isInRange = isBetween(0, 255);
  const { red, green, blue } = rgb;
  if ('alpha' in rgb && !isValidAlpha(rgb.alpha)) {
    return false;
  }

  return isInRange(red) && isInRange(green) && isInRange(blue);
}
