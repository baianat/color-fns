import { isValidRgb } from '../src/isValidRgb';

test('validates RGB color strings', () => {
  expect(isValidRgb('rgb(255, 100, 200)')).toBe(true);
  expect(isValidRgb('rgba(255, 100, 200)')).toBe(true);
  expect(isValidRgb('rgb(256, 100, 200)')).toBe(false);
  expect(isValidRgb('rgb(255, 100, )')).toBe(false);
  expect(isValidRgb('rgb(255, 100, 100, 1.1)')).toBe(false);
});
