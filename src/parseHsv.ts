import { IHsvColor } from './types/hsv';

export interface HsvParsingOptions {
  allowDecimal: boolean;
}

const defaultOpts: HsvParsingOptions = {
  allowDecimal: true
};

export function parseHsv(value: IHsvColor | string, options: HsvParsingOptions = defaultOpts): IHsvColor | null {
  if (typeof value !== 'string') {
    return null;
  }

  let regex = /^hsva?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i;
  if (!options.allowDecimal) {
    regex = /^hsva?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i;
  }

  // will consider hsv/hsva color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'hsv(255, 100%, 50%, 0.5)', 'hsva(100, 100%, 50%)'
  // the output for the inputted examples 'hsva(255, 100%, 50%, 0.5)', 'hsv(100, 100%, 50%)'
  const match = value.match(regex);
  if (!match || match.length < 4) {
    return null;
  }

  return {
    alpha: typeof match[4] !== 'undefined' ? Number(match[4]) : undefined,
    hue: Number(match[1]),
    sat: Number(match[2]),
    val: Number(match[3]),
  };
}
