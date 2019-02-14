import { CmykColor } from './types';

export function parseCmyk (cmyk: string | null) {
  if (typeof cmyk !== 'string') {
    return new CmykColor(null)
  }

  // will consider cmyk/cmyka color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'cmyk(100, 0, 0, 0, 0.5)', 'cmyka(0, 0, 0, 0)'
  // the output for the inputted examples 'cmyka(100, 0, 0, 0.5)', 'cmyk(0, 0, 0)'
  const match = cmyk.match(/^cmyka?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
  if (!match || match.length < 5) {
    return new CmykColor(null)
  }

  return new CmykColor({
    alpha: Number(match[5]),
    cyan: Number(match[1]),
    key: Number(match[4]),
    magenta: Number(match[2]),
    yellow: Number(match[3]),
  });
}
