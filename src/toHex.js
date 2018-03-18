import getColorModel from './getColorModel';
import getHexValues from './getHexValues';
import rgbToHex from './rgbToHex';
import hslToHex from './hslToHex';

export default function toHex (color, details) {
  let model = getColorModel(color);

  if (model === 'rgb') {
    return rgbToHex(...arguments);
  }
  if (model === 'hsl') {
    return hslToHex(...arguments);
  }
  if (model === 'hex' && details) {
    return getHexValues(color).slice(0, 4);
  }
  if (model === 'hex') {
    return getHexValues(color)[0];
  }
  return null;
}
