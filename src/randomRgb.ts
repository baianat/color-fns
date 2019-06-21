import { RgbColor } from './types';
import { getRandomInt } from './utils';

export function randomRgb(): RgbColor {
  return {
    blue: getRandomInt(0, 255),
    green: getRandomInt(0, 255),
    red: getRandomInt(0, 255),
    alpha: 1
  };
}
