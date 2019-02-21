import { parseCmyk } from './parseCmyk';
import { ICmykColor } from './types/cmyk';
import { IRgbColor } from './types/rgb';
import { normalizeDecNum } from './utils';

export function cmykToRgb (cmyk: ICmykColor | string | null): IRgbColor | null {
  cmyk = typeof cmyk === 'string' ? parseCmyk(cmyk) : cmyk;
  if (!cmyk) {
    return null;
  }

  // Convert the CMYK values to the range 0-1
  const [cyan, magenta, yellow, key, alpha] = [cmyk.cyan / 100, cmyk.magenta / 100, cmyk.yellow / 100, cmyk.key / 100, cmyk.alpha];

  // Calculate the rgb values
  const red = normalizeDecNum(255 * (1 - cyan) * (1 - key));
  const green = normalizeDecNum(255 * (1 - magenta) * (1 - key));
  const blue = normalizeDecNum(255 * (1 - yellow) * (1 - key));

  return {
    alpha: typeof alpha === 'undefined' ? 1 : alpha,
    blue,
    green,
    red
  };
}
