import { IHslColor } from "./types";
import { isBetween } from "./utils";

export function formatHsl (value: IHslColor | null): string {
  if (!value) {
    return 'Invalid Color';
  }

  if (value.alpha !== undefined && isBetween(0, 0.999)(value.alpha)) {
    return `hsla(${value.hue},${value.sat}%,${value.lum}%,${value.alpha})`;
  }

  return `hsl(${value.hue},${value.sat}%,${value.lum}%)`;
}
