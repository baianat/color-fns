import getColorModel from './getColorModel';

/**
 * Checks if the given color string is valid (parsable).
 *
 * @param {String} color The color string to be checked.
 */
export default function isAColor (color) {
  return !!getColorModel(color);
}
