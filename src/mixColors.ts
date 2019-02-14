import { toRgb } from './toRgb';
import { RgbColor } from './types';
import { Color } from './types/base';
import { mixValue } from './utils';

export function mixColors (color1: Color | string | null, color2: Color | string | null, ratio: number): RgbColor {
  const c1 = toRgb(color1);
  const c2 = toRgb(color2);

  const red = Math.floor(mixValue(c1.red, c2.red, ratio));
  const green = Math.floor(mixValue(c1.green, c2.green, ratio));
  const blue = Math.floor(mixValue(c1.blue, c2.blue, ratio));
  const alpha = mixValue(c1.alpha, c2.alpha, ratio);

  return new RgbColor({
    alpha,
    blue,
    green,
    red
  });
}
