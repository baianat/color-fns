import { IHslColor } from './types/hsl';

export interface HslParsingOptions {
  allowDecimal: boolean;
}

const defaultOpts: HslParsingOptions = {
  allowDecimal: true
};

export function parseHsl (value: string | null, options: HslParsingOptions = defaultOpts): IHslColor | null {
  if (typeof value !== 'string') {
    return null;
  }

  let regex = /^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i;
  if (!options.allowDecimal) {
    regex = /^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i;
  }

  // will consider hsl/hsla color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'hsl(255, 100%, 50%, 0.5)', 'hsla(100, 100%, 50%)'
  // the output for the inputted examples 'hsla(255, 100%, 50%, 0.5)', 'hsl(100, 100%, 50%)'
  const match = value.match(regex);
  if (!match || match.length < 4) {
    return null;
  }

  return {
    alpha: typeof match[4] !== 'undefined' ? Number(match[4]) : undefined,
    hue: Number(match[1]),
    lum: Number(match[3]),
    sat: Number(match[2]),
  };
}
