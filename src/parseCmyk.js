import { CmykColor } from './types';

export default function parseCmyk (cmyk) {
  if (typeof cmyk === 'object') {
    return cmyk;
  }

  // will consider cmyk/cmyka color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'cmyk(100, 0, 0, 0, 0.5)', 'cmyka(0, 0, 0, 0)'
  // the output for the inputted examples 'cmyka(100, 0, 0, 0.5)', 'cmyk(0, 0, 0)'
  const match = cmyk.match(/^cmyka?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
  if (!match || match.length < 5) {
    return new CmykColor();
  }
  return new CmykColor({
    cyan: Number(match[1]),
    magenta: Number(match[2]),
    yellow: Number(match[3]),
    key: Number(match[4]),
    alpha: Number(match[5])
  });
}
