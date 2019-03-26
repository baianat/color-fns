import { isValidHsv } from '../src/isValidHsv';

test('validates HSV color strings', () => {
  expect(isValidHsv('hsv(360, 0%, 0%)')).toBe(true);
  expect(isValidHsv('hsv(0, 100%, 100%)')).toBe(true);
  expect(isValidHsv('hsv(361, 0%, 0%)')).toBe(false);
  expect(isValidHsv('hsv(360, 101%, 0%)')).toBe(false);
  expect(isValidHsv('hsv(360, 101%)')).toBe(false);
});
