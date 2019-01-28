import { HsvColor } from './types';

export default function parseHsv (hsv) {
  if (typeof hsv === 'object') {
    return hsv;
  }

  // will consider hsv/hsva color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'hsv(255, 100%, 50%, 0.5)', 'hsva(100, 100%, 50%)'
  // the output for the inputted examples 'hsva(255, 100%, 50%, 0.5)', 'hsv(100, 100%, 50%)'
  const match = hsv.match(/^hsva?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
  if (!match || match.length < 4) {
    return new HsvColor();
  }

  return new HsvColor({
    hue: Number(match[1]),
    sat: Number(match[2]),
    val: Number(match[3]),
    alpha: Number(match[4])
  });
}
