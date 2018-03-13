export default function getColorModel(color) {
  if (color.slice(0, 1) === '#' && (color.length === 4 || color.length === 7)) {
    return 'hex';
  }
  if (color.slice(0, 3).toUpperCase() === 'RGB') {
    return 'rgb';
  }
  if (color.slice(0, 3).toUpperCase() === 'HSL') {
    return 'hsl';
  }
  return false;
}
