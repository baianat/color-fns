import { hslToRgb } from '../src/hslToRgb';

const hsl = {
  hue: 2,
  sat: 80,
  lum: 35,
  alpha: 1
};

const rgb = {
  red: 160,
  green: 22,
  blue: 17,
  alpha: 1
}

test('converts hsl color to rgb color', () => {
  expect(hslToRgb(hsl)).toMatchObject(rgb);
  expect(hslToRgb('hsl(2, 80%, 35%, 1)')).toMatchObject(rgb);
  expect(hslToRgb(null)).toBeNull();
});
