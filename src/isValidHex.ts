import { parseHex } from './parseHex';
import { HexColor } from './types';

export function isValidHex(value: HexColor | string | null) {
  const normalizedVal = typeof value === 'string' ? parseHex(value) : value;
  if (!normalizedVal) {
    return false;
  }

  const { red, green, blue } = normalizedVal;

  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`#${red}${green}${blue}`);
}
