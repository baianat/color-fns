import { parseRgb } from './parseRgb';
import { RgbColor } from './types/rgb';

export function isValidRgb (value: string | null) {
  // Handle null values.
  if (!value) {
    return false;
  }

  const rgb: RgbColor = parseRgb(value);

  return !rgb.invalid;
}
