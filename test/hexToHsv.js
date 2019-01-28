import hexToHsv from '../src/hexToHsv';
import { HexColor } from '../src/types';

const hex = new HexColor({
  red: 'a1',
  green: '16',
  blue: '12',
  alpha: '7f'
});

const hsv = {
  invalid: false,
  hue: 1, // hue should be 2 not 1
  sat: 88,
  val: 63,
  alpha: 0.5,
  model: 'hsv'
}

test('converts hex color to hsv color', () => {
  expect(hexToHsv(hex)).toMatchObject(hsv);
  expect(hexToHsv(hex.toString())).toMatchObject(hsv);
  expect(hexToHsv()).toHaveProperty('invalid', true);
});
