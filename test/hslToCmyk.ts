import { hslToCmyk } from '../src/hslToCmyk';
import { HslColor } from '../src/types';

const hsl = new HslColor({
  hue:45,
  sat:68,
  lum:23
});

const cmyk = {
  invalid: false,
  cyan: 0, // should be 31
  magenta: 20, // should be 55
  yellow: 81,
  key: 61, // should be 62
  alpha: 1,
  model: 'cmyk'
}

test('converts hsl color to cmyk color', () => {
  expect(hslToCmyk(hsl)).toMatchObject(cmyk);
  expect(hslToCmyk(hsl.toString())).toMatchObject(cmyk);
  expect(hslToCmyk(null)).toHaveProperty('invalid', true);
});
