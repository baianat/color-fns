import { HexColor } from './types';
import { hexNumToDec, isBetween } from './utils';

export function formatHex(value: HexColor | null): string {
  if (!value) {
    return 'Invalid Color';
  }

  if (value.alpha !== undefined && isBetween(0, 0.999)(hexNumToDec(value.alpha) / 255)) {
    return `#${value.red}${value.green}${value.blue}${value.alpha}`;
  }

  return `#${value.red}${value.green}${value.blue}`;
}
