import { hexToHsl } from '@/hexToHsl';
import { HexColor } from '@/types';

const hex = new HexColor({
  red: 'a1',
  green: '16',
  blue: '12',
  alpha: '7f'
});

const hsl = {
  invalid: false,
  hue: 1, // hue should be 2 not 1
  sat: 79,
  lum: 35,
  alpha: 0.5,
  model: 'hsl'
}

test('converts hex color to hsl color', () => {
  expect(hexToHsl(hex)).toMatchObject(hsl);
  expect(hexToHsl(hex.toString())).toMatchObject(hsl);
  expect(hexToHsl()).toHaveProperty('invalid', true);
});
