import getColorModel from './getColorModel';
import isValidColor from './isValidColor';
import isHexShorthand from './isHexShorthand';
import hexNumToDec from './hexNumToDec';
import decNumToHex from './decNumToHex';
import rgbToHex from './rgbToHex';
import rgbToHsl from './rgbToHsl';
import hexToRgb from './hexToRgb';
import hslToRgb from './hslToRgb';
import hexToHsl from './hexToHsl';
import hslToHex from './hslToHex';
import toRgb from './toRgb';
import toHsl from './toHsl';
import toHex from './toHex';
import parseRgb from './parseRgb';
import parseHsl from './parseHsl';
import parseHex from './parseHex';
import getRandomColor from './getRandomColor';
import normalizeDecNum from './normalizeDecNum';
import expandHexShorthand from './expandHexShorthand';
import alpha from './alpha';
import mixColors from './mixColors';
import * as Colors from './types';

export default {
  getColorModel,
  isValidColor,
  isHexShorthand,
  hexNumToDec,
  decNumToHex,
  rgbToHex,
  rgbToHsl,
  hexToRgb,
  hslToRgb,
  hexToHsl,
  hslToHex,
  toRgb,
  toHex,
  toHsl,
  parseRgb,
  parseHex,
  parseHsl,
  getRandomColor,
  normalizeDecNum,
  expandHexShorthand,
  alpha,
  mixColors,
  Colors,
  version: '__VERSION__'
};
