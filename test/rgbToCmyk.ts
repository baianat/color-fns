import { rgbToCmyk } from '../src/rgbToCmyk';

const rgb = {
  blue: 199,
  green: 155,
  red: 200
};

const cmyk = {
  cyan: 0,
  magenta: 22, // should be 23
  yellow: 0,
  key: 21, // should be 22
  alpha: 1
};

test('converts rgb color to cmyk color', () => {
  expect(rgbToCmyk(rgb)).toMatchObject(cmyk);
  expect(rgbToCmyk('rgb(200, 155, 199)')).toMatchObject(cmyk);
  expect(rgbToCmyk(null)).toBe(null);
});
