import { CSS_COLORS } from './data';
import { parseHex } from "./parseHex";
import { IColorNameLookup, IHexColor } from "./types";

export function hexFromName (name: string, extendedColors?: IColorNameLookup): IHexColor | null {
  if (name in CSS_COLORS) {
    return parseHex(CSS_COLORS[name]);
  }

  if (extendedColors && name in extendedColors) {
    return parseHex(extendedColors[name]);
  }

  return null;
};
