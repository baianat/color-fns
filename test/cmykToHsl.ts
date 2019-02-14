import { cmykToHsl } from '../src/cmykToHsl';
import { CmykColor } from '../src/types';

const cmyk = new CmykColor({
  cyan: 0,
  key: 21,
  magenta: 22,
  yellow: 0,
});

const hsl = {
  alpha:1,
  hue:300,
  invalid: false,
  lum:70,
  model: 'hsl',
  sat:28
}

test('converts hex color to cmyk color', () => {
  expect(cmykToHsl(cmyk)).toMatchObject(hsl);
  expect(cmykToHsl(cmyk.toString())).toMatchObject(hsl);
  expect(cmykToHsl(null)).toHaveProperty('invalid', true);
});
