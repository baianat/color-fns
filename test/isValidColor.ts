import { isValidColor } from '../src/isValidColor';

test('validating colors', () => {
  expect(isValidColor('#c97f6a')).toBe(true);
  expect(isValidColor('#ffa')).toBe(true);
  expect(isValidColor('c97f6a')).toBe(false);
  expect(isValidColor('#c97f6')).toBe(false);

  expect(isValidColor('rgb(255, 100, 200)')).toBe(true);
  expect(isValidColor('rgba(255, 100, 200)')).toBe(true);
  expect(isValidColor('rgb(256, 100, 200)')).toBe(false);
  expect(isValidColor('rgb(255, 100, )')).toBe(false);
});
