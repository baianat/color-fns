import { IHslColor } from './types/hsl';

export function parseHsl (value: string | null): IHslColor | null {
  if (typeof value !== 'string') {
    return null;
  }

  // will consider hsl/hsla color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'hsl(255, 100%, 50%, 0.5)', 'hsla(100, 100%, 50%)'
  // the output for the inputted examples 'hsla(255, 100%, 50%, 0.5)', 'hsl(100, 100%, 50%)'
  const match = value.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
  if (!match || match.length < 4) {
    return null;
  }

  return {
    alpha: typeof match[4] !== 'undefined' ? Number(match[4]) : 1,
    hue: Number(match[1]),
    lum: Number(match[3]),
    sat: Number(match[2]),
  };
}
