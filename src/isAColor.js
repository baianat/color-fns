import getColorModel from './getColorModel';

export default function isAColor (color) {
  return !!getColorModel(color);
}
