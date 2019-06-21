import { RgbColor } from './types';
import { mixValue } from './utils';

export function mix(c1: RgbColor, c2: RgbColor, ratio: number): RgbColor {
  const red = Math.floor(mixValue(c1.red, c2.red, ratio));
  const green = Math.floor(mixValue(c1.green, c2.green, ratio));
  const blue = Math.floor(mixValue(c1.blue, c2.blue, ratio));

  const alpha1 = typeof c1.alpha === 'number' ? c1.alpha : 1;
  const alpha2 = typeof c2.alpha === 'number' ? c2.alpha : 1;

  const alpha = mixValue(alpha1, alpha2, ratio);

  return {
    alpha,
    blue,
    green,
    red
  };
}
