import { parseCmyk } from "./parseCmyk";
import { ICmykColor } from "./types/cmyk";
import { isBetween } from "./utils";

export function isValidCmyk (value: ICmykColor | string | null): boolean {
  const cmyk = typeof value === 'string' ? parseCmyk(value) : value;
  if (!cmyk) {
    return false;
  }

  const isPercentage = isBetween(0, 100);

  return isPercentage(cmyk.cyan) && isPercentage(cmyk.magenta) && isPercentage(cmyk.yellow) && isPercentage(cmyk.key);
}
