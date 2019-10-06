enum ColorModel {
  UNKNOWN = '',
  RGB = 'rgb',
  HEX = 'hex',
  HSL = 'hsl',
  HSV = 'hsv',
  CMYK = 'cmyk'
}

export function whichModel(color: string | null): ColorModel {
  if (!color) {
    return ColorModel.UNKNOWN;
  }

  if (color.slice(0, 1) === '#' && (color.length === 4 || color.length === 7)) {
    return ColorModel.HEX;
  }

  if (color.slice(0, 1) === '#' && (color.length === 6 || color.length === 9)) {
    return ColorModel.HEX;
  }

  if (color.slice(0, 3).toUpperCase() === 'RGB') {
    return ColorModel.RGB;
  }

  if (color.slice(0, 3).toUpperCase() === 'HSL') {
    return ColorModel.HSL;
  }

  if (color.slice(0, 3).toUpperCase() === 'HSV') {
    return ColorModel.HSV;
  }

  if (color.slice(0, 4).toUpperCase() === 'CMYK') {
    return ColorModel.CMYK;
  }

  return ColorModel.UNKNOWN;
}
