import { CmykColor } from './types';
import { isBetween } from './utils';

export function formatCmyk(value: CmykColor | null): string {
  if (!value) {
    return 'Invalid Color';
  }

  if (typeof value.alpha !== 'undefined' && isBetween(0, 0.999)(value.alpha)) {
    return `cmyka(${value.cyan},${value.magenta},${value.yellow},${value.key},${value.alpha})`;
  }

  return `cmyk(${value.cyan},${value.magenta},${value.yellow},${value.key})`;
}
