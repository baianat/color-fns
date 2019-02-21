import { expandHexShorthand } from './expandHexShorthand';
import { IHexColor } from './types/hex';

export function parseHex (hex: string | null): IHexColor | null {
  if (!hex) {
    return null;
  }

  const expanded = expandHexShorthand(hex);
  const match = expanded.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})*/i);
  if (!match || match.length < 4) {
    return null;
  }

  return {
    alpha: match[4],
    blue: match[3],
    green: match[2],
    red: match[1],
  };
}
