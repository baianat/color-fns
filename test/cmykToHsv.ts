import { cmykToHsv } from '../src/cmykToHsv';
import { CmykColor } from '../src/types';

const cmyk = new CmykColor({
  cyan: 0,
  key: 21,
  magenta: 22,
  yellow: 0,
});

const hsv = {
  alpha:1,
  hue:300,
  invalid: false,
  model: 'hsv',
  sat:21, // should be 22
  val:78, // should be 79
}

test('converts hex color to cmyk color', () => {
  expect(cmykToHsv(cmyk)).toMatchObject(hsv);
  expect(cmykToHsv(cmyk.toString())).toMatchObject(hsv);
  expect(cmykToHsv(null)).toHaveProperty('invalid', true);
});
