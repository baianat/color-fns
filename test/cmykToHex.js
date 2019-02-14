import { cmykToHex } from '@/cmykToHex';
import { CmykColor } from '@/types';

const cmyk = new CmykColor({
  cyan: 0,
  magenta: 22,
  yellow: 0,
  key: 21,
});

const hex = {
    invalid: false,
    red: 'c9',
    green: '9d',
    blue: 'c9',
    alpha: 'ff',
    model: 'hex'
  }

test('converts hex color to cmyk color', () => {
  expect(cmykToHex(cmyk)).toMatchObject(hex);
  expect(cmykToHex(cmyk.toString())).toMatchObject(hex);
  expect(cmykToHex()).toHaveProperty('invalid', true);
});
