import { hexToCmyk } from '../src/hexToCmyk';
import { HexColor } from '../src/types';

const hex = new HexColor({
  blue: '61',
  green: '2c',
  red: '43',
});

const cmyk = {
  alpha: 1,
  cyan: 30, // should be 31
  invalid: false,
  key: 61, // should be 62
  magenta: 54, // should be 55
  model: 'cmyk',
  yellow: 0,
}

test('converts hex color to cmyk color', () => {
  expect(hexToCmyk(hex)).toMatchObject(cmyk);
  expect(hexToCmyk(hex.toString())).toMatchObject(cmyk);
  expect(hexToCmyk(null)).toHaveProperty('invalid', true);
});
