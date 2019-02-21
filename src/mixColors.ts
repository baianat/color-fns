import { toRgb } from './toRgb';
import { IRgbColor } from './types/rgb';
import { mixValue } from './utils';

export function mixColors (c1: IRgbColor, c2: IRgbColor, ratio: number): IRgbColor {
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
