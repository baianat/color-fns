import { ICmykColor } from './types/cmyk';
import { getRandomInt } from './utils';

export function randomCmyk (): ICmykColor {
  return {
    cyan: getRandomInt(0, 100),
    key: getRandomInt(0, 100),
    magenta: getRandomInt(0, 100),
    yellow: getRandomInt(0, 100)
  };
}
