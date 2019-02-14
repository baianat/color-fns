import { cmykToHex } from '../src/cmykToHex';
import { CmykColor } from '../src/types';

const cmyk = new CmykColor({
  cyan: 0,
  key: 21,
  magenta: 22,
  yellow: 0
});

const hex = {
  alpha: 'ff',
  blue: 'c9',
  green: '9d',
  invalid: false,
  model: 'hex',
  red: 'c9'
}

test('converts hex color to cmyk color', () => {
  expect(cmykToHex(cmyk)).toMatchObject(hex);
  expect(cmykToHex(cmyk.toString())).toMatchObject(hex);
  expect(cmykToHex(null)).toHaveProperty('invalid', true);
});
