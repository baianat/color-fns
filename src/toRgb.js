import getColorModel from './getColorModel';
import getRgbValues from './getRgbValues';
import hexToRgb from './hexToRgb';
import hslToRgb from './hslToRgb';

export default function toRgb (color, details) {
  let model = getColorModel(color);

  if (model === 'hex') {
    return hexToRgb(...arguments);
  }
  if (model === 'hsl') {
    return hslToRgb(...arguments);
  }
  if (model === 'rgb' && details) {
    return getRgbValues(color).slice(0, 4);
  }
  if (model === 'rgb') {
    return getRgbValues(color)[0];
  }
  return null;
}
