import { cmykToHsl } from '@/cmykToHsl';
import { CmykColor } from '@/types';

const cmyk = new CmykColor({
  cyan: 0,
  magenta: 22,
  yellow: 0,
  key: 21,
});

const hsl = {
    invalid: false,
    hue:300,
    sat:28, // should be 29
    lum:70,
    alpha:1,
    model: 'hsl'
  }

test('converts hex color to cmyk color', () => {
  expect(cmykToHsl(cmyk)).toMatchObject(hsl);
  expect(cmykToHsl(cmyk.toString())).toMatchObject(hsl);
  expect(cmykToHsl()).toHaveProperty('invalid', true);
});
