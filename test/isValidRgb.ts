import { isValidRgb } from '../src/isValidRgb';

test('validating colors', () => {
  expect(isValidRgb('rgb(255, 100, 200)')).toBe(true);
  expect(isValidRgb('rgba(255, 100, 200)')).toBe(true);
  expect(isValidRgb('rgb(256, 100, 200)')).toBe(false);
  expect(isValidRgb('rgb(255, 100, )')).toBe(false);
});
