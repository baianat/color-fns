import { CSS_COLORS } from './data';
import { parseHex } from "./parseHex";
import { IHexColor } from "./types/hex";

export function hexFromName (name: string, extendedColors?: typeof CSS_COLORS): IHexColor | null {
  if (name in CSS_COLORS) {
    return parseHex(CSS_COLORS[name]);
  }

  if (extendedColors && name in extendedColors) {
    return parseHex(extendedColors[name]);
  }

  return null;
};
