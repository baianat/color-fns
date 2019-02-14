import { getRandomInt } from './utils';

export function getRandomColor (): string {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
}
