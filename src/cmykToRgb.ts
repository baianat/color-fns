import { parseCmyk } from './parseCmyk';
import { ICmykColor, IRgbColor } from './types';
import { normalizeDecNum } from './utils';

export function cmykToRgb (cmyk: ICmykColor | string | null): IRgbColor | null {
  const parsed = typeof cmyk === 'string' ? parseCmyk(cmyk) : cmyk;
  if (!parsed) {
    return null;
  }

  // Convert the CMYK values to the range 0-1
  const [cyan, magenta, yellow, key, alpha] = [parsed.cyan / 100, parsed.magenta / 100, parsed.yellow / 100, parsed.key / 100, parsed.alpha];

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
