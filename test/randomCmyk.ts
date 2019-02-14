import { randomCmyk } from '../src/randomCmyk';
import { CmykColor } from '../src/types';

test('generates random cmyk color', () => {
  expect(randomCmyk()).toBeInstanceOf(CmykColor);
  expect(randomCmyk().invalid).toBe(false);
});
