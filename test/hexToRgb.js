import hexToRgb from '../src/hexToRgb';
import { HexColor } from '../src/types';

const hex = new HexColor({
  red: 'a1',
  green: '16',
  blue: '12'
});

const rgb = {
  invalid: false,
  red: 161,
  green: 22,
  blue: 18,
  alpha: 1,
  model: 'rgb'
}

test('converts hex color to rgb color', () => {
  expect(hexToRgb(hex)).toMatchObject(rgb);
  expect(hexToRgb(hex.toString())).toMatchObject(rgb);
  expect(hexToRgb()).toHaveProperty('invalid', true);
});
