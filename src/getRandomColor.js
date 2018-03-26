import { getRandomInt } from './utils';

export default function getRandomColor () {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
}
