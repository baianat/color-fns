import { IRgbColor } from './types';

export function parseRgb(value: string | null): IRgbColor | null {
  if (typeof value !== 'string') {
    return null;
  }

  // will consider rgb/rgba color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'rgb(100, 0, 0, 0.5)', 'rgba(0, 0, 0)'
  // the output for the inputted examples 'rgba(100, 0, 0, 0.5)', 'rgb(0, 0, 0)'
  const match = value.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
  if (!match || match.length < 4) {
    return null;
  }

  return {
    alpha: typeof match[4] !== 'undefined' ? Number(match[4]) : undefined,
    blue: Number(match[3]),
    green: Number(match[2]),
    red: Number(match[1])
  };
}
