import { RgbColor } from './types/rgb';
import { getRandomInt } from './utils';

export function randomRgb (): RgbColor {
  return new RgbColor({
    blue: getRandomInt(0, 255),
    green: getRandomInt(0, 255),
    red: getRandomInt(0, 255)
  });
}
