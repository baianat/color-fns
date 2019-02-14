import { CmykColor } from './types/cmyk';
import { getRandomInt } from './utils';

export function randomCmyk (): CmykColor {
  return new CmykColor({
    cyan: getRandomInt(0, 100),
    key: getRandomInt(0, 100),
    magenta: getRandomInt(0, 100),
    yellow: getRandomInt(0, 100)
  });
}
