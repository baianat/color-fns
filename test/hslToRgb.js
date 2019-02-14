import { hslToRgb } from '@/hslToRgb';
import { HslColor } from '@/types';

const hsl = new HslColor({
  hue: 2,
  sat: 80,
  lum: 35,
  alpha: 1
});

const rgb = {
  invalid: false,
  red: 160,
  green: 22,
  blue: 17,
  alpha: 1,
  model: 'rgb'
}

test('converts hsl color to rgb color', () => {
  expect(hslToRgb(hsl)).toMatchObject(rgb);
  expect(hslToRgb(hsl.toString())).toMatchObject(rgb);
  expect(hslToRgb()).toHaveProperty('invalid', true);
});
