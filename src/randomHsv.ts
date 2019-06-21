import { HsvColor } from './types';
import { getRandomInt } from './utils';

export function randomHsv(): HsvColor {
  return {
    hue: getRandomInt(0, 360),
    sat: getRandomInt(0, 100),
    val: getRandomInt(0, 100)
  };
}
