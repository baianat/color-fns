import { isHexShorthand } from '../src/isHexShorthand';

test('check if color(s) in hex shorthand form', () => {
  expect(isHexShorthand('#c97f6a')).toBe(false);
  expect(isHexShorthand('#c97f6a7f')).toBe(false);
  expect(isHexShorthand('c97f6a')).toBe(false);
  expect(isHexShorthand('#c97f6')).toBe(false);
  expect(isHexShorthand('c97')).toBe(false);
  expect(isHexShorthand('#ffa')).toBe(true);
  expect(isHexShorthand('#c97f')).toBe(true);
});
