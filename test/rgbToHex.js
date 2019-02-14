import { rgbToHex } from '@/rgbToHex';
import { RgbColor } from '@/types';

const rgb = new RgbColor({
  red: 13,
  green: 200,
  blue: 230,
  alpha: 0.5
});

const hex = {
  invalid: false,
  red: '0d',
  green: 'c8',
  blue: 'e6',
  alpha: '7f',
  model: 'hex'
}

test('converts rgb color to hex color', () => {
  expect(rgbToHex(rgb)).toMatchObject(hex);
  expect(rgbToHex(rgb.toString())).toMatchObject(hex);
  expect(rgbToHex()).toHaveProperty('invalid', true);
});
