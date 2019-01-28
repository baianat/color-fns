import hsvToHex from '../src/hsvToHex';
import { HsvColor } from '../src/types';

const hsv = new HsvColor({
  hue: 1,
  sat: 88,
  val: 63,
  alpha: 0.5
});

const hex = {
  invalid: false,
  red: 'a0', // should be a1
  green: '15', // should be 16
  blue: '13',
  alpha: '7f',
  model: 'hex'
}

test('converts hex color to hsv color', () => {
  expect(hsvToHex(hsv)).toMatchObject(hex);
  expect(hsvToHex(hsv.toString())).toMatchObject(hex);
  expect(hsvToHex()).toHaveProperty('invalid', true);
});
