import { parseHex } from './parseHex';
import { HexColor } from './types/hex';

export function isValidHex (value: string | null) {
  // Handle null values.
  if (!value) {
    return false;
  }

  const hex: HexColor = parseHex(value);

  return !hex.invalid;
}
