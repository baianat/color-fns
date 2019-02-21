import { isValidHsl } from '../src/isValidHsl';

test('validates HSL color strings', () => {
  expect(isValidHsl('hsl(360, 0%, 0%)')).toBe(true);
  expect(isValidHsl('hsl(0, 100%, 100%)')).toBe(true);
  expect(isValidHsl('hsl(361, 0%, 0%)')).toBe(false);
  expect(isValidHsl('hsl(360, 101%, 0%)')).toBe(false);
  expect(isValidHsl('hsl(360, 101%)')).toBe(false);
});
