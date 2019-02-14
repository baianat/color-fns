import { randomRgb } from '../src/randomRgb';
import { RgbColor } from '../src/types';

test('generates random rgbs', () => {
  expect(randomRgb()).toBeInstanceOf(RgbColor);
  expect(randomRgb().invalid).toBe(false);
});
