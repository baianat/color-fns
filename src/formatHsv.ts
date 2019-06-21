import { HsvColor } from './types';
import { isBetween } from './utils';

export function formatHsv(value: HsvColor | null): string {
  if (!value) {
    return 'Invalid Color';
  }

  if (value.alpha !== undefined && isBetween(0, 0.999)(value.alpha)) {
    return `hsva(${value.hue},${value.sat}%,${value.val}%,${value.alpha})`;
  }

  return `hsv(${value.hue},${value.sat}%,${value.val}%)`;
}
