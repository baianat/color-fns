import { isValidCmyk } from '../src/isValidCmyk';

test('validates CMYK color strings', () => {
  expect(isValidCmyk('cmyk(40, 40, 40, 40)')).toBe(true);
  expect(isValidCmyk('cmyk(100, 0, 100, 0)')).toBe(true);
  expect(isValidCmyk(null)).toBe(false);
  expect(isValidCmyk('cmyk(-1, 100, 100, 100)')).toBe(false);
  expect(isValidCmyk('cmyk(40, 100, 101, 100)')).toBe(false);
});
