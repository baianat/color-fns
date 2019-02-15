import { isValidHex } from '../src/isValidHex';

test('validates hex color strings', () => {
  expect(isValidHex('#c97f6a')).toBe(true);
  expect(isValidHex('#ffa')).toBe(true);
  expect(isValidHex('c97f6a')).toBe(false);
  expect(isValidHex('#c97f6')).toBe(false);
  expect(isValidHex('#z3f5fa')).toBe(false);
});
