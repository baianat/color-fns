import { mixColors } from '../src/mixColors';

const color1 = {
  red: 255,
  green: 0,
  blue: 127,
  alpha: 0
};

const color2 = {
  red: 0,
  green: 255,
  blue: 0,
  alpha: 1
};

const mixedColor = {
  red: 127,
  green: 127,
  blue: 63,
  alpha: 0.5
}

test('mix two colors object', () => {
  expect(mixColors(color1, color2, 0.5)).toMatchObject(mixedColor);
});
