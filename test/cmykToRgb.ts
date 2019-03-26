import { cmykToRgb } from '../src/cmykToRgb';

const cmyk = {
  cyan: 0,
  key: 21,
  magenta: 22,
  yellow: 0,
};

const rgb = {
  alpha: 1,
  blue: 201,
  green: 157,
  red: 201
}

test('converts rgb color to cmyk color', () => {
  expect(cmykToRgb(cmyk)).toMatchObject(rgb);
  expect(cmykToRgb('cmyk(0, 22, 0, 21)')).toMatchObject(rgb);
  expect(cmykToRgb(null)).toBeNull();
});
