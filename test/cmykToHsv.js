import cmykToHsv from '../src/cmykToHsv';
import { CmykColor } from '../src/types';

const cmyk = new CmykColor({
  cyan: 0,
  magenta: 22,
  yellow: 0,
  key: 21,
});

const hsv = {
    invalid: false,
    hue:300,
    sat:21, // should be 22
    val:78, // should be 79
    alpha:1,
    model: 'hsv'
  }

test('converts hex color to cmyk color', () => {
  expect(cmykToHsv(cmyk)).toMatchObject(hsv);
  expect(cmykToHsv(cmyk.toString())).toMatchObject(hsv);
  expect(cmykToHsv()).toHaveProperty('invalid', true);
});
