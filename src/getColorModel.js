export default function getColorModel (color) {
  if (typeof color === 'object' && color.model) {
    return color.model;
  }

  if (color.slice(0, 1) === '#' && (color.length === 4 || color.length === 7)) {
    return 'hex';
  }

  if (color.slice(0, 1) === '#' && (color.length === 6 || color.length === 9)) {
    return 'hex';
  }

  if (color.slice(0, 4).toUpperCase() === 'RGBA') {
    return 'rgb';
  }

  if (color.slice(0, 3).toUpperCase() === 'RGB') {
    return 'rgb';
  }

  if (color.slice(0, 4).toUpperCase() === 'HSLA') {
    return 'hsl';
  }

  if (color.slice(0, 3).toUpperCase() === 'HSL') {
    return 'hsl';
  }

  if (color.slice(0, 4).toUpperCase() === 'HSVA') {
    return 'hsv';
  }

  if (color.slice(0, 3).toUpperCase() === 'HSV') {
    return 'hsv';
  }
  
  if (color.slice(0, 5).toUpperCase() === 'CMYKA') {
    return 'cmyk';
  }

  if (color.slice(0, 4).toUpperCase() === 'CMYK') {
    return 'cmyk';
  }

  return false;
}
