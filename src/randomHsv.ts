import { HsvColor } from './types/hsv';
import { getRandomInt } from './utils';

export function randomHsv (): HsvColor {
  return new HsvColor({
    hue: getRandomInt(0, 360),
    sat: getRandomInt(0, 100),
    val: getRandomInt(0, 100)
  });
}
