import toRgb from './toRgb';
import { RgbColor } from './types';
import { mixValue } from './utils';

export default function mixColors (color1, color2, ratio) {
  color1 = toRgb(color1);
  color2 = toRgb(color2);
  const red = Math.floor(mixValue(color1.red, color2.red, ratio));
  const green = Math.floor(mixValue(color1.green, color2.green, ratio));
  const blue = Math.floor(mixValue(color1.blue, color2.blue, ratio));
  const alpha = mixValue(color1.alpha, color2.alpha, ratio);
  return new RgbColor({
    red,
    green,
    blue,
    alpha
  });
}
