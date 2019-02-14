import { mixColors } from '@/mixColors';
import { HexColor } from '@/types';

const color1 = new HexColor({
  red: 'ff',
  green: '00',
  blue: '7f',
  alpha: '00'
});
const color2 = new HexColor({
  red: '00',
  green: 'ff',
  blue: '00',
  alpha: 'ff'
});

const mixedColor = {
  invalid: false,
  red: 127,
  green: 127,
  blue: 63,
  alpha: 0.5,
  model: 'rgb'
}

test('mix two colors object', () => {
  expect(mixColors(color1, color2, 0.5)).toMatchObject(mixedColor);
  expect(mixColors(color1.toString(), color2.toString(), 0.5)).toMatchObject(mixedColor);
});
