import { HsvColor } from './types';

export function parseHsv (value: HsvColor | string | any) {
  if (typeof value !== 'string') {
    return new HsvColor(null)
  }

  // will consider hsv/hsva color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'hsv(255, 100%, 50%, 0.5)', 'hsva(100, 100%, 50%)'
  // the output for the inputted examples 'hsva(255, 100%, 50%, 0.5)', 'hsv(100, 100%, 50%)'
  const match = value.match(/^hsva?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
  if (!match || match.length < 4) {
    return new HsvColor(null)
  }

  return new HsvColor({
    alpha: Number(match[4]),
    hue: Number(match[1]),
    sat: Number(match[2]),
    val: Number(match[3]),
  });
}
