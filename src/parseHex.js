import expandHexShorthand from './expandHexShorthand';
import { HexColor } from './types';

export default function parseHex (hex) {
  const expanded = expandHexShorthand(hex);
  const match = expanded.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  if (!match || match.length < 4) {
    return new HexColor();
  }

  return new HexColor({
    hex: expanded,
    red: match[1],
    green: match[2],
    blue: match[3]
  });
}
