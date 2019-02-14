import { randomHsv } from '../src/randomHsv';
import { HsvColor } from '../src/types';

test('generates random hsv color', () => {
  expect(randomHsv()).toBeInstanceOf(HsvColor);
  expect(randomHsv().invalid).toBe(false);
});
