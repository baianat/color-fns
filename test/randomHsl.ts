import { randomHsl } from '../src/randomHsl';
import { HslColor } from '../src/types';

test('generates random hsl color', () => {
  expect(randomHsl()).toBeInstanceOf(HslColor);
  expect(randomHsl().invalid).toBe(false);
});
