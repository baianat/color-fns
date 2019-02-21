import { parseHex } from './parseHex';
import { IHexColor } from './types/hex';

export function isValidHex (value: IHexColor | string | null) {
  const normalizedVal = typeof value === 'string' ? parseHex(value) : value;
  if (!normalizedVal) {
    return false;
  }

  const { red, green, blue } = normalizedVal;

  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`#${red}${green}${blue}`);
}
