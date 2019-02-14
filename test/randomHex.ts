import { randomHex } from '../src/randomHex';
import { HexColor } from '../src/types';

test('generates random hex', () => {
  expect(randomHex()).toBeInstanceOf(HexColor);
  expect(randomHex().invalid).toBe(false);
});
