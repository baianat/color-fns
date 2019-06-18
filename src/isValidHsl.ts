import { parseHsl } from "./parseHsl";
import { IHslColor } from "./types";
import { isBetween } from "./utils";

export function isValidHsl (value: IHslColor | string | null): boolean {
  const hsl = typeof value === 'string' ? parseHsl(value) : value;
  if (!hsl) {
    return false;
  }

  const isPercentage = isBetween(0, 100);

  return isBetween(0, 360)(hsl.hue) && isPercentage(hsl.lum) && isPercentage(hsl.sat);
}