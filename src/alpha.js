import getColorModel from './getColorModel';
import parseRgb from './parseRgb';
import parseHex from './parseHex';
import parseHsl from './parseHsl';
import decNumToHex from './decNumToHex';

export default function alpha (color, alpha) {
  if (alpha.slice(-1) === '%') {
    alpha = alpha.slice(0, -1) / 100;
  }
  alpha = Number(alpha);
  if (isNaN(alpha) || alpha > 1 || alpha < 0) {
    return 'Invalid alpha';
  }

  const model = getColorModel(color);

  if (model === 'rgb') {
    const val = parseRgb(color);
    if (val.invalid) return 'Invalid color';
    return `rgba(${val.red},${val.green},${val.blue},${alpha})`;
  }
  if (model === 'hex') {
    const val = parseHex(color);
    if (val.invalid) return 'Invalid color';
    return `#${val.red}${val.green}${val.blue}${decNumToHex(alpha * 255)}`;
  }
  if (model === 'hsl') {
    const val = parseHsl(color);
    if (val.invalid) return 'Invalid color';
    return `hsla(${val.hue},${val.sat},${val.lum},${alpha})`;
  }
  return 'Invalid color';
}
