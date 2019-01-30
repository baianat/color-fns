import cmykToRgb from '../src/cmykToRgb';
import { CmykColor } from '../src/types';

const cmyk = new CmykColor({
  cyan: 0,
  magenta: 22,
  yellow: 0,
  key: 21,
});

const rgb = {
  invalid: false,
  red: 201,
  green: 157,
  blue: 201,
  alpha: 1,
  model: 'rgb'
}

test('converts rgb color to cmyk color', () => {
  expect(cmykToRgb(cmyk)).toMatchObject(rgb);
  expect(cmykToRgb(cmyk.toString())).toMatchObject(rgb);
  expect(cmykToRgb()).toHaveProperty('invalid', true);
});
