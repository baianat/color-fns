import getColorModel from './getColorModel';
import getHslValues from './getHslValues';
import hexToHsl from './hexToHsl';
import rgbToHsl from './rgbToHsl';

export default function toHsl (color, details) {
  let model = getColorModel(color);

  if (model === 'hex') {
    return hexToHsl(...arguments);
  }
  if (model === 'rgb') {
    return rgbToHsl(...arguments);
  }
  if (model === 'hsl' && details) {
    return getHslValues(color).slice(0, 4);
  }
  if (model === 'hsl') {
    return getHslValues(color)[0];
  }
  return null;
}
