import { parseHsv } from "./parseHsv";
import { IHsvColor } from "./types";
import { isBetween } from "./utils";

export function isValidHsv (value: IHsvColor | string | null): boolean {
  const normalizedValue = typeof value === 'string' ? parseHsv(value) : value;
  if (!normalizedValue) {
    return false;
  }

  const isPercentage = isBetween(0, 100);

  return isBetween(0, 360)(normalizedValue.hue) && isPercentage(normalizedValue.val) && isPercentage(normalizedValue.sat);
}
