import hslToHex from '../src/hslToHex';
import { HslColor } from '../src/types';

const hsl = new HslColor({
  hue: 200,
  sat: 100,
  lum: 50
});

const hex = {
  invalid: false,
  red: '00',
  green: 'a9',
  blue: 'ff',
  alpha: 'ff',
  model: 'hex'
}

test('converts hsl color to hex color', () => {
  expect(hslToHex(hsl)).toMatchObject(hex);
  expect(hslToHex(hsl.toString())).toMatchObject(hex);
  expect(hslToHex()).toHaveProperty('invalid', true);
});
