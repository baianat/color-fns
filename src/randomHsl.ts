import { HslColor } from './types';
import { getRandomInt } from './utils';

export function randomHsl(): HslColor {
  return {
    hue: getRandomInt(0, 360),
    lum: getRandomInt(0, 100),
    sat: getRandomInt(0, 100)
  };
}
