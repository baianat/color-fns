import { RgbColor } from './types';
import { isBetween } from './utils';

export function formatRgb(value: RgbColor | null): string {
  if (!value) {
    return 'Invalid Color';
  }

  if (typeof value.alpha !== 'undefined' && isBetween(0, 0.999)(value.alpha)) {
    return `rgba(${value.red},${value.green},${value.blue},${value.alpha})`;
  }

  return `rgb(${value.red},${value.green},${value.blue})`;
}
