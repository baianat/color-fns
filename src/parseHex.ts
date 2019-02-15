import { expandHexShorthand } from './expandHexShorthand';
import { HexColor } from './types';

export function parseHex (hex: string | null) {
  if (typeof hex !== 'string') {
    return new HexColor(null);
  }

  const expanded = expandHexShorthand(hex);
  const match = expanded.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})*/i);
  if (!match || match.length < 4) {
    return new HexColor(null);
  }

  return new HexColor({
    alpha: match[4],
    blue: match[3],
    green: match[2],
    red: match[1],
  });
}
