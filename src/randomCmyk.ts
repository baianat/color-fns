import { CmykColor } from './types';
import { getRandomInt } from './utils';

export function randomCmyk(): CmykColor {
  return {
    cyan: getRandomInt(0, 100),
    key: getRandomInt(0, 100),
    magenta: getRandomInt(0, 100),
    yellow: getRandomInt(0, 100)
  };
}
