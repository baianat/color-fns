import { CSS_COLORS } from './data';
import { parseHex } from './parseHex';
import { ColorNameLookup, HexColor } from './types';

export function hexFromName(name: string, extendedColors?: ColorNameLookup): HexColor | null {
  if (name in CSS_COLORS) {
    return parseHex(CSS_COLORS[name]);
  }

  if (extendedColors && name in extendedColors) {
    return parseHex(extendedColors[name]);
  }

  return null;
}
