import { rgbToCmyk } from '@/rgbToCmyk';
import { RgbColor } from '@/types';

const rgb = new RgbColor({
  red: '200',
  green: '155',
  blue: '199'
});

const cmyk = {
  invalid: false,
  cyan: 0,
  magenta: 22, // should be 23
  yellow: 0,
  key: 21, // should be 22
  alpha: 1,
  model: 'cmyk'
}

test('converts rgb color to cmyk color', () => {
  expect(rgbToCmyk(rgb)).toMatchObject(cmyk);
  expect(rgbToCmyk(rgb.toString())).toMatchObject(cmyk);
  expect(rgbToCmyk()).toHaveProperty('invalid', true);
});
