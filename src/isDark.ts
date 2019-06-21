import { relativeLuminance } from './relativeLuminance';
import { RgbColor } from './types';

export function isDark(value: RgbColor): boolean {
  const L = relativeLuminance(value);

  return L < 0.179;
}
