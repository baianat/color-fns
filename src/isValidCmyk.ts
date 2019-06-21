import { parseCmyk } from './parseCmyk';
import { CmykColor } from './types';
import { isBetween } from './utils';

export function isValidCmyk(value: CmykColor | string | null): boolean {
  const cmyk = typeof value === 'string' ? parseCmyk(value) : value;
  if (!cmyk) {
    return false;
  }

  const isPercentage = isBetween(0, 100);

  return isPercentage(cmyk.cyan) && isPercentage(cmyk.magenta) && isPercentage(cmyk.yellow) && isPercentage(cmyk.key);
}
