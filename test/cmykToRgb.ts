import { cmykToRgb } from '../src/cmykToRgb';
import { CmykColor } from '../src/types';

const cmyk = new CmykColor({
  cyan: 0,
  key: 21,
  magenta: 22,
  yellow: 0,
});

const rgb = {
  alpha: 1,
  blue: 201,
  green: 157,
  invalid: false,
  model: 'rgb',
  red: 201
}

test('converts rgb color to cmyk color', () => {
  expect(cmykToRgb(cmyk)).toMatchObject(rgb);
  expect(cmykToRgb(cmyk.toString())).toMatchObject(rgb);
  expect(cmykToRgb(null)).toHaveProperty('invalid', true);
});
