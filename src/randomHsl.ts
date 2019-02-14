import { HslColor } from './types/hsl';
import { getRandomInt } from './utils';

export function randomHsl (): HslColor {
  return new HslColor({
    hue: getRandomInt(0, 360),
    lum: getRandomInt(0, 100),
    sat: getRandomInt(0, 100)
  });
}
