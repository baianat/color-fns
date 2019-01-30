import hexToCmyk from '../src/hexToCmyk';
import { HexColor } from '../src/types';

const hex = new HexColor({
  red: '43',
  green: '2c',
  blue: '61'
});

const cmyk = {
  invalid: false,
  cyan: 30, // should be 31
  magenta: 54, // should be 55
  yellow: 0,
  key: 61, // should be 62
  alpha: 1,
  model: 'cmyk'
}

test('converts hex color to cmyk color', () => {
  expect(hexToCmyk(hex)).toMatchObject(cmyk);
  expect(hexToCmyk(hex.toString())).toMatchObject(cmyk);
  expect(hexToCmyk()).toHaveProperty('invalid', true);
});
